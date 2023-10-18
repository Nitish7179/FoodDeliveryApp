const mongoose = require('mongoose')

const mongoURI = 'mongodb+srv://foodapp:Nitish@cluster0.zm2dy2u.mongodb.net/foodapp?retryWrites=true&w=majority'

module.exports = async function (callback) {
    try {
        await mongoose.connect( 'mongodb+srv://foodapp:Nitish@cluster0.zm2dy2u.mongodb.net/foodapp?retryWrites=true&w=majority');

        console.log("Connected to MongoDB");

        const foodCollection = await mongoose.connection.db.collection("food_items");
        const data = await foodCollection.find({}).toArray();

        const categoryCollection = await mongoose.connection.db.collection("food_Category");
        const Catdata = await categoryCollection.find({}).toArray();

        callback(null, data, Catdata);

    } catch (err) {
        console.log("Error connecting to MongoDB: ", err);
        callback(err);
    }
};
