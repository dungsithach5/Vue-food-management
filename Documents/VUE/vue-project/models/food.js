import mongoose from 'mongoose';

const FoodSchema = new mongoose.Schema({
    img: { type: String, required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    price: { type: String, required: true },
    category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'categories', required: true }
},{timestamps: true});

const food = mongoose.model('Foods', FoodSchema);

export default food;
