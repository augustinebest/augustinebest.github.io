const button = document.getElementById('button');

button.addEventListener('click', (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const alert = document.getElementById('alert')
    if(username.length < 1) {
        alert.style.display = 'block';
       alert.innerHTML = 'Username is required';
   } else if(password.length < 1) {
        alert.style.display = 'block';
        alert.innerHTML = 'Password is required';
    }
    //  else if(username != database_username) {
    //     alert.style.display = 'block';
    //     alert.innerHTML = 'Cannot find account';
    // } 
    else {
        const user = username ? JSON.parse(sessionStorage.getItem('User')) : false;
        if(user && username == user.username && password == user.password) {
            // const database_username = user.username;
            // const database_password = user.password;
            alert.style.display = 'block';
            alert.style.backgroundColor = 'rgb(186, 236, 186)';
            alert.color = 'rgb(8, 81, 8)';
            alert.innerHTML = 'Login successfully!';
            setTimeout(() => {
                window.location = 'profile.html'
            }, 2000)
        } else {
                alert.style.display = 'block';
                alert.innerHTML = 'Account details not correct!';
        }
        console.log(user);
   }
})
