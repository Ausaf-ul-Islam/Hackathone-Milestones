// Get elements from the DOM
var profilePic = document.getElementById('profilePic');
var profilePicInput = document.getElementById('profilePicInput');
var editButton = document.getElementById('editButton');
var contentEditableElements = document.querySelectorAll('[contenteditable="true"]');
// Initially set all contenteditable elements to non-editable
contentEditableElements.forEach(function (element) {
    element.setAttribute('contenteditable', 'false');
});
// Handle profile picture upload
profilePic.addEventListener('click', function () {
    if (editButton.innerText === 'Save Changes') {
        profilePicInput.click(); // Trigger file input click when profile picture is clicked, only in edit mode
    }
});
profilePicInput.addEventListener('change', function (event) {
    var input = event.target;
    var file = input.files ? input.files[0] : null;
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            profilePic.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(file);
    }
});
// Handle the Edit/Save Resume button functionality
editButton.addEventListener('click', function () {
    var isEditing = editButton.innerText === 'Edit Resume';
    contentEditableElements.forEach(function (element) {
        // Enable or disable contenteditable mode based on the button state
        element.setAttribute('contenteditable', isEditing ? 'true' : 'false');
    });
    // Toggle button text and background color based on the mode
    if (isEditing) {
        editButton.innerText = 'Save Changes';
        editButton.style.backgroundColor = '#ff6f61'; // Indicate editing mode
        editButton.style.boxShadow = '0 0 10px #ff6f61'; // Indicate editing mode
    }
    else {
        editButton.innerText = 'Edit Resume';
        editButton.style.backgroundColor = '#00FF88'; // Return to view mode
        editButton.style.boxShadow = '0 0 10px #00FF88'; // Return to view mode
    }
});
