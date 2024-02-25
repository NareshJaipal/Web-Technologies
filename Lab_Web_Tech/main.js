const imageContainer = document.getElementById("image-container");
const images = imageContainer.querySelectorAll(".banner-image");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

startImageRotation();

let currentIndex = 1;
function changeImage(indexChange) {
  images[currentIndex].classList.remove("activeBannerImage");
  // images[currentIndex].classList.remove("span3 wow bounceInRight center");
  currentIndex = (currentIndex + indexChange + images.length) % images.length;
  images[currentIndex].classList.add("activeBannerImage");
  // images[currentIndex].classList.add("span3 wow bounceInRight center");
  console.log({ currentIndex });
}

function startImageRotation() {
  imageRotationInterval = setInterval(() => changeImage(1), 4000);
}

prevButton.addEventListener("click", () => {
  console.log("Previous Button Clicked");
  changeImage(-1);
});
nextButton.addEventListener("click", () => {
  console.log("Next Button Clicked");
  changeImage(1);
});
