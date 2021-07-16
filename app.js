var container = document.getElementById("mainContain");//grid container
var slider = document.getElementById("slider");
const Hcolors = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const randomcolors = ["#f60100", "#002540", "#000000", "#0070f7"];
const btns = document.querySelectorAll("button");
var colorSelected;
var color = "black";
var div;
var cnt = 1;
// all targeted dom

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
const active = () => {
    let pixels = document.querySelectorAll(".pixel");
    Array.from(pixels).forEach(pxl => {
        pxl.addEventListener("mouseover", (e) =>{   colorSelected = selectColor(color,e);
            e.target.style.backgroundColor = colorSelected;
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
    return  ran;
}


//clear function
function clear() {
    let pixels = document.querySelectorAll(".pixel");
    Array.from(pixels).forEach(pxl => {
        pxl.style.backgroundColor = "white";
    })
    color = "black";
} 



// function color select
function selectColor(color,e) {
    if (color == "hexColor") {
        return hexGen();
    }
    else if (color == "Random") {
        return randomGen();
    }
    else if (color == "greyScale") {
       if (e.target.style.backgroundColor.match(/rgba/)) {
           let opacity = Number(e.target.style.backgroundColor.slice(-4,-1));
           if (opacity < 1) {
               console.log(opacity); 
               return `rgba(0,0,0,${opacity + 0.1})`;
           }
           else{
               return `rgba(0,0,0,0.10)`;
           }
           
       }
       else{
           return `rgba(0,0,0,0.10)`;
       }
    }
    else if (color == "black") {
        return "black";
    }
    else if (color == "clear") {
        clear();
    }
}

// event listener for all button
btns.forEach(btn => {
    btn.addEventListener("click",(e)=>{
        color = e.target.dataset.color;
        selectColor(color)
    });
});

// functions call backs
dfltByNature();
active();