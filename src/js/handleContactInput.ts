const emailRgx = /^[a-z-._0-9]+@[a-z0-9]+\.[a-z]{2,5}$/;

export default (form: any, email: any, message: any) => {
  form?.addEventListener('submit', (e: any) => {
    e.preventDefault();

    if (emailRgx.test(email?.value)) {
      message.textContent = 'Thanks you';
      message.style.display = 'block';
      email.value = '';
    } else {
      message.textContent = 'Please enter a valid email address';
      message.style.display = 'block';
    }
  });
};
