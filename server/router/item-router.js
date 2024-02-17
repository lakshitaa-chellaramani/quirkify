const express = require('express')
const router = express.Router()
const contactForm = require('../controllers/contact-controller')
const authMiddleware = require('../middlewares/auth-middleware')
const menuItems = require('../controllers/item-controller')
const getAllItems = require('../utils/getAllItems')

router.route('/menu').get(authMiddleware, menuItems.getStarters)

router.route('/menu/starters').get(authMiddleware, menuItems.getStarters)
router.route('/menu/quickbite').get(authMiddleware, menuItems.getQuickBites)
router.route('/menu/maincourse').get(authMiddleware, menuItems.getMaincourse)
router.route('/menu/dessert').get(authMiddleware, menuItems.getDesserts)

router.route('/menu/starters/filter').post(authMiddleware, menuItems.getStartersFilter)
router.route('/menu/maincourse/filter').post(authMiddleware, menuItems.getMaincourseFilter)
router.route('/menu/quickbite/filter').post(authMiddleware, menuItems.getQuickbitesFilter)
router.route('/menu/dessert/filter').post(authMiddleware, menuItems.getDessertFilter)

router.route('/getItems').get( getAllItems)

module.exports = router