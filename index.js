document.addEventListener("DOMContentLoaded", () => {
  
  function switchTab(targetId) {
    
    document
      .querySelectorAll(".sidebar ul li")
      .forEach((li) => li.classList.remove("active"));
    document
      .querySelectorAll(".content-tab")
      .forEach((tab) => tab.classList.remove("active"));

    const targetItem = document.querySelector(
      `.sidebar ul li[data-target="${targetId}"]`
    );
    if (targetItem) {
      targetItem.classList.add("active");
    }

    const targetTab = document.getElementById(targetId);
    if (targetTab) {
      targetTab.classList.add("active");
    }
  }

  document.querySelectorAll(".sidebar ul li").forEach((item) => {
    item.addEventListener("click", (event) => {
      const targetId = event.currentTarget.getAttribute("data-target");
      switchTab(targetId);
    
      history.replaceState(null, null, `#${targetId}`);
    });
  });

  const hash = window.location.hash.substring(1); 
  if (hash) {
    switchTab(hash);
  } else {
    // Set default tab if no hash is present
    const defaultItem = document.querySelector(".sidebar ul li");
    if (defaultItem) {
      const defaultId = defaultItem.getAttribute("data-target");
      if (defaultId) {
        switchTab(defaultId);
      }
    }
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".count");
  const speed = 500; // Increased duration to slow down the counting

  const startCounting = () => {
    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-count");
        const count = +counter.innerText;
        const inc = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + inc);
          setTimeout(updateCount, 10); // Increased timeout for slower updates
        } else {
          counter.innerText = target; // Ensure we reach the target
        }
      };

      updateCount();
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startCounting();
        observer.unobserve(entry.target); // Stop observing after starting the count
      }
    });
  });

  const countSection = document.querySelector(".country-clients");
  if (countSection) {
    observer.observe(countSection); // Observe the section for visibility
  }
});


 document.addEventListener("DOMContentLoaded", () => {
   const video = document.getElementById("myVideo");
    video.playbackRate = 0.75;  // Set playback rate to 50% of the original speed
 });
 
 document.addEventListener("DOMContentLoaded", () => {
   document.documentElement.style.scrollBehavior = "smooth";
 });
