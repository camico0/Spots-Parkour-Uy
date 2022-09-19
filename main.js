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

window.addEventListener("load", () => {
    const menu_header = document.querySelector(".list");
    const btn_menu = document.querySelector(".bars-menu");

    btn_menu.addEventListener("click", () => {
        menu_header.classList.toggle("header_open");
        const parkour_spots = document.querySelector(".spots");
        let style_element = window.getComputedStyle(parkour_spots);
        let element_display = style_element.getPropertyValue("display");

        setTimeout(() => {
            if (element_display === "flex") {
                parkour_spots.style.display = "none";
            } else if (element_display === "none") {
                parkour_spots.style.display = "flex";
            }
        }, 200);
    });
});