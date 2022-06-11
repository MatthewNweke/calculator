var displayInput = document.querySelector('#display');
var enterNumber = document.querySelectorAll('.tableData');
enterNumber.forEach((number) => number.addEventListener('click',
    (event) => displayNumber(event))) // implicit return

function displayNumber(event) {
    displayInput.value += event.target.innerHTML;
}


let resetCalc = document.querySelector('#noCe');
resetCalc.addEventListener('click', () => {
    displayInput.value = "";
})

let equalTo=document.querySelector('#equalto');
equalTo.addEventListener('click',()=>{
    displayInput.value=eval(displayInput.value)
})

