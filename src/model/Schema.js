const { default: mongoose } = require("mongoose");

const schema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
})

const DB_Schema = mongoose.models.stock_management || mongoose.model("stock_management", schema)

export default DB_Schema;