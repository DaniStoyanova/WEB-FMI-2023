
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".left-nav a");
    const sections = document.querySelectorAll("section");
    
    console.log(navLinks);
    console.log(sections);
    
    function onScroll() {
        console.log("onScroll() function is being executed!");
        const scrollPosition = window.scrollY + 200;
        sections.forEach((section, index) => {
          if (
            scrollPosition > section.offsetTop &&
            scrollPosition < section.offsetTop + section.offsetHeight
          ) {
            console.log(scrollPosition, section.offsetTop,  section.offsetHeight)
            navLinks.forEach((link) => link.classList.remove("active"));
            navLinks[index].classList.add("active");
          }
        });
    }
    
    window.addEventListener("scroll", onScroll);
    navLinks[0].classList.add("active");


  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      // Remove "active" class from all links
      navLinks.forEach((navLink) => {
        navLink.classList.remove('active');
      });

      // Add "active" class to the clicked link
      link.classList.add('active');
    });
  });
})
