const email = document.getElementById('email');
const error = document.getElementById('error');

email.addEventListener('input', ()=> {
  if (email.value.length < 6) {
    error.style.display = 'block';
  }
  else {
    error.style.display = 'none';
  }
})





