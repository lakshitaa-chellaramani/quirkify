const mongoose = require('mongoose');

const uri = "mongodb+srv://yashloriya0206:Yash0206@cluster0.u6icnjq.mongodb.net/quirkify?retryWrites=true&w=majority";

const ItemSchema = new mongoose.Schema({
    itemName: { type: String, required: true }, //
    itemPrice: { type: Number, required: true }, //
    itemCategory: { type: String, required: true }, // Veg / Non-Veg
    itemSubCategory: { type: String, required: true }, // Desert / Main / Starters / Quick-Bites
    noOfOrders: { type: Number, required: true }, //
    itemMood: { type: String, required: true }, //
    itemCalories: { type: Number, required: true, default: -1 },
    itemDesc: { type: String, required: true }, //
    itemImage: { type: String, required: true },
    itemCookingTime: { type: String, required: true }
})

const Item = new mongoose.model("items", ItemSchema)

async function inserItem() {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
        const newItem = new Item({
            itemName: "Chicken Wings",
            itemPrice: 199,
            itemCategory: 'nonveg',
            itemSubCategory: 'quickbites',
            noOfOrders: 0,
            itemMood: 'Mellow',
            itemDesc: 'Tasty Chicken Wings to make your happier mood, the happiest.',
            itemImage: 'https://wallpaperaccess.com/full/2135830.jpg',
            itemCookingTime: '15',
        })
        await newItem.save();
        console.log("Inserted Successfully.")
    }
    catch (error) {
        console.error('Error fetching product information:', error);
    }
}

inserItem();