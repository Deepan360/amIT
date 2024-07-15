document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS
  AOS.init({
    duration: 1000,
    once: false,
  });

  // Click event handler for sidebar items
  document.querySelectorAll(".sidebar li").forEach(function (item) {
    item.addEventListener("click", function () {
      // Remove active class from all tabs
      document.querySelectorAll(".content-tab").forEach(function (tab) {
        tab.classList.remove("active");
      });

      // Remove active class from all sidebar items
      document.querySelectorAll(".sidebar li").forEach(function (li) {
        li.classList.remove("active");
      });

      // Add active class to the clicked item
      this.classList.add("active");

      // Show the corresponding content tab
      var targetId = this.getAttribute("data-target");
      document.getElementById(targetId).classList.add("active");

      // Refresh AOS animations for the new content
      AOS.refresh(); // Refresh AOS to trigger animations for newly visible elements
    });
  });
});
