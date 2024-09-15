// Ensure the DOM is fully loaded before accessing elements
document.addEventListener('DOMContentLoaded', () => {
    // Get elements from the DOM
    const toggleSkillsBtn = document.getElementById('toggleSkillsBtn') as HTMLButtonElement | null;
    const skills = document.getElementById('skills') as HTMLElement | null;
    const toggleWorkBtn = document.getElementById('toggleWorkBtn') as HTMLButtonElement | null;
    const workExperience = document.getElementById('workExperience') as HTMLElement | null;

    // Ensure elements are found before applying functionality
    if (toggleSkillsBtn && skills) {
        // Initially hide the skills section
        skills.style.display = 'none';
        toggleSkillsBtn.textContent = 'Show Skills'; // Button should say 'Show Skills' initially

        // Add smooth transition for skills section
        skills.style.transition = 'all 0.3s ease';

        // Toggle the visibility of the skills section
        toggleSkillsBtn.addEventListener('click', () => {
            const isHidden = skills.style.display === 'none';
            skills.style.display = isHidden ? 'block' : 'none'; // Toggle display
            toggleSkillsBtn.textContent = isHidden ? 'Hide Skills' : 'Show Skills'; // Update button text
        });
    }

    if (toggleWorkBtn && workExperience) {
        // Add smooth transition for work experience section
        workExperience.style.transition = 'all 0.3s ease';

        // Toggle the visibility of the work experience section
        toggleWorkBtn.addEventListener('click', () => {
            const isHidden = workExperience.style.display === 'none' || workExperience.style.display === '';
            workExperience.style.display = isHidden ? 'block' : 'none'; // Toggle display
            toggleWorkBtn.textContent = isHidden ? 'Hide Work Experience' : 'Show Work Experience'; // Update button text
        });
    }
});
