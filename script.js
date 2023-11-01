// TODO: Remove the click event listener that calls addSignature()

// TODO: Complete validation form

const validateForm = () => {

  let containsErrors = false;

  var petitionInputs = document.getElementById("sign-petition").elements;
  // TODO: Loop through all inputs
  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2)
    {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    } 
    else {
      petitionInputs[i].classList.remove('error');
    }
    // TODO: Validate the value of each input



    // TODO: Call addSignature() and clear fields if no errors

  }
  if (containsErrors == false) {
    addSignature();
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
      containsErrors = false;
    }
  }
}

  signNowButton.addEventListener('click', validateForm);
