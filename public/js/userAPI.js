const userAPI = {
    login: (creds) => fetch('/api/user/login', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify(creds)
    })
    .then(res => res.json())
    .then((res) =>{
        console.log('we heard back!', res)
    }),


    signUp: (creds) => fetch('/api/user/signup', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify(creds)
    })
    .then(res => res.json())
    .then((res) =>{
        console.log('we heard back!', res)
    })
        
}