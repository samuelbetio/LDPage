// Problem we want to hide those confirmation warnings
  // We want more 8 characters and matching passwords before we submit
  //hiding the form spans
  $("form span").hide();

  var $password = $("#password"), $confirmPassword = $("#confirm_password");
  function isPasswordValid() {
    return $password.val().length > 8;
  }
  function passwordEvent() {
    if(isPasswordValid()) {
      $password.next().hide();
    } else {
      $password.next().show();
    }
  }
  function arePasswordsMatching() {
    return $password.val() === $confirmPassword.val();
  }
  function confirmPasswordEvent() {
    if(arePasswordsMatching()){
      $confirmPassword.next().hide();
    }else {
      $confirmPassword.next().show();
    }
  }
 function canSubmit() {
  return isPasswordValid() && arePasswordsMatching();
 }
 function enableSubmitEvent(){
  $("#submit").prop("disabled", !canSubmit());
 }


  $password.focus(passwordEvent).keyup(passwordEvent).focus(confirmPasswordEvent).keyup(confirmPasswordEvent)
  $confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent)

  enableSubmitEvent();