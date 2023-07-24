let carNum = document.getElementById('card_num');
let carName = document.getElementById('card_name');
let carMm = document.getElementById('card_mm');
let carYy = document.getElementById('card_yy');
let carCvc = document.getElementById('card_cvc');
let carNumIn = document.getElementById('inCard_num');
let carNameIn = document.getElementById('inCard_name');
let carMmIn = document.getElementById('inCard_mm');
let carYyIn = document.getElementById('inCard_yy');
let carCvcIn = document.getElementById('inCard_cvc');
let foRm = document.querySelector('.main_form');
let compLete = document.querySelector('.comp');
let myForm = document.getElementById('myForm');
let wrna = document.querySelector('#wrnName');
let wrnu = document.querySelector('#wrnNum');
let wrnMm = document.querySelector('#wrnMm');
let wrnCvc = document.querySelector('#wrncvc');

myForm.addEventListener('click',(e) => {
    e.preventDefault();
});

function liveUpinfo(){
    carNameIn.addEventListener('input',function (){
        
        const regex = /^[a-zA-Z ]+$/;
        if (regex.test(carNameIn.value) && carNameIn.value.length <= 20) {
            carName.innerHTML = carNameIn.value;
            carNameIn.classList.remove('shake-input');
            carNameIn.style = `
            border: 1px solid #220930; `
            wrna.innerHTML=' ';

        } else {
            carNameIn.classList.add('shake-input');
            carNameIn.style = `
            border: 1px solid red; `
            wrna.innerHTML='Wrong format';
        }
    });
    carNumIn.addEventListener('input',function (){
        const regex = /^[0-9]+$/;
        if (regex.test(carNumIn.value) && carNumIn.value.length <= 16) {
            carNum.innerHTML = carNumIn.value.replace(/(\d{4})/g, '$1 ');
            carNumIn.classList.remove('shake-input');
            carNumIn.style = `
            border: 1px solid #220930; `
            wrnu.innerHTML=' '; 
        } else {
            carNumIn.classList.add('shake-input');
            carNumIn.style = `
            border: 1px solid red; ` 
            wrnu.innerHTML='Wrong format';
        }
    });
    carYyIn.addEventListener('input',function (){
        const regex = /^[0-9]+$/;
        if (regex.test(carYyIn.value) && carYyIn.value.length <= 2) {
            carYy.innerHTML = carYyIn.value;
            carYyIn.classList.remove('shake-input');
            carYyIn.style = `
            border: 1px solid #220930; `
            wrnMm.innerHTML=' '; 
        } else {
            carYyIn.classList.add('shake-input');
            carYyIn.style = `
            border: 1px solid red; ` 
            wrnMm.innerHTML='Wrong format';
        }
    });
    carMmIn.addEventListener('input',function (){
        const regex = /^[0-9]+$/;
        if (regex.test(carMmIn.value) && carMmIn.value.length <= 2) {
            carMm.innerHTML = carMmIn.value;
            carMmIn.classList.remove('shake-input');
            carMmIn.style = `
            border: 1px solid #220930; ` 
            wrnMm.innerHTML=' '; 

        } else {
            carMmIn.classList.add('shake-input');
            carMmIn.style = `
            border: 1px solid red; ` 
            wrnMm.innerHTML='Wrong format';
        }
    });
    carCvcIn.addEventListener('input',function (){
        const regex = /^[0-9]+$/;
        if (regex.test(carCvcIn.value) && carCvcIn.value.length <= 3) {
            carCvc.innerHTML = carCvcIn.value;
            carCvcIn.classList.remove('shake-input');
            carCvcIn.style = `
            border: 1px solid #220930; `
            wrnCvc.innerHTML=' ';
 
        } else {
            carCvcIn.classList.add('shake-input');
            carCvcIn.style = `
            border: 1px solid red; ` 
            let wrn = document.querySelector('#wrnName');
            wrnCvc.innerHTML='Wrong format';

        }
    });
}
function conFirm(){

}