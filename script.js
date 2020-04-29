var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");
var operand1 = 0;
var operand2 = null;
var operator = null;

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

        }else if(value == 'ac'){

            display.innerHTML = "";

        }else if(value == '='){

            operand2 = parseFloat(display.textContent);
            var sum = eval(operand1 + " " + operator + " " + operand2);
            display.innerHTML = sum;

        }else{

            display.innerHTML +=value;
        }


    });
}
