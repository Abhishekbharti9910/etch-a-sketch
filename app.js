var container = document.getElementById("mainContain");//grid container
var slider = document.getElementById("slider");

// def function for deafault pixel
window.onload = () => {
    container.style.gridTemplateColumns = "repeat(4,1fr)";
    for (let i = 0; i < 4*4; i++) {
        let div = document.createElement("div");
        div.classList.add("pixel");
        container.insertAdjacentElement("beforeend",div);       
    }
};

// function for manual slider pixel number
slider.addEventListener("mouseup",()=>{
    let k = slider.value;
    rmvGrid();
    container.style.gridTemplateColumns = `repeat(${k},1fr)`;
    container.style.gridTemplateRows = `repeat(${k},1fr)`;
    for (let i = 0; i < k*k; i++) {
        let div = document.createElement("div");
        div.classList.add("pixel");
        container.insertAdjacentElement("afterbegin",div);
    }
});
// rmv grid before adding
function rmvGrid() {
    let divToRmv = document.getElementsByClassName("pixel");
        Array.from(divToRmv).forEach(e => {
            e.remove();
        });
}
