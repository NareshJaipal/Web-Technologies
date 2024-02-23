function loadNavbar() {
  fetch("../../navbar/navbar.html")
    .then((response) => response.text())
    .then((html) => {
      const navbarContainer = document.getElementById("navbar");
      if (navbarContainer) {
        navbarContainer.innerHTML = html;
        addMenuFunctionality();
      }
    })
    .catch((error) => console.error("Error fetching navbar:", error));
}

function addMenuFunctionality() {
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
}

window.onload = loadNavbar;
