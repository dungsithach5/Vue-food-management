import foodModel from '../models/food.js';
import Food from '../models/food.js';
const foodController = {

    getfoodById: async (req, res) => {
        try {
            const users = await foodModel.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).send('Error fetching users');
        }
    },


    createfood: async (req, res) => {
        const food = new Food({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: req.file?.path 
        });
        try {
            const savedFood = await food.save();
            res.status(201).json(savedFood);
        } catch (error) {
            res.status(500).send('Error creating user');
        }
    },


    updatefood: async (req, res) => {
        const id = req.params.id;
        const body = req.body;
        try {
            const updatedUser = await foodModel.findByIdAndUpdate(id, body, { new: true });
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(500).send('Error updating user');
        }
    },


    deletefood: async (req, res) => {
        const id = req.params.id;
        try {
            const deletedUser = await foodModel.findByIdAndDelete(id);
            res.status(200).json(deletedUser);
        } catch (error) {
            res.status(500).send('Error deleting user');
        }
    }
};

export default foodController;
