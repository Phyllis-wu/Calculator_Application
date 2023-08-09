 
let input1Value = document.getElementById("data-1").value;
let input2Value = document.getElementById("data-2").value;


function addtotal(){
    let number1 = Number(input1Value);
    let number2 = Number(input2Value);
    
    let totaladd = number1 + number2;


    document.getElementById("sum-el").textContent= "Sum: "+ totaladd;
}

function subtracttotal(){
    let number1 = Number(input1Value);
    let number2 = Number(input2Value);
    

    let totalsubtract = number1 - number2;

    document.getElementById("sum-el").textContent= "Sum: "+ totalsubtract;
}


function dividettotal(){
    let number1 = Number(input1Value);
    let number2 = Number(input2Value);


    let totaldivide = number1 / number2;


    document.getElementById("sum-el").textContent= "Sum: "+ totaldivide;
    
}


function multipletotal(){
    let number1 = Number(input1Value);
    let number2 = Number(input2Value);
    

    let totalmultiple = number1 * number2;

   
    document.getElementById("sum-el").textContent= "Sum: "+ totalmultiple;
}
