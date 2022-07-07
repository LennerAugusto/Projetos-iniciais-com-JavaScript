var currentNumberwrapper = document.getElementById('currentNumber');
var currentNumber = 0;


function increment() {
    currentNumber = currentNumber + 1;
    currentNumberwrapper.innerHTML = currentNumber;
    if(currentNumber >= 10){
        document.getElementById('increment').disabled = true;
    }
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberwrapper.innerHTML = currentNumber;
    if(currentNumber <= -10){
        document.getElementById('decrement').disabled = true;
    }
}

