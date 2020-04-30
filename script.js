var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");
var operand1 = 0;
var operand2 = null;
var operator = null;
display.innerHTML = "0";
for(var i = 0; i < buttons.length ; i++)
{
    buttons[i].addEventListener('click', function(){
        var value = this.getAttribute('data-value');

        if(value == '+'){

            
            operator = '+';
            operand1 = parseFloat(display.textContent);
            display.innerHTML = "";

        }else if(value == '-'){
            operator = '-';
            operand1 = parseFloat(display.textContent);
            display.innerHTML = "";

        }else if(value == '*'){
            operator = '*';
            operand1 = parseFloat(display.textContent);
            display.innerHTML = "";

        }else if(value == '/'){

            operator = '/';
            operand1 = parseFloat(display.textContent);
            display.innerHTML = "";

        }else if(value == '%'){ 
            operator = '%';
            operand1 = parseFloat(display.textContent);
            operand1 = operand1 / 100;
            display.innerHTML =  operand1;

        }else if(value == 'pm'){
            var temp = parseFloat(display.textContent);
            display.innerHTML = -temp;

        }else if(value == 'ac'){

            display.innerHTML = "0";

        }else if(value == '='){
            if(operator == '%')
            {
                display.innerHTML = operand1;

            }else{
            operand2 = parseFloat(display.textContent);
            var sum = eval(operand1 + " " + operator + " " + operand2);
            display.innerHTML = sum;
            }

        }else{
            if(display.innerHTML == 0){
                display.innerHTML = value;

            }else{
                display.innerHTML +=value;

            }  
        }


    });
}
