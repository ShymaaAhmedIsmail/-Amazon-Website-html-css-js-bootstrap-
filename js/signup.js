const form = document.getElementById('login-form');
const submitBtn = document.getElementById('Submit');

submitBtn.addEventListener('click', function(event) {
  event.preventDefault();
  validateForm();
})

function validateForm() {


    const username = document.getElementById('username');
  const password = document.getElementById('password');
  const email = document.getElementById('email');
 
  if (username.value === '') {
    showError(username, ' name is required');
  }
  else if(!isValidname(username.value)){
    
    showError(username, 'min length of name is 3');
  } 
  else {
    showSuccess(username);
  }

  if (password.value === '') {
    showError(password, 'passwird is required');

  } 
  else if (!isValidpasword(password.value)) {
    showError(password, "must enter at least 1 lowercase letter , 1 uppercase letter , 1 number , 1 special character ......");
  }

  else {
    showSuccess(password);
  }

  if (email.value === '') {
    showError(email, 'Email is required');
  } else if (!isValidEmail(email.value)) {
    showError(email, 'Email is invalid');
  } else {
    showSuccess(email);
  }
}

function showError(input, errorMessage) {
  const formGroup = input.parentElement;
  formGroup.classList.add('error');
  
  const errorText = formGroup.querySelector('.error-text');
  errorText.innerText = errorMessage;
}

function showSuccess(input) {
  const formGroup = input.parentElement;
  formGroup.classList.remove('error');
  
  const errorText = formGroup.querySelector('.error-text');
  errorText.innerText = '';
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidname(username) {
 if (username.length>=3){
  return 1
 }
  
}

function isValidpasword(email) {
  var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  return strongRegex.test(password);
}
