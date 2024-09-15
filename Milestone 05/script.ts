// Function to handle form submission and populate the resume output
document.getElementById('resumeForm')?.addEventListener('submit', function (e: Event) {
    e.preventDefault();

    // Get form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById('workExperience') as HTMLTextAreaElement).value;

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

// Function to add more input fields dynamically
function addInputField(containerId: string, placeholder: string) {
    const container = document.getElementById(containerId);
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = placeholder;
    input.required = true;
    container?.appendChild(input);
}

// Event listeners for adding fields
document.getElementById('addSkill')?.addEventListener('click', () => addInputField('skillsContainer', 'New Skill'));
document.getElementById('addCertification')?.addEventListener('click', () => addInputField('certificationsContainer', 'New Certification'));
document.getElementById('addProject')?.addEventListener('click', () => addInputField('projectsContainer', 'New Project'));

// Generate Shareable Link
document.getElementById('generateLink')?.addEventListener('click', () => {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    if (name) {
        const baseURL = window.location.href.split('?')[0]; // Get current page URL without query parameters
        const shareableURL = `${baseURL}?username=${encodeURIComponent(name)}`;
        const shareableLink = document.getElementById('shareableLink') as HTMLAnchorElement;
        shareableLink.href = shareableURL;
        shareableLink.innerText = shareableURL;
        document.getElementById('shareableLinkSection')!.style.display = 'block'; // Show the link section
    }
});

// Download as PDF using html2pdf
document.getElementById('downloadPdf')?.addEventListener('click', () => {
    const element = document.getElementById('resumeOutput') as HTMLElement;
    const options = {
        margin: 0,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    // Use html2pdf to download the resume as a PDF
    html2pdf().from(element).set(options).save();
});

// Ensure html2pdf library is available
declare var html2pdf: any;

// Function to get URL query parameter
function getQueryParam(param: string): string | null {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Check if a username is in the URL and auto-populate the resume
window.addEventListener('DOMContentLoaded', () => {
    const username = getQueryParam('username');

    if (username) {
        // Assume we are storing resume data in localStorage
        const storedResume = localStorage.getItem(username);

        if (storedResume) {
            const resumeData = JSON.parse(storedResume);

            // Populate resume output with stored data
            populateResumeOutput(resumeData);
            document.getElementById('resumeOutput')!.style.display = 'block';
        } else {
            alert('No resume found for this user.');
        }
    }
});

// Function to populate the resume output with stored data
function populateResumeOutput(resumeData: any) {
    const {
        profilePicUrl,
        name,
        email,
        phone,
        education,
        workExperience,
        skills,
        certifications,
        projects,
    } = resumeData;

    (document.getElementById('outputProfilePic') as HTMLImageElement).src = profilePicUrl;
    (document.getElementById('outputName') as HTMLHeadingElement).textContent = name;
    (document.getElementById('outputEmail') as HTMLParagraphElement).textContent = `Email: ${email}`;
    (document.getElementById('outputPhone') as HTMLParagraphElement).textContent = `Phone: ${phone}`;
    (document.getElementById('outputEducation') as HTMLParagraphElement).textContent = education;
    (document.getElementById('outputWorkExperience') as HTMLParagraphElement).textContent = workExperience;

    (document.getElementById('outputSkills') as HTMLUListElement).innerHTML = skills.map((skill: string) => `<li>${skill}</li>`).join('');
    (document.getElementById('outputCertifications') as HTMLUListElement).innerHTML = certifications.map((cert: string) => `<li>${cert}</li>`).join('');
    (document.getElementById('outputProjects') as HTMLUListElement).innerHTML = projects.map((proj: string) => `<li>${proj}</li>`).join('');
}

// Save resume data to localStorage when form is submitted
document.getElementById('resumeForm')?.addEventListener('submit', function (e: Event) {
    e.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById('workExperience') as HTMLTextAreaElement).value;
    const profilePicInput = document.getElementById('profilePicInput') as HTMLInputElement;
    const profilePicUrl = profilePicInput.files?.[0] ? URL.createObjectURL(profilePicInput.files[0]) : '';

    const skillInputs = document.querySelectorAll('#skillsContainer input');
    const skills: string[] = Array.from(skillInputs).map(input => (input as HTMLInputElement).value);

    const certInputs = document.querySelectorAll('#certificationsContainer input');
    const certifications: string[] = Array.from(certInputs).map(input => (input as HTMLInputElement).value);

    const projInputs = document.querySelectorAll('#projectsContainer input');
    const projects: string[] = Array.from(projInputs).map(input => (input as HTMLInputElement).value);

    // Store resume data in localStorage
    const resumeData = {
        profilePicUrl,
        name,
        email,
        phone,
        education,
        workExperience,
        skills,
        certifications,
        projects,
    };

    // Save to localStorage using the name as the key
    localStorage.setItem(name, JSON.stringify(resumeData));
});
