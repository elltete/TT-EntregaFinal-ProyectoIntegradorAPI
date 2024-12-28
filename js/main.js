// endpoint | Personajes (characters)

const $personajes = document.querySelector(".personajes");

fetch("https://hp-api.onrender.com/api/characters")
  .then((resp) => {
    console.log(resp);
    return resp.json();
  })

  .then((data) => {
    const data6 = data.slice(0, 6);

    data6.forEach((e) => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML += `
        <div class="card-content">
            <img src="${e.image}">
        </div>
        `;

      $personajes.appendChild(card);
    });
  });

// endpoint | hechizos (spells)

const $hechizos = document.querySelector(".hechizos");

fetch("https://hp-api.onrender.com/api/spells")
  .then((resp) => {
    console.log(resp);
    return resp.json();
  })

  .then((data) => {
    const data15 = data.slice(0, 15);

    data15.forEach((e) => {
      $hechizos.innerHTML += `
        <ul>
          <li><strong>Mame:</strong> ${e.name}</li>
          <li><strong>Description:</strong> ${e.description}</li>
        </ul>
        `;
    });
  });

// endpoint | personajes de Gryffindor house

const $gryffindor = document.querySelector(".Gryffindor");

fetch("https://hp-api.onrender.com/api/characters/house/Gryffindor")
  .then((resp) => {
    console.log(resp);
    return resp.json();
  })

  .then((data) => {
    const data3 = data.slice(0, 3);

    data3.forEach((e) => {
        const card = document.createElement("div");
        card.classList.add("card");
  
        card.innerHTML += `
          <div class="card-content">
              <img src="${e.image}">
          </div>
          `;
  
        $gryffindor.appendChild(card);
      });
    });

// endpoint | personajes de Slytherin house

const $slytherin = document.querySelector(".Slytherin");

fetch("https://hp-api.onrender.com/api/characters/house/Slytherin")
  .then((resp) => {
    console.log(resp);
    return resp.json();
  })

  .then((data) => {
    const data3 = data.slice(0, 3);

    data3.forEach((e) => {
        const card = document.createElement("div");
        card.classList.add("card");
  
        card.innerHTML += `
          <div class="card-content">
              <img src="${e.image}">
          </div>
          `;
  
        $slytherin.appendChild(card);
      });
    });

// endpoint | personajes de Hufflepuff house

const $hufflepuff = document.querySelector(".Hufflepuff");

fetch("https://hp-api.onrender.com/api/characters/house/Hufflepuff")
  .then((resp) => {
    console.log(resp);
    return resp.json();
  })

  .then((data) => {
    const data1 = data.slice(0, 1);

    data1.forEach((e) => {
        const card = document.createElement("div");
        card.classList.add("card");
  
        card.innerHTML += `
          <div class="card-content">
              <img src="${e.image}">
          </div>
          `;
  
        $hufflepuff.appendChild(card);
      });
    });

// endpoint | personajes de Ravenclaw house

const $ravenclaw = document.querySelector(".Ravenclaw");

fetch("https://hp-api.onrender.com/api/characters/house/Ravenclaw")
  .then((resp) => {
    console.log(resp);
    return resp.json();
  })

  .then((data) => {
    const data2 = data.slice(0, 2);

    data2.forEach((e) => {
        const card = document.createElement("div");
        card.classList.add("card");
  
        card.innerHTML += `
          <div class="card-content">
              <img src="${e.image}">
          </div>
          `;
  
        $ravenclaw.appendChild(card);
      });
    });

    // endpoint | personajes de Hogwarts Staff

const $hogwarts = document.querySelector(".Hogwarts");

fetch("https://hp-api.onrender.com/api/characters/staff")
  .then((resp) => {
    console.log(resp);
    return resp.json();
  })

  .then((data) => {
    const data8 = data.slice(0, 8);

    data8.forEach((e) => {
        const card = document.createElement("div");
        card.classList.add("card");
  
        card.innerHTML += `
          <div class="card-content">
              <img src="${e.image}">
          </div>
          `;
  
        $hogwarts.appendChild(card);
      });
    });