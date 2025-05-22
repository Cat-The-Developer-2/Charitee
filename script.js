document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMenuButton = document.getElementById("close-menu");

  mobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.remove("hidden");
    // Prevent scrolling when menu is open
    document.body.style.overflow = "hidden";
  });

  closeMenuButton.addEventListener("click", function () {
    mobileMenu.classList.add("hidden");
    // Re-enable scrolling when menu is closed
    document.body.style.overflow = "";
  });
});
