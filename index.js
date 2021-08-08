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
    document.getElementById('result').innerHTML = '';
    document.getElementById('expression').innerHTML = '';
    
}

function eval() {
    let result = nums[0];

    document.getElementById('result').innerHTML = result;
}