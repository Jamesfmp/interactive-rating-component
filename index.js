document.addEventListener("DOMContentLoaded", function () {
  const starButtons = document.querySelectorAll(".score-btns button");
  const component1 = document.querySelector(".component");
  const component2 = document.querySelector(".component.hidden");
  const ratingSelection = document.querySelector(".rating-selection span");
  const textHidden = document.querySelector(".text_hidden");
  const submitButton = document.querySelector(".submit-btn");

  
  component2.style.display = "none";

  starButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const rating = button.textContent;
      ratingSelection.textContent = rating;
    });
  });

  submitButton.addEventListener("click", function () {
    
    component1.style.display = "none";
    component2.style.display = "block";
  
    
  });
});