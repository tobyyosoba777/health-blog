let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
    if(darkmode.classList.contains("ri-moon-fill")) {
        darkmode.classList.replace("ri-moon-fill", "ri-sun-fill")
        document.body.classList.add("dark")
    } else {
        darkmode.classList.replace("ri-sun-fill", "ri-moon-fill")
        document.body.classList.remove("dark")
    }
}

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};