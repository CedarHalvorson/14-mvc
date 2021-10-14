const express = require('express')
const router = express.Router()
const User = require('../../models/User');
const bcrypt = require('bcrypt');
const Post = require('../../models/Post');

router.post('/', async (req, res) =>{
  console.log('hey we reached the route we wanted!!!');
  console.log(req.body)
  const newUser = await User.create(req.body);
  res.status(201).json(newUser)
})

router.post('/login', async (req, res) => {
  const userCredentials = req.body;

  //check to make sure there is a username and password
  //send an error if not

  const foundUser = await User.findOne({
    where: {
      username: userCredentials.username,
    }
  });

  if (foundUser && foundUser.username){
    //you want to verify the password
    const passwordIsValid = bcrypt.compareSync(foundUser.password, userCredentials.password);
    if (passwordIsValid){
      req.session.user = foundUser;
      req.session.isLoggedIn = true;
      res.status(200).send('User Logged In');
    }else{
      res.status(401).send('Incorrect Password');
    }
  }else{
    res.status(404).send('User Not Found');
  }
})


router.post('/signUp',async (req, res) => {
  const userCredentials = req.body;

  //check to make sure there is a username and password
  //send an error if not

  //create the user
  const newUser = await User.create({
    username: userCredentials.username, 
    password: userCredentials.password
  });

  req.session.user = newUser;
  req.session.isLoggedIn = true;
  res.status(200).send('User Created Successfully');

  //you should add some error checking to make sure the user was created
})

router.post('/createPost', async (req, res) => {
  console.log('create post')
  const postData = req.body;
  //should validate the incoming information
  const currentUser = req.session.user;
  const newPost = await Post.create({
    title: postData.title,
    text: postData.text,
    userId: currentUser.id,
  });
  res.status(200).send('Post Created Successfully');
})

/*
router.post('/dashboard', async (req, res) => {
  //get the posts based on the username
  const allUserPosts = Post.findAll({
    where: {
      username: userCredentials.username,
    }
  })

  console.log(userCredentials);
  res.render('dashboard')
})
*/

router.get('/logout', (req, res) => {
  req.session.user = '';
  req.session.isLoggedIn = false;
  req.session.destroy();
  res.redirect('/');
})


module.exports = router 


