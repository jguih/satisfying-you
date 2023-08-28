const express = require('express');
const router = express.Router();

const options = require('../config/sendFileOptions')

router.use('/create', (req, res) => {
  res.sendFile('/create-account.html', options)
})  

router.use('/recover-password', (req, res) => {
  res.sendFile('/recover-password.html', options)
})  

module.exports = router