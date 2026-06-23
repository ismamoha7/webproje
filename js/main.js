// Feature 1: Custom Cake Quote Calculator
const cakeSizeSelect = document.getElementById('cakeSize');
const premiumFillingCheckbox = document.getElementById('premiumFilling');
const totalDisplaySpan = document.getElementById('totalDisplay');

if (cakeSizeSelect && premiumFillingCheckbox && totalDisplaySpan) {
    function calculateCakePrice() {
        let basePrice = parseFloat(cakeSizeSelect.value);
        let extraFee = premiumFillingCheckbox.checked ? parseFloat(premiumFillingCheckbox.value) : 0;
        let finalTotal = basePrice + extraFee;
        totalDisplaySpan.innerText = `$${finalTotal.toFixed(2)}`;
    }
    cakeSizeSelect.addEventListener('change', calculateCakePrice);
    premiumFillingCheckbox.addEventListener('change', calculateCakePrice);
}

// Feature 2: Custom Contact Form Validation
const contactForm = document.getElementById('bakeryContactForm');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const userMessage = document.getElementById('userMessage');
const successAlert = document.getElementById('formSuccessMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        let isFormValid = true;

        if (userName.value.trim() === "") {
            document.getElementById('nameError').classList.remove('d-none');
            isFormValid = false;
        } else {
            document.getElementById('nameError').classList.add('d-none');
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(userEmail.value.trim())) {
            document.getElementById('emailError').classList.remove('d-none');
            isFormValid = false;
        } else {
            document.getElementById('emailError').classList.add('d-none');
        }

        if (userMessage.value.trim() === "") {
            document.getElementById('messageError').classList.remove('d-none');
            isFormValid = false;
        } else {
            document.getElementById('messageError').classList.add('d-none');
        }

        if (isFormValid) {
            successAlert.classList.remove('d-none');
            contactForm.reset();
        }
    });
}