const Contact = require('../models/contact-model')
const User = require('../models/user-model')

const contactForm = async (req, res) => {
    try {
        const response = req.body
        const user = await User.findOne({ email: response.email })
        if (!user) {
            return res.status(404).json({ message: "User with Entered Mail-Id does not exist." })
        }
        await Contact.create(response)
        return res.json({ message: "Data Saved Successfully." })
    } catch (error) {
        res.send({ message: "Some Error Occured." })
    }
}

module.exports = contactForm