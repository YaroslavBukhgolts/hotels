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

// NIGHT
btnUpNight.addEventListener('click', function (){
    counterN += 1;
    inputNight.value = counterN;
});

btnDownNight.addEventListener('click', function(){
    if(inputNight.value > 0) {
        counterN -= 1;
        inputNight.value = counterN;
    }else {
        btnDownNight.setAttribute('disabled');
    }
});

// TURISTS
btnUpTurist.addEventListener('click', function(){
    counterT += 1;
    inputTurists.value = counterT;
});

btnDownTurist.addEventListener('click', function(){
    if(inputTurists.value > 0) {
        counterT -= 1;
        inputTurists.value = counterT;
    }else {
        btnDownTurist.setAttribute('disabled');
    }
});