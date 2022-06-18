const express = require('express');
const router = express.Router();
const {
  getRestaurant,
  registerRestaurant,
  loginRestaurant,
} = require('../controller/restaurantController');

const {
  setInventory,
  getInventory,
  updateInventory,
} = require('../controller/inventoryController');

// Get All Restaurant
router.get('/', getRestaurant);

// Get Inventory by Restaurant ID
router.get('/inventory/:id', getInventory);

// Register new Restaurant
router.post('/new/restaurant', registerRestaurant);

// Authenticate Restaurant
router.post('/login', loginRestaurant);

// Update Restaurant Inventory
router.put('/update/:id', updateInventory);

// Create Inventory Item
router.post('/new/inventory', setInventory);

module.exports = router;
