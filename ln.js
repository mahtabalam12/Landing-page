// Show alert when any button with specific text is clicked
document.addEventListener("DOMContentLoaded", function () {
  console.log("Landing page loaded!");

  const buttons = document.querySelectorAll("button");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const text = button.textContent.trim();

      if (text === "Request A Consult") {
        alert("Thanks for your interest! We'll contact you soon.");
      } else if (text === "Read More") {
        alert("Redirecting to more information...");
      }
    });
  });

  // Smooth scroll for anchor links (if implemented in nav)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
