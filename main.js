const firstNameInput = document.querySelector('.fName');
const lastNameInput = document.querySelector('.lName');
const emailInput = document.querySelector('.email');
const passwordInput = document.querySelector('.password')
const button = document.querySelector('.submit');

const firstNameErrorImg = document.querySelector('.errorfName');
const lastNameErrorImg = document.querySelector('.errorlName');
const emailErrorImg = document.querySelector('.errorEmail');
const passwordErrorImg = document.querySelector('.errorPassword');

const firstNameErrorText = document.querySelector('.errorfNameText');
const lastNameErrorText = document.querySelector('.errorlNameText');
const emailErrorText = document.querySelector('.errorEmailText');
const passwordErrorText = document.querySelector('.errorPasswordText');

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegex =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

function checkInputs() {

    button.addEventListener('click',()=>{
        if(firstNameInput.value == '') {
            firstNameErrorImg.classList.remove('hide');
            firstNameErrorText.classList.remove('hide');
        } else {
            firstNameErrorImg.classList.add('hide');
            firstNameErrorText.classList.add('hide');
        }

        if(lastNameInput.value == '') {
            lastNameErrorImg.classList.remove('hide');
            lastNameErrorText.classList.remove('hide');
        } else {
            lastNameErrorImg.classList.add('hide');
            lastNameErrorText.classList.add('hide');
        }

        if(emailInput.value == '' || !(emailRegex.test(emailInput.value))) {
            emailErrorImg.classList.remove('hide');
            emailErrorText.classList.remove('hide');
        } else {
            emailErrorImg.classList.add('hide');
            emailErrorText.classList.add('hide');
        }

        if(passwordInput.value == '') {
            passwordErrorImg.classList.remove('hide');
            passwordErrorText.classList.remove('hide');
        } else if (!(passwordRegex.test(passwordInput.value))) {
            passwordErrorText.textContent = 'Password is too weak';
            passwordErrorImg.classList.remove('hide');
            passwordErrorText.classList.remove('hide');
        } else {
            passwordErrorImg.classList.add('hide');
            passwordErrorText.classList.add('hide');
        }

    })

    
}

checkInputs();