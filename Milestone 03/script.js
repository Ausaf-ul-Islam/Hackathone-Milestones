var _a;
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
