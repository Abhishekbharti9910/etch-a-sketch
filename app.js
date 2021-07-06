let slider = document.getElementById("slider");
var container = document.querySelector(".container");
var idiv = document.createElement("div");
slider.addEventListener("mouseup", ()=>{
    createGrid(slider.value);
})
function createGrid(num) {
    for (let i = 0; i < num*num; i++) {
        container.appendChild(idiv);
    }
}