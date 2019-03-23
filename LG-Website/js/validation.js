// get the input boxes
var fName = document.getElementsByName('FIRST_NAME')[0];
var lName = document.getElementsByName('LAST_NAME')[0];
var email = document.getElementsByName('EMAIL_ADRESS')[0];
var password = document.getElementsByName('PASSWORD')[0];
var confirmPassword =  document.getElementsByName('CONFIRM_PASSWORD')[0];
var address = document.getElementsByName('ADDRESS')[0];
var city = document.getElementsByName('CITY')[0];
var state = document.getElementsByName('STATE');
var zipCode = document.getElementsByName('ZIP_POSTAL_CODE')[0];

//grab span objects
var fNameValidate = document.getElementsByClassName('errFName');
var lNameValidate = document.getElementsByClassName('errLName');
var emailValidate = document.getElementsByClassName('errEmail');
var passwordValidate = document.getElementsByClassName('errPassword');
var confirmPasswordValidate =  document.getElementsByClassName('errConfirmPassword');
var addressValidate = document.getElementsByClassName('errAddress');
var cityValidate = document.getElementsByClassName('errCity');
var stateValidate = document.getElementsByClassName('errState');
var zipCodeValidate = document.getElementsByClassName('errZip');
//match characters
var nameReg = new RegExp("^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$",'i');
var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var passDigit = new RegExp('(\d)');
var passLowercaseChar = new RegExp('(?=.*[a-z])');
var passUppercaseChar = new RegExp('(?=.*[A-Z])');
var passMinChar = new RegExp('[a-zA-Z0-9!@#$%^&]{8,15}');
var addressReg = new RegExp('^\d+\s[A-z]+\s[A-z]+');
var zipCodeReg = new RegExp('(^\d{5}$)|(^\d{5}-\d{4}$)');

//get the form
var myForm= document.getElementById('signup');
//flag to check if the form should be submitted
var checkForm = false;
//get the submit button
var submit = document.getElementById('btnSubmit');


const element = document.querySelector('form');
//when sumbitted run these function
element.addEventListener('submit', event => {

  if(checkForm ===false){
    //if the inputs arent valid dont allow to submit
  event.preventDefault();
  correctForm();

  //if all the inputs conforms to the validation rules submit the form
  if(checkForm === true){
    myForm.submit();
    }
  }
});

//calls all the validations for each input
function correctForm(){
//validated first name
var correctFName =   fNameVal();
//validates last name
var correctLName = lNameVal();
//validates email
var correctEmail = eMailVal();
//validates password
var correctPassword = passVal();
//validates confirm password
var correctConfirmationPassword = confirmPassVal();
//validates the address
var correctAddress = addressVal();
//validates the city
var correctCity = cityVal();
//validates the state
var correctState = stateVal();
//validates the zip code
var correctZip = zipCodeVal();

//  check if they are all validated
 if(correctFName === true && correctLName === true && correctEmail === true
   && correctPassword === true && correctConfirmationPassword === true && correctAddress === true && correctCity === true
   && correctState === true && correctCity ===true && correctZip ===true){
    checkForm = true
 }else{
   checkForm = false;
 }

}


function eMailVal(){
  var testEmail = email.value;
  // checks to see if the input is entered correctly
    var flag = false;
    //there no value
  if(email.value === ""){
    //apply css style
    email.style.border = "1.5px solid red";
    emailValidate[1].innerHTML = "Please enter your email address!";
    emailValidate[1].style.color = "red";
    emailValidate[1].style.display = "block";
    flag = false;
      //there is a value
    }else if(email.value !== ""){
            //apply css rules
            emailValidate[1].innerHTML = "";
            emailValidate[1].style.color = "";
            emailValidate[1].style.display = "";


          if(!emailReg.test(testEmail)){
            email.style.border = "1.5px solid red";
            emailValidate[0].innerHTML = "Please enter your email in the correct format!<br> example johnDoe313@gmail.com";
            emailValidate[0].style.color = "red";
            emailValidate[0].style.display = "block";
            flag = false;

          }else{
            email.style.border = "";
            emailValidate[0].innerHTML = "";
            emailValidate[0].style.color ="" ;
            emailValidate[0].style.display = "";
            flag = true;
          }

  }
  //if all the validation pass return else return false
  if(flag === true){
    return true;
  }else{
    return false;
  }

}


