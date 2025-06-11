const express = require('express')
const router = express.Router()

router.use('/',require('../routes/auth/authRoutes'))

module.exports = router