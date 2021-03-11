import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    name: String,
    image: String,
    description: String,
    brand: String,
    category: String,
    price: {
        type: Number,
        default: 0
    },
    countInStock: {
        type: Number,
        default: 0
    },
    rating: {
        type: Number,
        default: 0
    },
    numReviews: {
        type: Number,
        default: 0
    }
});

const productList = mongoose.model('productList', productSchema);
export default productList;