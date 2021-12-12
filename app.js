let fenetre = document.getElementById('fenetre');
let close = document.getElementById("close");
let container = document.getElementById("window");

fenetre.addEventListener("click", () => {
    container.style.display= 'block';
})

close.addEventListener("click", () => {
    container.style.display = "none";
})