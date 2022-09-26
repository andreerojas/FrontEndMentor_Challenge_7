let inputField = document.querySelector('input');
let wrongInputMsg = document.querySelector('#main-form span.error');
let errorIcon = document.querySelector('.error-icon');

inputField.addEventListener('input', function(){
    if(inputField.validity.typeMismatch){
        wrongInputMsg.classList.add('visible');
        errorIcon.classList.add('visible');
    }
    else{
        wrongInputMsg.classList.remove('visible');
        errorIcon.classList.remove('visible');
    }
    
})