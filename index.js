document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS animations conditionally based on window width
  if (window.innerWidth > 768) {
    AOS.init({
      duration: 800,
      delay: 200,
      offset: 100,
    });
  } else {
    AOS.init({
      disable: "mobile", // Disable animations on mobile devices
      duration: 0, // Set duration to 0 for immediate appearance
    });
  }

  // Navbar scroll effect
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Tab navigation functionality
  const tabs = document.querySelectorAll(".sidebar ul li");
  const contentTabs = document.querySelectorAll(".content-tab");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Remove active class from all tabs
      tabs.forEach((item) => item.classList.remove("active"));
      // Add active class to clicked tab
      tab.classList.add("active");

      // Hide all content tabs
      contentTabs.forEach((content) => content.classList.remove("active"));
      // Show content tab corresponding to the clicked tab
      const target = document.getElementById(tab.getAttribute("data-target"));
      target.classList.add("active");
    });
  });
});
