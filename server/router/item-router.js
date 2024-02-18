const express = require('express')
const router = express.Router()
const contactForm = require('../controllers/contact-controller')
const authMiddleware = require('../middlewares/auth-middleware')
const menuItems = require('../controllers/item-controller')
const getAllItems = require('../utils/getAllItems')

router.route('/menu').get(authMiddleware, menuItems.getStarters)

router.route('/menu/starters').get(menuItems.getStarters)
router.route('/menu/quickbite').get(menuItems.getQuickBites)
router.route('/menu/maincourse').get(menuItems.getMaincourse)
router.route('/menu/dessert').get(menuItems.getDesserts)
router.route('/menu/veg').get(menuItems.getVeg)
router.route('/menu/nonveg').get(menuItems.getNonVeg)

router.route('/menu/starters/filter').post(menuItems.getStartersFilter)
router.route('/menu/maincourse/filter').post(menuItems.getMaincourseFilter)
router.route('/menu/quickbite/filter').post(menuItems.getQuickbitesFilter)
router.route('/menu/dessert/filter').post(menuItems.getDessertFilter)

router.route('/getItems').get(getAllItems)

module.exports = router