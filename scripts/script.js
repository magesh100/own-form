const nameError = document.getElementById('name-error');
const phoneError  = document.getElementById('phone-error');
const passwordError = document.getElementById('password-error');
const submitError = document.getElementById('submit-error');

function validateName(name,min,max){
  var name = document.getElementById('username').value;
  min = 8;
  max = 12;
if(name === ''){
  nameError.innerHTML = 'Name is required';
  return false;
}
else if(name.length < min){
  nameError.innerHTML = 'Name should be maximum 12 characters';
  return false;
}
else if(name.length>max){
  nameError.innerHTML = 'Name should be minimum 8 characters';
  return false;
}
nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
return true;
};

function validatePhone(){
  var mobile = document.getElementById('mobile').value;
    if(mobile == ''){
phoneError.innerHTML = 'please enter mobile number ';
return false;
    }
    else if(mobile.length!== 10){
    
      phoneError.innerHTML = 'mobile number must be in 10 characters';
      return false;

    }
    
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
    
    
  };


  function validatePassword(){
    const password = document.getElementById('password').value;
    if(password == ''){
      passwordError.innerHTML = 'password is required';
      return false;
    }
    else if (password.length > 12){
      passwordError.innerHTML = 'password must be within 12 characters';
      return false;
    }
    passwordError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
  };


