const body= document.querySelector(".container");
const color1= document.querySelector("#color1");
const color2= document.querySelector("#color2");
const display = document.querySelector("#display");
const cssCode = document.querySelector("#showBtn");
const showColor1 = document.querySelector("#colorValue1");
const showColor2 = document.querySelector("#colorValue2");

function showColorVal() {
    showColor1.textContent= color1.value;
    showColor2.textContent= color2.value;    
}

function setGradient(){
    body.style.background = "linear-gradient(to right," +color1.value +","+color2.value+")"
    display.textContent= body.style.background;
    showColorVal();
}

showColorVal();
color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);

cssCode.addEventListener("click",function() {

    let element =  document.querySelector(".card");
    element.classList.toggle("show");
   
});

