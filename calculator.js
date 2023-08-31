'use strict';

class Calculator{
    constructor(){
    this.input=document.getElementById('cal__input');
    this.previousNumElement = document.getElementById('cal__previous');
    this.currentNum='';
    this.currentOp='';
    this.previousNum = '';
    }
    displayNumber(number){
    this.currentNum += number;
    this.input.textContent =this.currentNum;

    }
    displayOpration(operand){
        this.currentOp=operand;
        this.previousNum += this.currentNum;
        this.currentNum='';
        this.input.textContent='';
        this.updatePreviousNum();

    }
    clearNumber(){
        this.input.textContent="";
        this.currentNum='';
        this.currentOp='';
        this.previousNum='';
        this.updatePreviousNum();
    }
    updatePreviousNum(){
        this.previousNumElement.textContent=this.previousNum + " " +this.currentOp; 
    }
    calculatResult(){
        let num1=parseFloat(this.previousNum);
        let num2=parseFloat(this.input.textContent);
        if(!num1){
        return false;
        }
   
        switch(this.currentOp){
        case '+':
            this.input.textContent =num1+num2;
            break;
        case '-':
            this.input.textContent =num1-num2;
            console.log(num1,num2);
            break;
        case '*':
            this.input.textContent =num1*num2;
            break;
        case '/':
            this.input.textContent =num1/num2;
            break;
        default:
            this.input.textContent =num2;   
        }
        this.currentNum = '';
        this.currentOp = '';
        this.previousNum = '';
        this.updatePreviousNum();

    }

}

const calculator=new Calculator();