let scrollYp = 0;

const scrolling = window.addEventListener("scroll", () => {
  //console.log("scroll");
  if (scrollYp < window.scrollY) {
    console.log("ranger navbar");
    navbar.style.top = "-60px";
  } else {
    navbar.style.top = "0px";
    console.log("afficher navbar");
  }
  scrollYp = window.scrollY;
});
