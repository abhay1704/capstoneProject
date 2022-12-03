function openNav() {
    var nav = document.querySelector(".nav");
    nav.classList.toggle("onMoreClick");
    setTimeout( () => { nav.classList.remove("onMoreClick") },1000);
}