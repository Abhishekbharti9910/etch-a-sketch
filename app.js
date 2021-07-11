var container = document.getElementById("mainContain");//grid container
var slider = document.getElementById("slider");
const Hcolors = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const randomcolors = ["#f60100", "#002540", "#000000", "#0070f7"];
const btns = document.querySelectorAll("button");
var div;
// def function for deafault on load pixel
dfltByNature = () => {
    container.style.gridTemplateColumns = "repeat(4,1fr)";
    for (let i = 0; i < 4*4; i++) {
        div = document.createElement("div");
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
        div = document.createElement("div");
        div.classList.add("pixel");
        container.insertAdjacentElement("afterbegin",div);
    }
   active(); 
});


// rmv grid before adding
function rmvGrid() {
    let divToRmv = document.getElementsByClassName("pixel");
        Array.from(divToRmv).forEach(e => {
            e.remove();
        });
        
};
// adding hover color filling in the pixels
dfltByNature();

const active = () => {
    let pixels = document.querySelectorAll(".pixel");
    console.log(pixels);
    Array.from(pixels).forEach(pxl => {
        pxl.addEventListener("mouseover", (e) =>{
            let color = hexGen();
            
            e.target.style.backgroundColor = color;
        })
    });
    
};  

// hexcolor generator
function hexGen() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        SinglHCode = Hcolors[Math.floor(Math.random() * Hcolors.length)];
        hexColor += SinglHCode;
    }
    return hexColor;
}
// random color gen
function randomGen() {
    let ran = randomcolors[Math.floor(Math.random() * randomcolors.length)];
    return ran
}
// greyScale gen
// function greyScale() {
//     let color = "black";
//     opacity = 0.1;
    
// }

active();