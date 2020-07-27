const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let itemSchema = new Schema(
  {
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    description: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
  },
  {
    collection: 'items',
  }
);

let cartSchema = new Schema(
  {
    prod_id: {
      type: String,
    },
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    description: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
  },
  {
    collection: 'cart',
  }
);

const items = mongoose.model('Items', itemSchema);
const cart = mongoose.model('Cart', cartSchema);

module.exports = {
  items,
  cart,
};
