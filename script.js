function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.value.match(validRegex) || input.value=="") {
        var valid = document.getElementsByClassName("valid");
  
        valid[0].style.display = "none";
  
        var emailDiv = document.getElementsByClassName("email");

        emailDiv[0].style.border =  "1px solid  #cdd3e3";
  
      return true;
  
    } else {
  
      var valid = document.getElementsByClassName("valid");

      valid[0].style.display = "initial";

      var emailDiv = document.getElementsByClassName("email");

      emailDiv[0].style.border =  "1px solid  hsl(354, 100%, 66%)";
  
      
  
      return false;
  
    }
  
}





setInterval(function () {
    var inputt = document.getElementsByTagName("input");

    var email = inputt[0];

    ValidateEmail(email);


}, 1);
