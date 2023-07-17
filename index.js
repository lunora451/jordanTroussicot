const typed = new Typed("#animateSpan", {
  strings: ["coder", "learner", "documentary lover", "tennis enthusiast"],
  typeSpeed: 150,
  backSpeed: 0,
  fadeOut: true,
  loop: true,
});

const navBar = document.querySelector("nav");
const nightMode = document.querySelector(".toggleSwitch input");
const imgHouse = document.querySelector(".houseIcon");
const imgAvatar = document.querySelector(".avatarIcon");
const imgTools = document.querySelector(".toolsIcon");
const imgProject = document.querySelector(".projectIcon");
const menu = document.querySelector(".menu");
const burgerMenu = document.querySelector(".burgerMenu");
const backToTopButton = document.getElementById("backToTop");

function navScrolled() {
  navBar.style.transitionDuration = "0.8s";
  navBar.classList.toggle("scrolledNav", window.scrollY > 0);
}

function handleNightMode(e) {
  navBar.style.transitionDuration = "0s";
  menu.style.transitionDuration = "0s";
  document.body.classList.toggle("lightMode", e.target.checked);
  if (!e.target.checked) {
    imgHouse.src = "./assets/svg/houseW.svg";
    imgAvatar.src = "./assets/svg/avatarW.svg";
    imgTools.src = "./assets/svg/toolsW.svg";
    imgProject.src = "./assets/svg/projectW.svg";
  } else {
    imgHouse.src = "./assets/svg/houseB.svg";
    imgAvatar.src = "./assets/svg/avatarB.svg";
    imgTools.src = "./assets/svg/toolsB.svg";
    imgProject.src = "./assets/svg/projectB.svg";
  }
}

function scrollToAbout(event) {
  event.preventDefault();
  const aboutSection = document.getElementById("about");
  aboutSection.scrollIntoView({ behavior: "smooth" });
}
function scrollToSkills(event) {
  event.preventDefault();
  const skillsSection = document.getElementById("skills");
  skillsSection.scrollIntoView({ behavior: "smooth" });
}
function scrollToProjects(event) {
  event.preventDefault();
  const projectsSection = document.getElementById("projects");
  projectsSection.scrollIntoView({ behavior: "smooth" });
}
function scrollToHome(event) {
  event.preventDefault();
  const homeSection = document.getElementById("home");
  homeSection.scrollIntoView({ behavior: "smooth" });
}

function handleBurgerMenu() {
  menu.style.transitionDuration = "0.5s";
  menu.classList.toggle("showMenu");
}

function handleScreenResize() {
  if (window.innerWidth < 1024) {
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
    }
  }
}

// Reveal projects
function revealProjects() {
  const reveal = document.querySelector(".reveal");

  const windowHeight = window.innerHeight;
  const revealTop = reveal.getBoundingClientRect().top;
  const revealPoint = 150;

  if (revealTop < windowHeight - revealPoint) {
    reveal.classList.add("active");
  }
}

function scrollDownFunction() {
  if (window.pageYOffset > 1800) {
    // Show backToTopButton
    if (!backToTopButton.classList.contains("btn-entrance")) {
      backToTopButton.classList.remove("btn-exit");
      backToTopButton.classList.add("btn-entrance");
      backToTopButton.style.display = "flex";
      backToTopButton.style.justifyContent = "center";
      backToTopButton.style.alignItems = "center";
    }
  } else {
    // Hide backToTopButton
    if (backToTopButton.classList.contains("btn-entrance")) {
      backToTopButton.classList.remove("btn-entrance");
      backToTopButton.classList.add("btn-exit");
      setTimeout(() => {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

// Back to top button
function backToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.addEventListener("resize", handleScreenResize);
window.addEventListener("scroll", navScrolled);
window.addEventListener("scroll", revealProjects);
window.addEventListener("scroll", scrollDownFunction);
nightMode.addEventListener("change", (e) => handleNightMode(e));
backToTopButton.addEventListener("click", backToTop);
burgerMenu.addEventListener("click", handleBurgerMenu);
