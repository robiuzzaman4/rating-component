// submit button
const submitBtn = document.querySelector("[data-submit-btn]");

// all ratings number and dynamic rated value
const ratingsNumber = document.querySelectorAll("[data-rating-number]");
const ratedValue = document.querySelector("[data-rated-value]");

// rating state card and rated state card
const ratingState = document.querySelector("[data-rating-state]");
const ratedState = document.querySelector("[data-rated-state]");

// selected ratings initial value will be undifined
let selectedRatings;

// loop over ratings number 
for (number of ratingsNumber) {
    number.addEventListener("click", (e) => {

        // remove 'selected' class on previews item
        if (selectedRatings !== undefined) {
            ratingsNumber[selectedRatings - 1].classList.remove("selected")
        };

        // add 'selected' class on current item and covert string to number
        e.target.classList.add("selected");
        selectedRatings = Number(e.target.innerText);

        // show rated value in HTML
        ratedValue.innerHTML = selectedRatings;
    });
};

// add event listener on submit button
submitBtn.addEventListener("click", () => {

    // checking user doesn't rated any value or not
    if (selectedRatings !== undefined) {

        // ratings and rated card hide and showing
        ratingState.classList.add("hidden");
        ratedState.classList.remove("hidden");
    };
});