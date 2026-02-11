// Site-wide JavaScript

function toggleContent(id) {
  const el = document.getElementById(id);
  if (el.style.display === "none") {
    el.style.display = "block";
  } else {
    el.style.display = "none";
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  if (form && status) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // stops actual submission/reload

      status.style.display = "block";
      status.textContent = "Submission successful. Thanks — I’ll review your message.";

      form.reset(); // clears the fields
    });
  }
});
