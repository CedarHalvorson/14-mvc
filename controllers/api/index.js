const express = require('express');

const router = express.Router();
const apiRoutes = require('./userRoutes');
// const htmlRoutes = require('./htmlRoutes');

// router.use('/', htmlRoutes);
router.use('/user', apiRoutes);

module.exports = router;
