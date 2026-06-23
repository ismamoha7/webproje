/* ==========================================================================
   Interactive Feature 1: Bakery Custom Cake Quote Calculator
   ========================================================================== */

// Make sure the elements exist on the current page before running code
const cakeSizeSelect = document.getElementById('cakeSize');
const premiumFillingCheckbox = document.getElementById('premiumFilling');
const totalDisplaySpan = document.getElementById('totalDisplay');

if (cakeSizeSelect && premiumFillingCheckbox && totalDisplaySpan) {
    
    function calculateCakePrice() {
        // Get base price from chosen dropdown value
        let basePrice = parseFloat(cakeSizeSelect.value);
        
        // Add extra fee if premium option box is checked
        let extraFee = premiumFillingCheckbox.checked ? parseFloat(premiumFillingCheckbox.value) : 0;
        
        // Calculate the grand total combined amount
        let finalTotal = basePrice + extraFee;
        
        // Update the screen text with proper formatting
        totalDisplaySpan.innerText = `$${finalTotal.toFixed(2)}`;
    }

    // Assign event listeners to trigger instantly when inputs change
    cakeSizeSelect.addEventListener('change', calculateCakePrice);
    premiumFillingCheckbox.addEventListener('change', calculateCakePrice);
}