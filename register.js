const button = document.getElementById('button');

button.addEventListener('click', (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const confirm_password = document.getElementById('confirm_password').value;
    const alert = document.getElementById('alert')
    const emailRegex = /[a-zs0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

   if(username.length < 6) {
       alert.style.display = 'block';
       alert.innerHTML = 'Username should be greater than 6 characters';
   } else if(!emailRegex.test(email)) {
        alert.style.display = 'block';
        alert.innerHTML = 'Email is not valid';
   } else if(password != confirm_password) {
        alert.style.display = 'block';
        alert.innerHTML = 'Password do not match';
   } else {
        alert.style.display = 'block';
        alert.style.backgroundColor = 'rgb(186, 236, 186)';
        alert.color = 'rgb(8, 81, 8)';
        alert.innerHTML = 'Account registered successfully!';
        const data = {
            username,
            password
        }
        sessionStorage.setItem('User', JSON.stringify(data));
        setTimeout(() => {
            window.location = 'login.html'
        }, 2000)
   }
})
