// window.addEventListener("load", iniciar, false);

// function iniciar() {
//     let bars_menu = document.getElementById("bars_menu");
//     bars_menu.addEventListener("mouseover", menuJump);
// }

// function menuJump() {
//     let bars_menu = (document.getElementById("bars_menu").innerHTML =
//         "img/bars-2");
// }

const productContainers = [...document.querySelectorAll(".spot-container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener("click", () => {
        item.scrollLeft += containerWidth;
    });

    preBtn[i].addEventListener("click", () => {
        item.scrollLeft -= containerWidth;
    });
});