let favoritos = [];

function agregarAFavorito(id) {
  favoritos.push({ id });
  alert(`Agregaste un personaje como favorito`);
}

// Guarda el contenido de favoritos en el almacenamiento local

window.addEventListener("beforeunload", () => {
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
});

const $grid = document.querySelector(".grid");

fetch("https://hp-api.onrender.com/api/characters")
  .then((resp) => {
    console.log(resp);
    return resp.json();
  })

  .then((data) => {
    data.forEach((e) => {
      const card = document.createElement("div");
      card.classList.add("card");

      if (e.image) {
        card.innerHTML += `
            <img src="${e.image}">
        `;
      } else {
        card.innerHTML += `
            <img src="../assets/img/noPhoto.png">
        `;
      }

      card.innerHTML += `

      <div class="card-content"> 
        <button onclick="agregarAFavorito('${
          e.id
        }')">Agregar a Favorito</button>
        <h4>Name: ${e.name}</h4>
        <p><strong>Gender:</strong> ${
          e.gender !== "" ? e.gender : "No Data"
        }</p>
        <p><strong>House:</strong> ${e.house !== "" ? e.house : "No Data"}</p>
        <p><strong>Actor:</strong> ${e.actor !== "" ? e.actor : "No Data"}</p>
        <p><strong>Date Of Birth:</strong> ${
          e.dateOfBirth !== null ? e.dateOfBirth : "No Data"
        }</p>
        <p><strong>Alive:</strong> ${e.alive === true ? "Alive" : "Dead"}</p>
        <p><strong>Age:</strong> ${
          e.alive === true && e.dateOfBirth !== null
            ? calculateAge(e.dateOfBirth)
            : " -"
        }</p>
    `;

      $grid.appendChild(card);
    });
  });

function calculateAge(birthday) {
  var birthday_array = birthday.split("-");
  var birthday_date = new Date(
    birthday_array[2],
    birthday_array[1] - 1,
    birthday_array[0]
  );
  var ageDifMs = Date.now() - birthday_date.getTime();
  var ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

window.onscroll = function () {
  if (document.documentElement.scrollTop > 100) {
    document.querySelector(".go-top-container").classList.add("show");
  } else {
    document.querySelector(".go-top-container").classList.remove("show");
  }
};

document.querySelector(".go-top-container").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
