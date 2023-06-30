function validatePasswordStrength(password) {
    var regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
    return regex.test(password);
}
var password1 = "Manishmitra123@";
var password2 = "12345";
console.log(validatePasswordStrength(password1));
console.log(validatePasswordStrength(password2));
