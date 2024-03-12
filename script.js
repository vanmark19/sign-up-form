const submit = document.querySelector('button');
const firstName = document.querySelector('#first');
const lastName = document.querySelector('#last_name');
const email = document.querySelector('#email');
const number = document.querySelector('#number');
const confirmPas = document.querySelector('#confirm');
const pass = document.querySelector('#password');



submit.addEventListener('click', e => {
});

confirmPas.addEventListener('focusout', e => {
  if (pass.value !== e.target.value || pass.value.length < 8)
    confirmPas.classList.add('wrong');
  else  {
    confirmPas.classList.remove('wrong');
    confirmPas.classList.add('right');
  }
  });

firstName.addEventListener('focusout', e => {
  if (e.target.value.length < 3)
    firstName.classList.add('wrong');
  else{
    firstName.classList.remove('wrong');
    firstName.classList.add('right');
  }
});

lastName.addEventListener('focusout', e => {
  if (e.target.value.length < 3)
    lastName.classList.add('wrong');
  else{
    lastName.classList.remove('wrong');
    lastName.classList.add('right');
  }
});

number.addEventListener('focusout', e => {
  if (/[^0-9+]/.test(e.target.value) || e.target.value.length < 5) 
    number.classList.add('wrong');
  else {
    number.classList.remove('wrong');
    number.classList.add('right');
  }
});

email.addEventListener('focusout', e => {
  if (!e.target.value.includes('@') || e.target.value < 9)
    email.classList.add('wrong');
  else {
    email.classList.remove('wrong');
    email.classList.add("right");
  }

});

pass.addEventListener('focusout', e => {
  if (pass.value.length < 8)
    pass.classList.add('wrong');
  else{
    pass.classList.remove('wrong');
    pass.classList.add('right'); 
  }
  });