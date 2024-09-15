document.getElementById('resumeForm')?.addEventListener('submit', function (e: Event) {
    e.preventDefault();

    // Get form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const workExperience = (document.getElementById('workExperience') as HTMLInputElement).value;

    // Handle profile picture
    const profilePicInput = document.getElementById('profilePicInput') as HTMLInputElement;
    const profilePicUrl = profilePicInput.files?.[0] ? URL.createObjectURL(profilePicInput.files[0]) : '';

    // Get skills
    const skillInputs = document.querySelectorAll('#skillsContainer input');
    const skills: string[] = Array.from(skillInputs).map(input => (input as HTMLInputElement).value);

    // Get certifications
    const certInputs = document.querySelectorAll('#certificationsContainer input');
    const certifications: string[] = Array.from(certInputs).map(input => (input as HTMLInputElement).value);

    // Get projects
    const projInputs = document.querySelectorAll('#projectsContainer input');
    const projects: string[] = Array.from(projInputs).map(input => (input as HTMLInputElement).value);

    // Populate resume output
    const outputProfilePic = document.getElementById('outputProfilePic') as HTMLImageElement;
    const outputName = document.getElementById('outputName') as HTMLHeadingElement;
    const outputEmail = document.getElementById('outputEmail') as HTMLParagraphElement;
    const outputPhone = document.getElementById('outputPhone') as HTMLParagraphElement;
    const outputEducation = document.getElementById('outputEducation') as HTMLParagraphElement;
    const outputWorkExperience = document.getElementById('outputWorkExperience') as HTMLParagraphElement;
    const outputSkills = document.getElementById('outputSkills') as HTMLUListElement;
    const outputCertifications = document.getElementById('outputCertifications') as HTMLUListElement;
    const outputProjects = document.getElementById('outputProjects') as HTMLUListElement;

    outputProfilePic.src = profilePicUrl;
    outputName.textContent = name;
    outputEmail.textContent = `Email: ${email}`;
    outputPhone.textContent = `Phone: ${phone}`;
    outputEducation.textContent = education;
    outputWorkExperience.textContent = workExperience;

    outputSkills.innerHTML = skills.map(skill => `<li>${skill}</li>`).join('');
    outputCertifications.innerHTML = certifications.map(cert => `<li>${cert}</li>`).join('');
    outputProjects.innerHTML = projects.map(proj => `<li>${proj}</li>`).join('');

    // Show the resume output section
    const resumeOutput = document.getElementById('resumeOutput');
    if (resumeOutput) {
        resumeOutput.style.display = 'block';
    }
});
 