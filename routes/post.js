const express = require('express')
const router = express.Router()
const { createUser } = require('../controllers/post.js')
const {shareProject} =require('../controllers/projectflow')
router.post('/create-user', createUser)
router.post('/share_project', shareProject)


module.exports = router