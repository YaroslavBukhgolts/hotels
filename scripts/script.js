let btnUpNight = document.getElementById('upN'); // btn up
let btnDownNight = document.getElementById('downN'); // btn down
let btnUpTurist = document.getElementById('upT'); // btn up
let btnDownTurist = document.getElementById('downT'); // btn down
let inputNight = document.getElementById('night'); // input night
let inputTurists = document.getElementById('turists'); // input night

let counterN = 0;
let counterT = 0;
inputNight.setAttribute('value', counterN);
inputTurists.setAttribute('value', counterT);

inputNight.addEventListener('change', ()=>{
    counterN = +inputNight.value;
})

inputTurists.addEventListener('change', ()=>{
    counterT = +inputTurists.value;
})

function upN(){
    counterN += 1;
    inputNight.value = counterN;
}
function downN(){
    if(inputNight.value > 0) {
        counterN -= 1;
        inputNight.value = counterN;
    }else {
        btnDownNight.setAttribute('disabled');
    }
    
}

function upT(){
    counterT += 1;
    inputTurists.value = counterT;
}

function downT(){
    if(inputTurists.value > 0) {
        counterT -= 1;
        inputTurists.value = counterT;
    }else {
        btnDownTurist.setAttribute('disabled');
    }
}

btnUpNight.addEventListener('click', upN);
btnDownNight.addEventListener('click', downN);

btnUpTurist.addEventListener('click', upT);
btnDownTurist.addEventListener('click', downT);
