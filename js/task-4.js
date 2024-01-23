const loginForm = document.querySelector('form.login-form');

loginForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const email = loginForm.elements.email.value.trim();
  const password = loginForm.elements.password.value.trim();
  if (email === '' || password === '') {
    alert('All form fields must be filled in');
  } else {
    const formData = {
      email,
      password,
    };
    console.log(formData);
    loginForm.reset();
  }
}
