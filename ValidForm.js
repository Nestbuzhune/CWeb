function validateForm() {
    var password = document.getElementById("password").value;
    var verifyPassword = document.getElementById("verifyPassword").value;
    
    if (password !== verifyPassword) {
        alert("Passwords do not match.");
        return false;
    }
var checkboxes = document.querySelectorAll('input[name="preferences"]:checked');

if (checkboxes.length < 2) {
    alert("Please select at least two colors.");
    return false;
}
    alert('Form submitted successfully!');
    return true;
}