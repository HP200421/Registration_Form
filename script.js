function validRegistration()
{
    var fullname=document.getElementById("fullname").value
    var email=document.getElementById("email").value
    var password=getElementById("password").value
    var mobileNumber=getElementById("mobileNumber").value
    var lastname=getElementById("lastname").value

    var nameRegex = /^[a-zA-Z]+$/;
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var mobileNumberRegex = /^\d{10}$/;

    var isValid = true;
    var errorMessage = "";

    if (!emailRegex.test(email)) {
        isValid = false;
        errorMessage += "Please enter a valid email address.\n";
    }

    if (fullname.length < 6 || !nameRegex.test(fullname)) {
        isValid = false;
        errorMessage += "First name should contain alphabets and have a minimum length of 6 characters.\n";
    }

    if (lastname.length < 6 || !nameRegex.test(lastname)) {
        isValid = false;
        errorMessage += "First name should contain alphabets and have a minimum length of 6 characters.\n";
    }

    if (password.length < 6) {
        isValid = false;
        errorMessage += "Password should have a minimum length of 6 characters.\n";
    }

    if (!mobileNumberRegex.test(mobileNumber)) {
        isValid = false;
        errorMessage += "Mobile number should contain 10 digits.\n";
    }

    if (isValid) {
        // Form submission can proceed
        alert("Registration successful!");
        // You can submit the form using AJAX or any other method here
      } else {
        // Display the error message(s)
        alert(errorMessage);
      }
}