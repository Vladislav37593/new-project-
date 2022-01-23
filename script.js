function myFunction(x) {
    x.classList.toggle("change");
}

let gamburgerMenu = document.querySelector('.gamburger_menu'),
    horizontalMenu = document.querySelector('.topnav');

function openMenu(gamb, menu) {
    gamb.addEventListener("click", function(event) {
        event.preventDefault();
        menu.classList.toggle('topnav--hide');
    });
}

openMenu(gamburgerMenu, horizontalMenu);