// Recuperar el carrito del almacenamiento local
const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

const $grid = document.querySelector(".grid");

//const favoritos = ["9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8", "4c7e6819-a91a-45b2-a454-f931e4a7cce3"]

favoritos.forEach((e) => {
  const card = document.createElement("div");
  card.classList.add("card");

  fetch("https://hp-api.onrender.com/api/characters")
    .then((resp) => {
      console.log(resp);
      return resp.json();
    })

    .then((data) => {
      const personaje = data.find((f) => f.id == e.id);

      if (personaje.image) {
        card.innerHTML += `
                    <img src="${personaje.image}">
                `;
      } else {
        card.innerHTML += `
                    <img src="../assets/img/noPhoto.png">
                `;
      }

      card.innerHTML += `
              <div class="card-content"> 
                <h4>Name: ${personaje.name}</h4>
                <p><strong>Gender:</strong> ${
                    personaje.gender !== "" ? personaje.gender : "No Data"
                }</p>
                <p><strong>House:</strong> ${
                    personaje.house !== "" ? personaje.house : "No Data"
                }</p>
                <p><strong>Actor:</strong> ${
                    personaje.actor !== "" ? personaje.actor : "No Data"
                }</p>
            `;
    });

  $grid.appendChild(card);
});
