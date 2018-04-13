$(function() {

  // Called function to update the name, happiness, and weight of our pet in our HTML
  checkAndUpdatePetInfoInHtml();

  // When each button is clicked, it will "call" function for that button (functions are below)
  $('.treat-button').click(clickedTreatButton);
  $('.play-button').click(clickedPlayButton);
  $('.exercise-button').click(clickedExerciseButton);

})

  // Add a variable "pet_info" equal to a dictionary with the name (string), weight (number), and happiness (number) of your pet
var pet_info = {
    "name" : "Dogo",
    "weight" : 40,
    "happiness" :10
  }
  function clickedTreatButton() {
    pet_info.weight= pet_info.weight + 1,
    pet_info.happiness= pet_info.happiness + 1,// Increase pet weight
    checkAndUpdatePetInfoInHtml();
  }

  function clickedPlayButton() {
    pet_info.happiness= pet_info.happiness+1, // Increase pet happiness
    pet_info.weight= pet_info.weight - 1,// Decrease pet weight
    checkAndUpdatePetInfoInHtml();
  }

  function clickedExerciseButton() {
    pet_info.happiness= pet_info.happiness - 1,// Decrease pet happiness
    pet_info.weight= pet_info.weight - 1,// Decrease pet weight
    checkAndUpdatePetInfoInHtml();
  }

  function checkAndUpdatePetInfoInHtml() {
    checkWeightAndHappinessBeforeUpdating();
    updatePetInfoInHtml();
  }

  function checkWeightAndHappinessBeforeUpdating() {
    if (pet_info.weight > 45)
    pet_info.weight= "20";
// Add conditional so if weight is lower than zero, set it back to zero
  }

  // Updates your HTML with the current values in your pet_info dictionary
  function updatePetInfoInHtml() {
    $('.name').text(pet_info['name']);
    $('.weight').text(pet_info['weight']);
    $('.happiness').text(pet_info['happiness']);
  }
