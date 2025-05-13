function downloadResume() {
    window.open('resume.pdf', '_blank');
  }

  function toggleExperience(labelEl) {
    const entry = labelEl.closest('.experience-entry');
    entry.classList.toggle('active');
  }

const toggleBtn = document.getElementById("mode-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  const icon = toggleBtn.querySelector("i");
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
});
