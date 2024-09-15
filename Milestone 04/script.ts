// Get elements from the DOM
const profilePic = document.getElementById('profilePic') as HTMLImageElement;
const profilePicInput = document.getElementById('profilePicInput') as HTMLInputElement;
const editButton = document.getElementById('editButton') as HTMLButtonElement;
const contentEditableElements = document.querySelectorAll('[contenteditable="true"]');

// Initially set all contenteditable elements to non-editable
contentEditableElements.forEach((element) => {
    element.setAttribute('contenteditable', 'false');
});

// Handle profile picture upload
profilePic.addEventListener('click', () => {
    if (editButton.innerText === 'Save Changes') {
        profilePicInput.click(); // Trigger file input click when profile picture is clicked, only in edit mode
    }
});

profilePicInput.addEventListener('change', (event: Event) => {
    const input = event.target as HTMLInputElement;
    const file = input.files ? input.files[0] : null;

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            profilePic.src = e.target?.result as string;
        };
        reader.readAsDataURL(file);
    }
});

// Handle the Edit/Save Resume button functionality
editButton.addEventListener('click', () => {
    const isEditing = editButton.innerText === 'Edit Resume';

    contentEditableElements.forEach((element) => {
        // Enable or disable contenteditable mode based on the button state
        element.setAttribute('contenteditable', isEditing ? 'true' : 'false');
    });

    // Toggle button text and background color based on the mode
    if (isEditing) {
        editButton.innerText = 'Save Changes';
        editButton.style.backgroundColor = '#ff6f61'; // Indicate editing mode
        editButton.style.boxShadow = '0 0 10px #ff6f61'; // Indicate editing mode
    } else {
        editButton.innerText = 'Edit Resume';
        editButton.style.backgroundColor = '#00FF88'; // Return to view mode
        editButton.style.boxShadow = '0 0 10px #00FF88'; // Return to view mode
    }
});
