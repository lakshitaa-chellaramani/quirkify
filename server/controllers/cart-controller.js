const { CURSOR_FLAGS } = require("mongodb");
const Cart = require("../models/cart-model")

const getCart = async (req, res) => {
    const userId = req.body.userid;
    var cart = await Cart.findOne({ userId });
    if(!cart) {
        return res.status(404).json({ message: "cart empty" })
    }
}

const addToCart = async (req, res) => {
    const userId = req.body.cartOwner;
    const itemId = req.body.itemId
    const itemName = req.body.itemName
    const quantity = req.body.quantity
    const itemPrice = req.body.itemPrice
    try {
        var cart = await Cart.findOne({ cartOwner: userId });
        console.log(userId, itemId, itemName, quantity, itemPrice)
        if (cart) {

            const filteredCart = cart.products.filter((product) => { return product.itemId === itemId })
            if (filteredCart.length == 0){
                await Cart.insertOne({
                    cartOwner : userId,
                    products: [
                        {
                          itemId,
                          itemName,
                          quantity,
                          itemPrice
                        }
                    ]
                })
                return res.status(201).json(cart);
            }
            else {

                const index = cart.products.findIndex(item => item.itemId === itemId);

                const update = {};
                update[`cart.${index}.quantity`] = 6;
                console.log(`cart.${index}.quantity`)

                await Cart.updateOne({itemId: itemId}, {$set : update})
                return res.status(201).json(cart);
            }

            } 
            else {
                //no cart for user, create new cart
                const newCart = await Cart.create({
                    cartOwner: userId,
                    products: [{ itemId, itemName, quantity, itemPrice }]
                });
    
                return res.status(201).json({newCart});
            }
        } 
        catch (err) {
            console.log(err);
            res.status(500).json({message:"Something went wrong"});
        }
}

const deleteFromCart = async (req, res) => {
    const userId = req.body.userid;
    const productId = req.body.productid
    try {
        var cart = await Cart.findOne({ userId });

        let itemIndex = cart.products.findIndex(productId);
    
        if (itemIndex > -1) {
            //product exists in the cart, update the quantity
            let productItem = cart.products[itemIndex];
            if (productItem.quantity > 1) {
                productItem.quantity = productItem.quantity - 1;
                cart.products[itemIndex] = productItem;
            }
            else if (productItem.quantity = 1) {
                cart.products.pop({productId})
            }
        }

        cart = await cart.save();
        return res.status(201).json({cart});
    } 
    catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}
        

module.exports = { getCart, addToCart, deleteFromCart }



// router.route('/getitems').get(authMiddleware, getAllItems)