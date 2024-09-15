// Ensure the DOM is fully loaded before accessing elements
document.addEventListener('DOMContentLoaded', function () {
    // Get elements from the DOM
    var toggleSkillsBtn = document.getElementById('toggleSkillsBtn');
    var skills = document.getElementById('skills');
    var toggleWorkBtn = document.getElementById('toggleWorkBtn');
    var workExperience = document.getElementById('workExperience');
    // Ensure elements are found before applying functionality
    if (toggleSkillsBtn && skills) {
        // Initially hide the skills section
        skills.style.display = 'none';
        toggleSkillsBtn.textContent = 'Show Skills'; // Button should say 'Show Skills' initially
        // Add smooth transition for skills section
        skills.style.transition = 'all 0.3s ease';
        // Toggle the visibility of the skills section
        toggleSkillsBtn.addEventListener('click', function () {
            var isHidden = skills.style.display === 'none';
            skills.style.display = isHidden ? 'block' : 'none'; // Toggle display
            toggleSkillsBtn.textContent = isHidden ? 'Hide Skills' : 'Show Skills'; // Update button text
        });
    }
    if (toggleWorkBtn && workExperience) {
        // Add smooth transition for work experience section
        workExperience.style.transition = 'all 0.3s ease';
        // Toggle the visibility of the work experience section
        toggleWorkBtn.addEventListener('click', function () {
            var isHidden = workExperience.style.display === 'none' || workExperience.style.display === '';
            workExperience.style.display = isHidden ? 'block' : 'none'; // Toggle display
            toggleWorkBtn.textContent = isHidden ? 'Hide Work Experience' : 'Show Work Experience'; // Update button text
        });
    }
});
