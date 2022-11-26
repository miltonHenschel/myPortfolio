// FORM VALIDATION
const errorMessage = document.querySelector('.error-message');
const form = document.getElementById('contact-form');
const userName = document.getElementById('name');
const message = document.getElementById('message');
const email = document.getElementById('email');
const emailRegex = /^[a-z0-9_.]+@[a-z0-9_.]+\.[a-z0-9_.]+$/;

form.addEventListener('submit', (e) => {
  if (!emailRegex.test(email.value)) {
    errorMessage.style.display = 'block';
    email.style.border = '1px solid var(--error-color)';
    email.style.borderRadius = '1rem';
  }
});

// LOCAL STORAGE
let localData = {
  name: '',
  email: '',
  message: '',
};

function storeLocalData() {
  localStorage.setItem('user', JSON.stringify(localData));
}

form.addEventListener('change', () => {
  localData.name = userName.value;
  localData.email = email.value;
  localData.message = message.value;
  storeLocalData();
});