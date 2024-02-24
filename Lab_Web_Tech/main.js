const menuBtn = document.querySelector(".menu-icon-btn");
menuBtn.addEventListener("click", function () {
  const menuItems = document.getElementById("menu-items");
  if (menuItems.classList.contains("active")) {
    menuItems.classList.add("disActive");
    menuItems.classList.remove("active");
  } else {
    menuItems.classList.remove("disActive");
    menuItems.classList.add("active");
  }
});
