const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middlewares/auth');

const { validateCategory, validate } = require('../middlewares/validator');
const {
  create,
  getAll,
  getItemById,
  updateItemById,
  deleteItemById,
} = require('../controllers/categoryController');

// Create a new item (requires token validation)
router.post('/', verifyToken, validateCategory, validate, create);

// Get all items (requires token validation)
router.get('/', getAll);

// Get a specific item by ID  (requires token validation)
router.get('/:id', getItemById);

// Update a item by ID (requires token validation)
router.put('/:id', verifyToken, validateCategory, validate, updateItemById);

// Delete a item by ID (requires token validation)
router.delete('/:id', verifyToken, deleteItemById);

module.exports = router;
