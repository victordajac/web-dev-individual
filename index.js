const form2 = document.querySelector('form');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const middleNameInput = document.getElementById('middleName');
const phoneInput = document.getElementById('phoneNumber');
const birthdateInput = document.getElementById('birthday');
const studentNumberInput = document.getElementById('studentNumber')

form2.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!validateName(firstNameInput, 'First Name')) return;
  if (!validateName(lastNameInput, 'Last Name')) return;
  if (!validateName(middleNameInput, 'Middle Name')) return;
  if (!validatePhoneNumber(phoneInput, 'Phone Number')) return;
  if (!validateBirthdate(birthdateInput, 'Birthdate')) return;
  if (!validateStudNumber(studentNumberInput, 'Student Number')) return;

  form2.submit();
});



function validateStudNumber(input, fieldName) {
    const regex = /^\d{4}-\d{5}-[A-Z]{2}-\d$/;
    if (!regex.test(input.value.trim())) {
        alert(`Please enter a valid ${fieldName} in the format "####-#####-XX-#".`);
        return false;
    }
    return true;
}

function validateName(input, fieldName) {
    const regex = /^[a-zA-Z\s.-]+$/;
    if (!regex.test(input.value.trim())) {
        alert(`Please enter a valid ${fieldName}.`);
        return false;
    }
    return true;
}

function validatePhoneNumber(input) {
    const regex = /^\d{11}$/;
    if (!regex.test(input.value.trim())) {
        alert('Please enter a valid phone number with exactly 11 digits.');
        return false;
    }
    return true;
}



function validateBirthdate(input) {
    const today = new Date();
    const minAge = 16; 
    const maxAge = 100;
    const birthdate = new Date(input.value);
    const diffYears = Math.floor((today - birthdate) / (1000 * 60 * 60 * 24 * 365));
    if (diffYears < minAge || diffYears > maxAge) {
        alert(`You must be at least ${minAge} years old to use this service.`);
        return false;
    }
    return true;
}


