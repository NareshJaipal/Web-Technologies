const readMoreBtns = document.querySelectorAll(".read-more-btn");

readMoreBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const cardText = button.previousElementSibling;
    cardText.classList.toggle("hidden");

    button.textContent =
      button.textContent === "Read More" ? "Read Less" : "Read More";
  });
});
