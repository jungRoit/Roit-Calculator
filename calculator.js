
let num1 = "";
let num2 = "";
let operator = "";

function getObject(id){
	return document.getElementById(id);
}

function btnClicked(num){
    if(num == '.' && getObject('display').value == ""){
        getObject('display').value = "0" + num;
    }else{
    let display = getObject('display').value += num;
    }
}

function clearScreen(){
    getObject('display').value = "";
}

function operatorClicked(opr){
    operator = opr;
    num1 = parseFloat(getObject('display').value);
    clearScreen();
}

function calculate(){
    num2 = parseFloat(getObject('display').value);
     
    switch(operator){
        case '+' : getObject('display').value = (num1 + num2).toFixed(2);
                    break;
        case '-' : getObject('display').value = (num1 - num2).toFixed(2);
                    break;
        case '*' : getObject('display').value = (num1 * num2).toFixed(2);
                    break;
        case '/' : getObject('display').value = (num1 / num2).toFixed(2);
                    break;
    }
}