var _a, _b, _c, _d, _e, _f, _g;
// Function to handle form submission and populate the resume output
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (e) {
    var _a;
    e.preventDefault();
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('workExperience').value;
    // Handle profile picture
    var profilePicInput = document.getElementById('profilePicInput');
    var profilePicUrl = ((_a = profilePicInput.files) === null || _a === void 0 ? void 0 : _a[0]) ? URL.createObjectURL(profilePicInput.files[0]) : '';
    // Get skills
    var skillInputs = document.querySelectorAll('#skillsContainer input');
    var skills = Array.from(skillInputs).map(function (input) { return input.value; });
    // Get certifications
    var certInputs = document.querySelectorAll('#certificationsContainer input');
    var certifications = Array.from(certInputs).map(function (input) { return input.value; });
    // Get projects
    var projInputs = document.querySelectorAll('#projectsContainer input');
    var projects = Array.from(projInputs).map(function (input) { return input.value; });
    // Populate resume output
    var outputProfilePic = document.getElementById('outputProfilePic');
    var outputName = document.getElementById('outputName');
    var outputEmail = document.getElementById('outputEmail');
    var outputPhone = document.getElementById('outputPhone');
    var outputEducation = document.getElementById('outputEducation');
    var outputWorkExperience = document.getElementById('outputWorkExperience');
    var outputSkills = document.getElementById('outputSkills');
    var outputCertifications = document.getElementById('outputCertifications');
    var outputProjects = document.getElementById('outputProjects');
    outputProfilePic.src = profilePicUrl;
    outputName.textContent = name;
    outputEmail.textContent = "Email: ".concat(email);
    outputPhone.textContent = "Phone: ".concat(phone);
    outputEducation.textContent = education;
    outputWorkExperience.textContent = workExperience;
    outputSkills.innerHTML = skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join('');
    outputCertifications.innerHTML = certifications.map(function (cert) { return "<li>".concat(cert, "</li>"); }).join('');
    outputProjects.innerHTML = projects.map(function (proj) { return "<li>".concat(proj, "</li>"); }).join('');
    // Show the resume output section
    var resumeOutput = document.getElementById('resumeOutput');
    if (resumeOutput) {
        resumeOutput.style.display = 'block';
    }
});
// Function to add more input fields dynamically
function addInputField(containerId, placeholder) {
    var container = document.getElementById(containerId);
    var input = document.createElement('input');
    input.type = 'text';
    input.placeholder = placeholder;
    input.required = true;
    container === null || container === void 0 ? void 0 : container.appendChild(input);
}
// Event listeners for adding fields
(_b = document.getElementById('addSkill')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () { return addInputField('skillsContainer', 'New Skill'); });
(_c = document.getElementById('addCertification')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () { return addInputField('certificationsContainer', 'New Certification'); });
(_d = document.getElementById('addProject')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function () { return addInputField('projectsContainer', 'New Project'); });
// Generate Shareable Link
(_e = document.getElementById('generateLink')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', function () {
    var name = document.getElementById('name').value;
    if (name) {
        var baseURL = window.location.href.split('?')[0]; // Get current page URL without query parameters
        var shareableURL = "".concat(baseURL, "?username=").concat(encodeURIComponent(name));
        var shareableLink = document.getElementById('shareableLink');
        shareableLink.href = shareableURL;
        shareableLink.innerText = shareableURL;
        document.getElementById('shareableLinkSection').style.display = 'block'; // Show the link section
    }
});
// Download as PDF using html2pdf
(_f = document.getElementById('downloadPdf')) === null || _f === void 0 ? void 0 : _f.addEventListener('click', function () {
    var element = document.getElementById('resumeOutput');
    var options = {
        margin: 0,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };
    // Use html2pdf to download the resume as a PDF
    html2pdf().from(element).set(options).save();
});
// Function to get URL query parameter
function getQueryParam(param) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
// Check if a username is in the URL and auto-populate the resume
window.addEventListener('DOMContentLoaded', function () {
    var username = getQueryParam('username');
    if (username) {
        // Assume we are storing resume data in localStorage
        var storedResume = localStorage.getItem(username);
        if (storedResume) {
            var resumeData = JSON.parse(storedResume);
            // Populate resume output with stored data
            populateResumeOutput(resumeData);
            document.getElementById('resumeOutput').style.display = 'block';
        }
        else {
            alert('No resume found for this user.');
        }
    }
});
// Function to populate the resume output with stored data
function populateResumeOutput(resumeData) {
    var profilePicUrl = resumeData.profilePicUrl, name = resumeData.name, email = resumeData.email, phone = resumeData.phone, education = resumeData.education, workExperience = resumeData.workExperience, skills = resumeData.skills, certifications = resumeData.certifications, projects = resumeData.projects;
    document.getElementById('outputProfilePic').src = profilePicUrl;
    document.getElementById('outputName').textContent = name;
    document.getElementById('outputEmail').textContent = "Email: ".concat(email);
    document.getElementById('outputPhone').textContent = "Phone: ".concat(phone);
    document.getElementById('outputEducation').textContent = education;
    document.getElementById('outputWorkExperience').textContent = workExperience;
    document.getElementById('outputSkills').innerHTML = skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join('');
    document.getElementById('outputCertifications').innerHTML = certifications.map(function (cert) { return "<li>".concat(cert, "</li>"); }).join('');
    document.getElementById('outputProjects').innerHTML = projects.map(function (proj) { return "<li>".concat(proj, "</li>"); }).join('');
}
// Save resume data to localStorage when form is submitted
(_g = document.getElementById('resumeForm')) === null || _g === void 0 ? void 0 : _g.addEventListener('submit', function (e) {
    var _a;
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('workExperience').value;
    var profilePicInput = document.getElementById('profilePicInput');
    var profilePicUrl = ((_a = profilePicInput.files) === null || _a === void 0 ? void 0 : _a[0]) ? URL.createObjectURL(profilePicInput.files[0]) : '';
    var skillInputs = document.querySelectorAll('#skillsContainer input');
    var skills = Array.from(skillInputs).map(function (input) { return input.value; });
    var certInputs = document.querySelectorAll('#certificationsContainer input');
    var certifications = Array.from(certInputs).map(function (input) { return input.value; });
    var projInputs = document.querySelectorAll('#projectsContainer input');
    var projects = Array.from(projInputs).map(function (input) { return input.value; });
    // Store resume data in localStorage
    var resumeData = {
        profilePicUrl: profilePicUrl,
        name: name,
        email: email,
        phone: phone,
        education: education,
        workExperience: workExperience,
        skills: skills,
        certifications: certifications,
        projects: projects,
    };
    // Save to localStorage using the name as the key
    localStorage.setItem(name, JSON.stringify(resumeData));
});
