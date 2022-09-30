async function getSpots() {
    const res = await fetch("./spots.json");
    const data = await res.json();

    console.log(data);

    if (data.data) {
        console.log("entre");
        data.data.forEach((spot) => {
            createCardSpot(spot);
        });
    }
}

function createCardSpot(spot) {
    console.log(spot);

    const spot_container = document.querySelector(".spot-container");

    let product_card = document.createElement("div");

    let product_image = document.createElement("div");
    let card_img = document.createElement("img");
    let button_card = document.createElement("button");

    let card_info = document.createElement("div");
    let card_title = document.createElement("h2");
    let card_description = document.createElement("p");

    product_card.classList.add("product-card");
    product_image.classList.add("product-image");
    card_img.classList.add("spot-thumb");
    button_card.classList.add("spot-card");
    card_info.classList.add("spot-info");
    card_title.classList.add("spot-title");
    card_description.classList.add("product-short-description");

    card_img.src = spot.Imagen;
    card_title.innerHTML = spot.Nombre;
    card_description.innerHTML = spot.Descripcion;

    // slider.appendChild(spot_container);
    // spot_container.appendChild(product_card);

    spot_container.appendChild(product_card);
    product_card.appendChild(product_image);
    product_image.appendChild(card_img);
    product_image.appendChild(button_card);
    product_card.appendChild(card_info);
    card_info.appendChild(card_title);
    card_info.appendChild(card_description);

    console.log(product_card);
}

getSpots();