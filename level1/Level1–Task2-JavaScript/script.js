// Change Button Color
function changeColor(){

    let button = document.getElementById("colorBtn");

    button.style.backgroundColor = "green";
}


// Greeting Based on Time
function showGreeting(){

    let hour = new Date().getHours();

    if(hour < 12){
        alert("Good Morning");
    }
    else if(hour < 18){
        alert("Good Afternoon");
    }
    else{
        alert("Good Evening");
    }

}


// Calculator
function calculate(operator){

    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if(isNaN(num1) || isNaN(num2)){
        alert("Please enter both numbers");
        return;
    }

    let result;

    switch(operator){

        case '+':
            result = num1 + num2;
            break;

        case '-':
            result = num1 - num2;
            break;

        case '*':
            result = num1 * num2;
            break;

        case '/':
            result = num2 !== 0 ? num1 / num2 : "Cannot divide by 0";
            break;

        case '%':
            result = num1 % num2;
            break;
    }

    document.getElementById("result").innerText = result;
}
