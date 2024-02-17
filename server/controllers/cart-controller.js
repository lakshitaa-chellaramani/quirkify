const Cart = require("../models/cart-model")

const getCart = async (req, res) => {
    var cart = await Cart.findOne({ userId });
    if(!cart) {
        return res.status(404).json({ message: "cart empty" })
    }
}

const addToCart = async (req, res) => {
    const userId = req.body.userid;
    const productId = req.body.productid
    const productName = req.body.productname
    const quantity = req.body.quantity
    const price = req.body.price
    try {
        var cart = await Cart.findOne({ userId });
    
        if (cart) {
            //cart exists for user
            let itemIndex = cart.products.findIndex(productId);
    
            if (itemIndex > -1) {
                //product exists in the cart, update the quantity
                let productItem = cart.products[itemIndex];
                productItem.quantity = quantity;
                cart.products[itemIndex] = productItem;
            } 
            else {
                //product does not exists in cart, add new item
                cart.products.push({ productId, productName, quantity, price });
            }

            cart = await cart.save();
            return res.status(201).send(cart);

            } 
            else {
                //no cart for user, create new cart
                const newCart = await Cart.create({
                    userId,
                    products: [{ productId, productName, quantity, price }]
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