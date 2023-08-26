'use strict';
let input=document.getElementById('cal__input');

let currentNum='';
let currentOp='';
let firstNum='';

function displayNumber(number){
    currentNum += number;
    input.textContent = currentNum;
    
   

}
function displayOpration(operand){
    currentOp=operand;
    firstNum +=currentNum;
    currentNum='';
    input.textContent ="";

}
function clearNumber(){
    input.textContent ="";
    currentNum='';
    currentOp='';
}
function calculatResult(){
    let num1=parseFloat(firstNum);
    let num2=parseFloat(input.textContent);
   
    switch(currentOp){
        case '+':
            input.textContent =num1+num2;
            break;
        case '-':
            input.textContent =num1-num2;
            break;
        case '*':
            input.textContent =num1*num2;
            break;
        case '/':
            input.textContent =num1/num2;
            break;
        default:
             input.textContent =num2;   
    }
    currentNum = '';
    currentOp = '';
    firstNum='';
    

}

