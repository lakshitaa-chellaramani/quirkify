const express = require('express')
const router = express.Router()
const contactForm = require('../controllers/contact-controller')
const authMiddleware = require('../middlewares/auth-middleware')
const menuItems = require('../controllers/item-controller')

router.route('/menu').get(authMiddleware, getStarters)

router.route('/menu/starters').get(authMiddleware, menuItems.getStarters)
router.route('/menu/quickbites').get(authMiddleware, menuItems.getQuickBites)
router.route('/menu/maincourse').get(authMiddleware, menuItems.getMaincourse)
router.route('/menu/desserts').get(authMiddleware, menuItems.getDesserts)

router.route('/menu/starters/filter').post(authMiddleware, menuItems.getStartersFilter)
router.route('/menu/maincourse/filter').post(authMiddleware, menuItems.getMaincourseFilter)
router.route('/menu/quickbites/filter').post(authMiddleware, menuItems.getQuickbitesFilter)
router.route('/menu/desserts/filter').post(authMiddleware, menuItems.getDessertFilter)



module.exports = router