const form = document.getElementById('form');
const firstname = document.getElementById('firstName');
const lastname = document.getElementById('lastName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const address1 = document.getElementById('address1');
const city = document.getElementById('city');
const country = document.getElementById('country');
const schoolName = document.getElementById('schoolName');
const educationLevel = document.getElementById('educationlevel');
const major = document.getElementById('major');
const resume = document.getElementById('resume');
const coverLetter = document.getElementById('coverLetter');
const relevantSkills = document.getElementById('relevantSkills');
const checkboxTerms = document.getElementById('checkbox');
const checkboxTerms1 = document.getElementById('checkbox1');

document.getElementById('viewApplicationsButton').addEventListener('click', function () {
    window.location.href = "index1.html";
});

form.addEventListener('submit', function (event) {

    validationForm(event);

    if (!event.defaultPrevented) {
        const formData = getFormData();
        saveToLocalStorage(formData);
        form.reset();
    }
});

function getFormData() {
    const formData = {
        firstName: firstname.value,
        email: email.value,
        phone: phone.value,
        address1: address1.value,
        educationLevel: educationLevel.value,
        major: major.value,
        relevantSkills: relevantSkills.value,
    };
    return formData;
}

function saveToLocalStorage(formData) {
    const existingData = JSON.parse(localStorage.getItem('formData')) || [];
    existingData.push(formData);
    localStorage.setItem('formData', JSON.stringify(existingData));
}

function validateEmailFormat(email) {
    const re = /@gmail\.com$/i;
    return re.test(email);
}
function validatePhoneNumber(phoneNumber) {
    const phoneRegex = /^\+\d{1,4}-\d{1,14}$/;
    return phoneRegex.test(phoneNumber);
}

function validateField(field) {
    return field.value.trim() !== '';
}


function showError(field, message) {
    const errorDiv = field.nextElementSibling;
    errorDiv.innerText = message;
}

function validationForm(event) {

    if (!validateField(firstname)) {
        event.preventDefault();
        showError(firstname, 'First name is required.');
    }

    if (!validateField(lastname)) {
        event.preventDefault();
        showError(lastname, 'Last name is required.');
    }

    if (!validateField(email)) {
        event.preventDefault();
        showError(email, 'Email is required.');
    } else if (!validateEmailFormat(email.value)) {
        event.preventDefault();
        showError(email, 'Invalid email format.');
    }

    if (!validatePhoneNumber(phone.value)) {
        event.preventDefault();
        showError(phone, 'Invalid phone number format.');
    }

    if (!validateField(address1)) {
        event.preventDefault();
        showError(address1, 'Present address is required.');
    }

    if (!validateField(city)) {
        event.preventDefault();
        showError(city, 'City is required.');
    }

    if (!validateField(country)) {
        event.preventDefault();
        showError(country, 'Country is required.');
    }

    if (!validateField(schoolName)) {
        event.preventDefault();
        showError(schoolName, 'School/University name is required.');
    }

    if (!validateField(educationLevel)) {
        event.preventDefault();
        showError(educationLevel, 'Education level is required.');
    }

    if (!validateField(major)) {
        event.preventDefault();
        showError(major, 'Major/Area of study is required.');
    }

    if (!validateField(coverLetter)) {
        event.preventDefault();
        showError(coverLetter, 'Cover letter is required.');
    }

    if (!validateField(relevantSkills)) {
        event.preventDefault();
        showError(relevantSkills, 'Relevant skills are required.');
    }
    if (!checkboxTerms.checked) {
        event.preventDefault();
        showError(checkboxTerms, 'You must agree to the terms and conditions.');
    }
    if (!checkboxTerms1.checked) {
        event.preventDefault();
        showError(checkboxTerms, 'You must agree to our privacy policy.');
    }
}