const logoutButton = document.getElementById("logoutButton");
const createBlogPost = document.getElementById("createBlogPost");

logoutButton.addEventListener("click", () =>{
    document.location.replace('/api/user/logout');
});

if (createBlogPost){
    createBlogPost.addEventListener("click", () =>{
        document.location.replace('/createPost');
    });
}


