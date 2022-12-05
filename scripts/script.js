let btnUpNight = document.getElementById('upN'); // btn up
let btnDownNight = document.getElementById('downN'); // btn down
let btnUpTurist = document.getElementById('upT'); // btn up
let btnDownTurist = document.getElementById('downT'); // btn down
let inputNight = document.getElementById('night'); // input night
let inputTurists = document.getElementById('turists'); // input night

let counter = 0;
inputNight.setAttribute('value', counter);
inputTurists.setAttribute('value', counter);

function upN(){
    counter += 1;
    inputNight.setAttribute('value', counter);
}
function downN(){
    if(inputNight.value > 0) {
        counter -= 1;
        inputNight.setAttribute('value', counter);
    }else {
        btnDownNight.setAttribute('disabled');
    }
    
}

function upT(){
    counter += 1;
    inputTurists.setAttribute('value', counter);
}

function downT(){
    if(inputTurists.value > 0) {
        counter -= 1;
        inputTurists.setAttribute('value', counter);
    }else {
        btnDownTurist.setAttribute('disabled');
    }
}

btnUpNight.addEventListener('click', upN);
btnDownNight.addEventListener('click', downN);

btnUpTurist.addEventListener('click', upT);
btnDownTurist.addEventListener('click', downT);
