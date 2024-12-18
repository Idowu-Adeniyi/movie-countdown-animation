document.addEventListener("DOMContentLoaded", function () {
  const countdownElement = document.getElementById("countdown");
  const movieFormContainer = document.getElementById("movie-form-container");
  let confirmationMessage = document.getElementById("confirmation-message");
  let countdownValue = 10; // Countdown from 10 seconds

  // timer functionality
  const countdownInterval = setInterval(function () {
    countdownElement.textContent = countdownValue;
    countdownValue = countdownValue - 1;

    if (countdownValue < 0) {
      clearInterval(countdownInterval);
      countdownElement.textContent = "";
      movieFormContainer.classList.remove("hidden");
    }
  }, 1000);

  document
    .getElementById("movie-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      let selectedMovie = document.querySelector('input[name="movie"]:checked');
      if (selectedMovie) {
        const selectedMovieImage = selectedMovie
          .closest("label")
          .querySelector("img");
        selectedMovieImage.classList.add("booked");

        setTimeout(() => {
          movieFormContainer.classList.add("hidden");
          confirmationMessage.innerHTML = `${confirmationMessage.textContent} ${selectedMovie.value}!`;
          confirmationMessage.classList.remove("hidden");
        }, 2000);
      }
    });
});
