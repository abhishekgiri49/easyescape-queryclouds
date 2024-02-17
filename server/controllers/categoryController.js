const Category = require('../models/Category');

// Create a new category
const create = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newCategory = new Category({ title, description });
    const savedCategory = await newCategory.save();
    res.status(201).json({status:201,  message: 'success',data:savedCategory  });
  } catch (error) {
    console.error(error);
    res.status(500).json({status:500, data:[], message: 'Internal Server Error' });
  }
};

// Get all categories
const getAll = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json({status:201, data:categories,message:"success"});
  } catch (error) {
    console.error(error);
    res.status(500).json({status:500, data:[], message: 'Internal Server Error' });
  }
};

// Get a specific category by ID
const getItemById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).json({ status:404, data:[],message: 'Category not found' });
    res.json({status:200, data:category, message: 'Category details' });
  } catch (error) {
    console.error(error);
    res.status(500).json({status:500, data:[], message: 'Internal Server Error' });
  }
};

// Update a Item by ID
const updateItemById = async (req, res) => {
  try {
    const { title, description } = req.body;
    const updatedCategory = await Category.findByIdAndUpdate(req.params.id, { title, description }, { new: true });
    if (!updatedCategory) return res.status(404).json({ status:404, data:[],message: 'Category not found' });
    res.json({status:200, data:updatedCategory, message: 'Category updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({status:500, data:[], message: 'Internal Server Error' });
  }
};

// Delete a Item by ID
const deleteItemById = async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    if (!deletedCategory) return res.status(404).json({status:404, data:[], message: 'Category not found' });
    res.json({status:200, data:[], message: 'Category Deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({status:500, data:[], message: 'Internal Server Error' });
  }
};

module.exports = {
  create,
  getAll,
  getItemById,
  updateItemById,
  deleteItemById,
};
