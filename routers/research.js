const express = require('express');
const router = express.Router();

const options = require('../config/sendFileOptions')

router.use('/create', (req, res) => {
  res.sendFile('/create-research.html', options)
})    

router.use('/edit', (req, res) => {
  res.sendFile('/edit-research.html', options)
})

router.use('/collect', (req, res) => {
  res.sendFile('/collect-research.html', options)
})

router.use('/report', (req, res) => {
  res.sendFile('/research-report.html', options)
})

router.use('/thanks', (req, res) => {
  res.sendFile('/research-thanks.html', options)
})

module.exports = router