function fNameVal(){
    var flag = false;

    if(fName.value ===""){
      fName.style.border = "1.5px solid red";
      fNameValidate[0].innerHTML = "Please enter your first name!";
      fNameValidate[0].style.color = "red";
      fNameValidate[0].style.display = "block";
      flag = false;
    }else if(fName.value !==""){

          fNameValidate[0].innerHTML = "";
          fNameValidate[0].style.color = "";
          fNameValidate[0].style.display = "";


          if(!nameReg.test(fName.value)){

            fName.style.border = "1.5px solid red";
            fNameValidate[1].innerHTML = "There should be no numbers or special characters in your first name!";
            fNameValidate[1].style.color = "red";
            fNameValidate[1].style.display = "block";
            flag = false;
          }else{
            fName.style.border = "";
            fNameValidate[1].innerHTML = "";
            fNameValidate[1].style.color = "";
            fNameValidate[1].style.display = "";
            flag = true;
          }
    }

    if(flag === true){
      return true;
    }else if(flag === false){
      return false;
    }

}


function lNameVal(){
        var flag = false;

      if(lName.value === ""){
        lName.style.border = "1.5px solid red";
        lNameValidate[0].innerHTML = "Please enter your last name!";
        lNameValidate[0].style.color = "red";
        lNameValidate[0].style.display = "block";
        flag = false;
      }else if(lName.value !==""){
          lName.style.border = "";
          lNameValidate[0].innerHTML = "";
          lNameValidate[0].style.color = "";
          lNameValidate[0].style.display = "";

          if(!nameReg.test(lName.value)){
            console.log(!nameReg.test(lName.value));
            lName.style.border = "1.5px solid red";
            lNameValidate[1].innerHTML = "There should be no numbers or special characters in your last name!";
            lNameValidate[1].style.color = "red";
            lNameValidate[1].style.display = "block";
            flag = false;

          }else{
            lName.style.border = "";
            lNameValidate[1].innerHTML = "";
            lNameValidate[1].style.color = "";
            lNameValidate[1].style.display = "";
            flag = true;
        }
    }

    if(flag === true){
      return true;
    }else{
      return  false;
    }

}

function passVal(){
  var flag = false;
  if(password.value === ""){
    password.style.border = "1.5px solid red";
    passwordValidate[0].innerHTML = "Please enter a password!";
    passwordValidate[0].style.color = "red";
    passwordValidate[0].style.display = "block";
    flag =false;
  }else if(password.value !== ""){


    passwordValidate[0].innerHTML = "";
    passwordValidate[0].style.color = "";
    passwordValidate[0].style.display = "";

    if(!passMinChar.test(password.value)){
      passwordValidate[4].innerHTML = "The password must have at 8 characters";
      passwordValidate[4].style.color = "red";
      passwordValidate[4].style.display = "block";
      flag =false;
    }else{
      password.style.border = "";
      passwordValidate[4].innerHTML = "";
      passwordValidate[4].style.color = "";
      passwordValidate[4].style.display = "";


      if(!passUppercaseChar.test(password.value)){
        password.style.border = "1.5px solid red";
        passwordValidate[1].innerHTML = "Password must have at least one upper case letter!";
        passwordValidate[1].style.color = "red";
        passwordValidate[1].style.display = "block";
        flag =false;
      }else{
        password.style.border = "";
        passwordValidate[1].innerHTML = "";
        passwordValidate[1].style.color = "";
        passwordValidate[1].style.display = "";

        if(!passLowercaseChar.test(password.value)){
         password.style.border = "1.5px solid red";
         passwordValidate[2].innerHTML = "Password must have at least one lower case letter!";
         passwordValidate[2].style.color = "red";
         passwordValidate[2].style.display = "block";
         flag = false;
       }else{
         password.style.border = "";
         passwordValidate[2].innerHTML = "";
         passwordValidate[2].style.color = "";
         passwordValidate[2].style.display = "";

         if(passDigit.test(password.value)){
           passwordValidate[3].innerHTML = "The password must have at least one digit";
           passwordValidate[3].style.color = "red";
           passwordValidate[3].style.display = "block";
           flag =false;
         }else {
           password.style.border = "";
           passwordValidate[3].innerHTML = "";
           passwordValidate[3].style.color = "";
           passwordValidate[3].style.display = "";
           flag = true;
         }

       }
      }

    }

 }

  if(flag === true){
   return true;
  }else{
   return false;
  }
}


