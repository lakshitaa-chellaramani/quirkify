const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/auth-middleware')
const getLocation = require('../controllers/location-controller')

router.route('/getAllLocations').get(getLocation)

module.exports = router