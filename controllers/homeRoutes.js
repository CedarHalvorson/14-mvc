const router = require('express').Router();
const Post = require('../models/Post');

router.get("/", (req, res) => {
    res.render("homepage", {});
});
router.get("/login", (req, res) => {
    res.render("login", {});
});

router.get("/createPost", (req,res) => {
    res.render("blogCreate",{});
});

router.get("/dashboard", async (req, res) => {
    const currentUser = req.session.user ? req.session.user : '';
    if (!currentUser) {
        res.redirect('/');
        return;
    }
    let allUserPosts = [];
    //get the current user if logged in
    
    if (currentUser){
        allUserPosts = await Post.findAll({
            where: {
              userId: currentUser.id,
            }
        })
    }
console.log(allUserPosts);
    res.render("dashboard", {
        posts: allUserPosts.map(post => post.dataValues),
        loggedIn: req.session.isLoggedIn
    });
});

router.get("/signUp", (req, res) => {
    res.render("signUp", {});
});


module.exports = router;