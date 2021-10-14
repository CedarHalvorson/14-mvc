const createPost = document.getElementById("createPost");
const createBlog = document.getElementById("createBlog");
const postTitle = document.getElementById("postTitle");



createPost.addEventListener("click", (e) =>{
    e.preventDefault();
    const title = postTitle.value;
    const text = createBlog.value;
    handlePost(title, text);
}); 

const handlePost= async (title, text) => {
    const postResponse = await fetch('/api/user/createPost', {
        method: 'post',
        body: JSON.stringify({
            title, 
            text
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    //do something with the response

    //if the response is good display something
    if (postResponse.ok) {
        document.location.replace('/dashboard');
    }else{
        alert(postResponse.statusText);
    }

    //if the response is bad display an error
}
