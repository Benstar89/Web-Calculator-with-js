
let display = document.querySelector(".display");
let keys = document.querySelectorAll(".show-display");
let AC = document.querySelector(".all-clear");
let C = document.querySelector(".clear-last");
document.querySelector(".calculate").addEventListener("click" , calculate);

C.addEventListener("click" , oneClear)
AC.addEventListener("click" , allClear)

function calculate(){
    let text = display.innerText ;
    display.innerText = eval(text);
}
function oneClear(){
    display.innerText = display.innerText.substring(0 , display.innerText.length - 1);
}
function allClear(){
    display.innerText = 0;
}
function addNumber(event){
    if(display.innerText == 0){
        display.innerText = event.target.innerText;
    }else{
        display.innerText += event.target.innerText;
    }
}
keys.forEach(function(item) {
    item.addEventListener("click" , addNumber);
})
console.log(display.innerText.length)