
let num1 = "";
let num2 = "";
let operator = "";

function btnClicked(num){
    if(num == '.' && document.getElementById('display').value == ""){
        document.getElementById('display').value = "0" + num;
    }else{
    let display = document.getElementById('display').value += num;
    }
}

function clearScreen(){
    document.getElementById('display').value = "";
}

function operatorClicked(opr){
    operator = opr;
    num1 = parseFloat(document.getElementById('display').value);
    clearScreen();
}

function calculate(){
    num2 = parseFloat(document.getElementById('display').value);
     
    switch(operator){
        case '+' : document.getElementById('display').value = (num1 + num2).toFixed(3);
                    break;
        case '-' : document.getElementById('display').value = (num1 - num2).toFixed(3);
                    break;
        case '*' : document.getElementById('display').value = (num1 * num2).toFixed(3);
                    break;
        case '/' : document.getElementById('display').value = (num1 / num2).toFixed(3);
                    break;
    }
}