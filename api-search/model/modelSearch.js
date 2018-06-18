'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SearchSchema = new Schema({
	name: {
		type: String,
		required: 'Product name'
	},
	price: {
		type: Number,
		required: 'Product price'
	}
});

module.exports = mongoose.model('Product', SearchSchema)