document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll(".section");

  // Function to hide all sections
  function hideSections() {
    sections.forEach(section => {
      section.classList.remove("active", "visible");
    });
  }

  // Function to show the clicked section
  function showSection(sectionId) {
    const section = document.getElementById(sectionId);
    hideSections(); // Hide all sections before showing the active one
    section.classList.add("active"); // Show the section
    setTimeout(() => {
      section.classList.add("visible"); // Trigger fade-in animation
    }, 10); // Short delay before adding the visible class
  }

  // Event listener for each nav link
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default link behavior
      const targetSection = link.getAttribute("href").substring(1); // Get section ID from href
      showSection(targetSection); // Show the corresponding section
    });
  });

  // Show "home" section by default when the page loads
  showSection("home");
});
