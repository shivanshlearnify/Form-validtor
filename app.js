function clearError() {
  error = document.getElementsByClassName("formerror");
  for (let items of error) {
    items.innerHTML = "";
  }
}

function seterror(id, error) {
  // set error inside tag of id
  element = document.getElementById(id);
  element.getElementsByClassName("formerror")[0].innerHTML = error;
}

function validateForm() {
  let returnval = true;
  clearError();

  // perform validation and if validation fails,set the value of returnval to false
  let name = document.forms["myForm"]["fname"].value;
  if (name.length < 5) {
    seterror("name", "*length of name is too short");
    returnval = false;
  }

  let email = document.forms["myForm"]["femail"].value;
  if (email.length > 5) {
    seterror("email", "*Email length is too long");
    returnval = false;
  }
  let phone = document.forms["myForm"]["fphone"].value;
  if (phone.length != 10) {
    seterror("phone", "*phone length is not valid");
    returnval = false;
  }
  let password = document.forms["myForm"]["fpass"].value;
  if (password.length < 5) {
    seterror("pass", "*password must be 5 digit or Greater");
    returnval = false;
  }
  let cpassword = document.forms["myForm"]["fcpass"].value;
  if (cpassword != password) {
    seterror("cpass", "*password must be same");
    returnval = false;
  }


  return returnval;
}
