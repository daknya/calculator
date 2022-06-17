let inp = '';

var ans = '';
var clear = false;



function input(a){
var data = String(a);
 

switch(data){

    case 'ac':
        inp = '';
        break;

     case '=':
         clear = true;
       solve();
       break;
    default:
        if(clear == true){
            inp = '';
            clear=false;
        }

        if(data == '+'  || data == '-' || data == '/' || data == '*'){
            clear = false
         solve();
        }
       
       inp = inp + data;
       
}


 screen = document.getElementById('inp').innerHTML = inp;
 
}

function solve(){

    if(inp.split("+").length == 2){
        let number = inp.split('+');
        var sum = parseFloat(number[0])+parseFloat(number[1]);
        ans = ''+sum;


    }
    if(inp.split("*").length == 2){
        let number = inp.split('*');
        var sum = parseFloat(number[0])*parseFloat(number[1]);
        ans = ''+sum;


    }
    if(inp.split("/").length == 2){
        let number = inp.split('/');
        var sum = parseFloat(number[0])/parseFloat(number[1]);
        ans = ''+sum;


    } 
       if(inp.split("-").length > 1){
        let number = inp.split('-');
        if(number.length == 2){
        var sum = parseFloat(number[0])-parseFloat(number[1]);
        ans = ''+sum;

        }
        else if(number.length == 3){
            var sum = -parseFloat(number[1])-parseFloat(number[2]);
            ans = ''+sum;
        }

    }
    
 res = document.getElementById('result').innerHTML = ans;


}

/*let inp_exp = '';
let nums = [];
let opr = [];
let num = '';


function flash(element) {
    element.style.backgroundColor = '#000';
    element.style.color = '#fff';
    
    setTimeout((function () {
        element.style.backgroundColor = '#ffffffbf';
        element.style.color = '#000';
    }), 100)
}

function exp_input(event) {
    let button_cl = event.srcElement;
    let inp_type = button_cl.classList[0];
    
    flash(button_cl);

    let inp = button_cl.innerHTML;
    inp_exp = (inp_type != 'clear' && inp_type != 'delete') ? inp_exp.concat(inp) : '';
    document.getElementById('inp_exp').innerHTML = inp_exp;

    if (inp_type == 'number')
    {
        num = num.concat(inp);
    }
    else if (inp_type == 'operator')
    {
        nums.push(parseInt(num));
        num = '';
        opr.push(inp);
    }
    else if (inp_type == 'equals')
    {
        nums.push(parseInt(num));
        num = '';
        eval();
        while (nums.length > 0)
        {
            nums.pop();
        }
    }
    else if (inp_type == 'clear')
    {
        clear_dis();
    }

}

function clear_dis() {
    num = '';
    while (nums.length > 0)
    {
        nums.pop();
    }
    while (opr.length > 0)
    {
        opr.pop();
    }
    document.getElementById('result').innerHTML = '';
    document.getElementById('expression').innerHTML = '';
    
}

function eval() {
    let result = nums[0];
    
    for (let index = 0; index < opr.length ; index++)
    {
        if (opr[index] == '+')
        {
            result += nums[index + 1];
        }
        else if (opr[index] == '-')
        {
            result -= nums[index + 1];
        }
    }

    document.getElementById('result').innerHTML = result;
}*/