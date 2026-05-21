const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const faqButtons = document.querySelectorAll(".faq-item");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    const isOpen = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!isOpen));
    button.querySelector("strong").textContent = isOpen ? "+" : "-";

    if (answer) {
      answer.classList.toggle("is-open", !isOpen);
    }
  });
});
