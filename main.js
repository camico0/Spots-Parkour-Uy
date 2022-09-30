window.addEventListener("load", () => {
    const menu_header = document.querySelector(".list");
    const btn_menu = document.querySelector(".bars-menu");
    const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
    const preBtn = [...document.querySelectorAll(".pre-btn")];

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

    preBtn[0].addEventListener("click", () => {
        let container = document.getElementsByClassName("spot-container")[0];
        let spot_card = document.getElementsByClassName("product-card")[0];

        container.scrollLeft -= spot_card.clientWidth;
    });

    nxtBtn[0].addEventListener("click", () => {
        let container = document.getElementsByClassName("spot-container")[0];
        let spot_card = document.getElementsByClassName("product-card")[0];

        container.scrollLeft += spot_card.clientWidth;
    });
});