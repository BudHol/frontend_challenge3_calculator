const inputs = document.querySelectorAll('button');
const lastCalc = document.createElement('p'); 
const container = document.getElementById('display'); 

let display =document.getElementById('text-display'); 
let var1, var2; 

function remove(){
    if (display.textContent.length > 1){
            display.textContent = display.textContent.slice(0,-1);
        }
        else if(display.textContent.length == 1 && display.textContent != "0"){
            display.textContent = "0";
        }
} 

function reset(){
    if (display.textContent != "0"){
            display.textContent = "0";
        }
    var1 = 0; 
    var2 = 0;
} 



function enterNum(button){
    if (["point","0","1","2","3","4","5","6","7","8","9"].includes(button.id)){
        if (display.textContent == "0"){
            display.textContent = button.textContent;
        }
        else{
            display.textContent += button.textContent;
        }
}}


function takeInput(button){
    if(button.id == "delete"){
        remove();
    } 
    else{
        enterNum(button);
    } 
}

inputs.forEach((button)=>{
    button.addEventListener(("click"), () =>{
        takeInput(button); 
        if(button.id == "add"){
            var1 = Number(display.textContent); 
            display.textContent = "0"; 
            lastCalc.textContent = String(var1) + " + "; 
            container.insertAdjacentElement("afterend", lastCalc);
        } 
        if(button.id == "subtract"){
            var1 = Number(display.textContent); 
            display.textContent = "0"; 
            lastCalc.textContent = String(var1) + " -"; 
            container.insertAdjacentElement("afterend", lastCalc);
        } 
        if(button.id == "multiply"){
            var1 = Number(display.textContent); 
            display.textContent = "0"; 
            lastCalc.textContent = String(var1) + " x "; 
            container.insertAdjacentElement("afterend", lastCalc);
        } 
        if(button.id == "divide"){
            var1 = Number(display.textContent); 
            display.textContent = "0"; 
            lastCalc.textContent = String(var1) + " ÷ "; 
            container.insertAdjacentElement("afterend", lastCalc);
        } 
        if(button.id=="solve"){
            var2 = Number(display.textContent); 
            if(lastCalc.textContent.includes("+")){
                 display.textContent = var1 + var2;  
            }
            else if(lastCalc.textContent.endsWith("-")){
                display.textContent = var1 - var2; 
            }
            else if(lastCalc.textContent.includes("x")){
                display.textContent = var1 * var2; 
            }
            else if(lastCalc.textContent.includes("÷")){
                display.textContent = var1 / var2; 
            }
            lastCalc.remove();

        }
        if(button.id == "reset"){
            reset();
            lastCalc.remove();
        }
    })
});


