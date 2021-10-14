const userNameForm = document.getElementById("userNameForm");

const passwordForm = document.getElementById("passwordForm");

const signUpButton = document.getElementById("signUp");

signUpButton.addEventListener("click", (e) =>{
    e.preventDefault();
    const username = userNameForm.value;
    const password = passwordForm.value;
    handleSignup(username, password);
})

const handleSignup = async (username, password) => {
    const signupResponse = await fetch('/api/user/signUp', {
        method: 'post',
        body: JSON.stringify({
            username, 
            password
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    //do something with the response

    //if the response is good display something
    if (signupResponse.ok) {
        document.location.replace('/dashboard');
    }else{
        alert(signupResponse.statusText);
    }

    //if the response is bad display an error
}
