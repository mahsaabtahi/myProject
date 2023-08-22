'use strict';
const input=document.getElementById('cal__input');

let currentNum='';
let currentOp='';

function displayNumber(number){
    currentNum = number;
    input.value += currentNum;
}
function displayOpration(operand){
    currentOp=operand;
    currentNum='';
    input.value="";

}
function clearNumber(){
    input.value="";
    currentNum='';
    currentOp='';
}
function calculatResult(){
    let num1=parseFloat(input.value);
    let num2=parseFloat(currentNum);
    switch(currentOp){
        case '+':
            input.value=num1+num2;
            break;
        case '-':
            input.value=num1-num2;
            break;
        case '*':
            input.value=num1*num2;
            break;
        case '/':
            input.value=num1/num2;
            break;
    }

}

