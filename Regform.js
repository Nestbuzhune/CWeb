function togglePermanentAddress() {
    var isChecked = document.getElementById('permanentSameAsTemp').checked;
    var permanentAddressField = document.getElementById('permanentAddress');
    var tempAddressField = document.getElementById('tempAddress');

    permanentAddressField.disabled = isChecked;
    if (isChecked) {
      permanentAddressField.value = tempAddressField.value;
    } else {
      permanentAddressField.value = '';
    }
  }

  function validateForm() {
    var name = document.getElementById('name').value.trim();
    var regNo = document.getElementById('regNo').value.trim();
    var dob = document.getElementById('dob').value;
    var program = document.getElementById('program').value;
    var email = document.getElementById('email').value.trim();
    var tempAddress = document.getElementById('tempAddress').value.trim();
    var permanentAddress = document.getElementById('permanentAddress').value.trim();
    var phone = document.getElementById('phone').value.trim();

    if (!/^[a-zA-Z]{1,30}$/.test(name)) {
      alert('Name should contain only alphabets and not exceed 30 characters.');
      return false;
    }
    if (!/^[a-zA-Z0-9]+$/.test(regNo)) {
      alert('Register number should contain only alphabets and numbers.');
      return false;
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }
    if (!/^\d{10}$/.test(phone)) {
      alert('Phone number should be exactly 10 digits.');
      return false;
    }
alert('Thanks for submitting your registration form.');
      return true;
    return true;
  }