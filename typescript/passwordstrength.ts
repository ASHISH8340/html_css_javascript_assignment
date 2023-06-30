function validatePasswordStrength(password: string): boolean {
  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

  return regex.test(password);
}

const password1 = "Manishmitra123@";
const password2 = "12345";

console.log(validatePasswordStrength(password1))
console.log(validatePasswordStrength(password2));
