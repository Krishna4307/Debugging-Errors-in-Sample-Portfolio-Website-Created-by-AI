
const themeToggle = document.getElementById("themeToggle");
const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");
const emptyState = document.getElementById("emptyState");
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

// Restore the visitor's preferred theme.
const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-theme");
  themeToggle.textContent = "☀";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  const isDark = document.body.classList.contains("dark-theme");
  themeToggle.textContent = isDark ? "☀" : "☾";
  localStorage.setItem("portfolioTheme", isDark ? "dark" : "light");
});

// Filter the project cards.
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    const selectedCategory = button.dataset.category;
    let visibleCount = 0;

    projectCards.forEach((card) => {
      const shouldShow = selectedCategory === "all" || card.dataset.category === selectedCategory;
      card.classList.toggle("is-hidden", !shouldShow);
      if (shouldShow) visibleCount++;
    });

    emptyState.style.display = visibleCount === 0 ? "block" : "none";
  });
});

// Handle the contact form locally; no backend is connected.
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("fullName").value.trim();
  const email = document.getElementById("emailAddress").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    formFeedback.textContent = "Please complete all fields before sending.";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    formFeedback.textContent = "Please enter a valid email address.";
    return;
  }

  formFeedback.textContent = `Thanks, ${name}! Your message is ready to be sent.`;
  contactForm.reset();
});
