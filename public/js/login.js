const userNameForm = document.getElementById("userNameForm");

const passwordForm = document.getElementById("passwordForm");

const loginButton = document.getElementById("login");

loginButton.addEventListener("click", (e) =>{
    e.preventDefault();
    const username = userNameForm.value;
    const password = passwordForm.value;
    handleLogin(username, password);
})

const handleLogin = async (username, password) => {
    const loginResponse = await fetch('/api/user/login', {
        method: 'post',
        body: JSON.stringify({
            username, 
            password
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    //do something with the response

    //if the response is good display something
    if (loginResponse.ok) {
        document.location.replace('/dashboard');
    }else{
        alert(loginResponse.statusText);
    }

    //if the response is bad display an error
}