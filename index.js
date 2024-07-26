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
  const speed = 200; // The lower the slower

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-count");
      const count = +counter.innerText;
      const inc = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
});
