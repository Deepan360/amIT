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
//scrolling for video background in the pages

 document.addEventListener("DOMContentLoaded", () => {
   const video = document.getElementById("myVideo");
    video.playbackRate = 0.75;  // Set playback rate to 50% of the original speed
 });
 
 document.addEventListener("DOMContentLoaded", () => {
   document.documentElement.style.scrollBehavior = "smooth";
 });

   document.addEventListener("scroll", function () {
     var scrollTop = window.scrollY || document.documentElement.scrollTop;
     var videoBackground = document.querySelector(".video-background");

     // Adjust scale factor for video based on scroll position
     var scaleValue = Math.max(1, 2 - scrollTop /2000); // Decrease scale with scroll

     // Apply scaling transformation to keep video centered
     videoBackground.style.transform = `scale(${scaleValue})`;
   });

  

 
///end of scrolling video in the main index page
////carrer page loader
document.addEventListener("DOMContentLoaded", function () {
  const jobListings = [
    {
      title: "Software Developer",
      location: "Remote",
      type: "Full-Time",
      description:
        "We are looking for a talented software developer to join our team. The ideal candidate will have experience with full-stack development and be proficient in modern web technologies.",
    },
    {
      title: "Project Manager",
      location: "New York, NY",
      type: "Full-Time",
      description:
        "We are seeking an experienced project manager to lead and manage software development projects. The candidate should have excellent organizational and communication skills.",
    },
    {
      title: "UX/UI Designer",
      location: "San Francisco, CA",
      type: "Contract",
      description:
        "Join our design team as a UX/UI Designer. The ideal candidate will have a strong portfolio showcasing their design skills and experience with user-centered design principles.",
    },
    {
      title: "Data Analyst",
      location: "India",
      type: "Part-Time",
      description:
        "Looking for a detail-oriented data analyst to collect, process, and perform statistical analyses on large datasets.",
    },
    {
      title: "DevOps Engineer",
      location: "Remote",
      type: "Full-Time",
      description:
        "We need a DevOps Engineer with experience in continuous integration and deployment to maintain and improve our infrastructure.",
    },
    {
      title: "Marketing Specialist",
      location: "USA",
      type: "Contract",
      description:
        "Join our team as a marketing specialist to create and execute marketing strategies that will drive growth.",
    },
    // Add more job listings as needed
  ];

  const jobContainer = document.getElementById("job-listings");
  const loadMoreButton = document.getElementById("load-more");
  let jobsPerPage = 3;
  let currentPage = 1;

  function loadJobs(page) {
    const startIndex = (page - 1) * jobsPerPage;
    const endIndex = page * jobsPerPage;
    const jobsToLoad = jobListings.slice(startIndex, endIndex);

    jobsToLoad.forEach((job) => {
      const jobElement = document.createElement("div");
      jobElement.classList.add("col-md-4");
      jobElement.innerHTML = `
        <div class="job-listing p-3 mb-4">
          <h3>${job.title}</h3>
          <p><strong>Location:</strong> ${job.location}</p>
          <p><strong>Type:</strong> ${job.type}</p>
          <p>${job.description}</p>
          <a class="btn btn-primary-car" href="javascript:void(0)">Apply Now</a>
        </div>
      `;
      jobContainer.appendChild(jobElement);
    });

    if (endIndex >= jobListings.length) {
      loadMoreButton.style.display = "none";
    }
  }

  loadMoreButton.addEventListener("click", function () {
    currentPage++;
    loadJobs(currentPage);
  });

  // Load the first set of jobs
  loadJobs(currentPage);
});