function confirmPassVal(){
  var flag = false;

  if(confirmPassword.value === ""){
    confirmPassword.style.border = "1.5px solid red";
    confirmPasswordValidate[0].innerHTML = "Please enter a confirmation for your password!";
    confirmPasswordValidate[0].style.color = "red";
    confirmPasswordValidate[0].style.display = "block";
    flag = false;
  }else if(confirmPassword.value !== ""){

    confirmPassword.style.border = "";
    confirmPasswordValidate[0].innerHTML = "";
    confirmPasswordValidate[0].style.color = "";
    confirmPasswordValidate[0].style.display = "";


    if(confirmPassword.value != password.value ){
      confirmPassword.style.border = "1.5px solid red";
      confirmPasswordValidate[1].innerHTML = "Passwords do not match!";
      confirmPasswordValidate[1].style.color = "red";
      confirmPasswordValidate[1].style.display = "block";
      flag = false;
    }else{
      confirmPassword.style.border = "";
      confirmPasswordValidate[1].innerHTML = "";
      confirmPasswordValidate[1].style.color = "";
      confirmPasswordValidate[1].style.display = "";
      flag = true;
    }
  }

  if(flag === true){
   return   true;
  }else{
   return  false;
  }
}

function addressVal(){
    var flag = false;


  if(address.value === ""){
    address.style.border = "1.5px solid red";
    addressValidate[1].innerHTML = "Please enter your address!";
    addressValidate[1].style.color = "red";
    addressValidate[1].style.display = "block";
    flag = false;
  }else if(address.value !== ""){

        address.style.border = "";
        addressValidate[1].innerHTML = "";
        addressValidate[1].style.color = "";
        addressValidate[1].style.display = "";


    if(addressReg.test(address.value)){
      address.style.border = "1.5px solid red";
      addressValidate[0].innerHTML = "Pleasee enter a valid address!";
      addressValidate[0].style.color = "red";
      addressValidate[0].style.display = "block";
      flag = false;
      }else{
        address.style.border = "";
        addressValidate[0].innerHTML = "";
        addressValidate[0].style.color = "";
        addressValidate[0].style.display = "";
        flag = true;
      }
    }

  if(flag === true){
   return  true;
  }else{
   return  false;
  }
}


function stateVal(){
  var flag = false;
  //get the select list
  var selected = document.getElementById('sign-up-STATE');
  // get the index of the current selected option
   var selectedValue = (selected.options[selected.selectedIndex].value);

   //if the value is equal to not select throw a error
  if(selectedValue === "not-selected"){
    selected.style.border = "solid red 1.5px";
    stateValidate[0].innerHTML = "Please select the state you are in!";
    stateValidate[0].style.color = "red";
    stateValidate[0].style.display = "block";
    flag = false;
  }else{
    selected.style.border = "1px solid 	#A9A9A9";
    stateValidate[0].innerHTML = "";
    stateValidate[0].style.color = "";
    stateValidate[0].style.display = "";
    flag = true;
  }

  if(flag === true){
   return  true;
  }else{
   return  false;
  }

}

function zipCodeVal(){
  var flag = false;

  if(zipCode.value ===""){
    zipCode.style.border = "1.5px solid red";
    zipCodeValidate[0].innerHTML = "Please enter your zip code!";
    zipCodeValidate[0].style.color = "red";
    zipCodeValidate[0].style.display = "block";
    flag = false;
  }else if(zipCode.value !==""){
      zipCode.style.border = "";
      zipCodeValidate[0].innerHTML = "";
      zipCodeValidate[0].style.color = "";
      zipCodeValidate[0].style.display = "";


       if(!/^\d{5}(-\d{4})?$/.test(zipCode.value)){
        zipCode.style.border = "1.5px solid red";
        zipCodeValidate[1].innerHTML = "Your zip code must be 5 numbers!";
        zipCodeValidate[1].style.color = "red";
        zipCodeValidate[1].style.display = "block";
        flag = false;
      } else{
          zipCode.style.border = "";
          zipCodeValidate[1].innerHTML = "";
          zipCodeValidate[1].style.color = "";
          zipCodeValidate[1].style.display = "";
          flag = true;
        }
  }

  if(flag === true){
   return  true;
  }else{
   return  false;
  }

}


function cityVal(){
      var flag = false;
      if(city.value === ""){
        city.style.border = "1.5px solid red";
        cityValidate[1].innerHTML = "Please enter your City!";
        cityValidate[1].style.color = "red";
        cityValidate[1].style.display = "block";
        flag = false;
      }else if(city.value !== ""){
        city.style.border = "";
        cityValidate[0].innerHTML = "";
        cityValidate[0].style.color = "";
        cityValidate[0].style.display = "";


        if(!nameReg.test(city.value)){
          city.style.border = "1.5px solid red";
          cityValidate[0].innerHTML = "There should be no numbers or special characters in your city";
          cityValidate[0].style.color = "red";
          cityValidate[0].style.display = "block";
          flag = false;


        }else{
          city.style.border = ""
          cityValidate[1].innerHTML = "";
          cityValidate[1].style.color = "";
          cityValidate[1].style.display = "";
          flag= true;
        }

    }

    if(flag === true){
     return  true;
    }else{
     return false;
    }
}
