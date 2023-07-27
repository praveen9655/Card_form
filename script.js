const form = document.querySelector('#form');
const username = document.querySelector('#username');
const card_num = document.querySelector('#card_nu');
const cardMm = document.querySelector('#cardMm');
const cardYy = document.querySelector('#cardYy');
const cardCvc = document.querySelector('#cardCvc');
//card display
let carNum = document.getElementById('card_num');
let carName = document.getElementById('card_name');
let carMm = document.getElementById('card_mm');
let carYy = document.getElementById('card_yy');
let carCvc = document.getElementById('card_cvc');

const regex_char = /^[a-zA-Z ]+$/;
const regex_num = /^[0-9]+$/;
form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateInputs();
});


function liveUpinfo(input, regex, maxLength, display1) {
    input.addEventListener('input', function () {
        const value = input.value.trim();

        input.classList.remove('success', 'error');
        setSuccess(input);

        if (value.length === 0) {
          setError(input, 'Field is empty');
        }

        if (!regex.test(value)) {
          setError(input, 'Only specific characters are allowed');
        }

        if (value.length > maxLength) {
          setError(input, `Maximum ${maxLength} characters allowed`);
        }

        if (value.length > 0 && regex.test(value) && value.length <= maxLength) {
          setSuccess(input);
          if (display1 == carNum){
            display1.innerHTML = value.replace(/(\d{4})/g, '$1 ');
          }
          else{
            display1.innerHTML= value;
    
          }

        }
      });
}


const fields = [
    { input: username, regex: regex_char, maxLength: 25, message: 'Card name',display1: carName  },
    { input: card_num, regex: regex_num, maxLength: 16, message: 'Card number',display1: carNum  },
    { input: cardMm, regex: regex_num, maxLength: 2, message: 'Month',display1: carMm  },
    { input: cardYy, regex: regex_num, maxLength: 2, message: 'Year',display1: carYy  },
    { input: cardCvc, regex: regex_num, maxLength: 3, message: 'CVC',display1: carCvc  },
  ];
  fields.forEach(({ input, regex, maxLength,display1 }) => {
    liveUpinfo(input, regex, maxLength, display1);
  });



function validateInputs() {

  fields.forEach(({ input, regex, maxLength, message }) => {
    const value = input.value.trim();

    if (value === '') {
      setError(input, `${message} is empty`);
    } else if (!regex.test(value)) {
      setError(input, `Only numbers are allowed for ${message}`);
    } else if (value.length > maxLength) {
      setError(input, `Only ${maxLength} numbers are allowed for ${message}`);
    } else {
      setSuccess(input);
      document.querySelector('.compsub').style=`display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px;
      `;
      document.querySelector('.detail').style.display= 'none';
    }
  });

}
function setError(element, message) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector('.error');
  inputGroup.classList.add('error1');
  inputGroup.classList.remove('success');
  errorElement.innerText = message;
}
function setSuccess(element) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector('.error');
  inputGroup.classList.remove('error1');
  inputGroup.classList.add('success');
  errorElement.innerText = '';
}