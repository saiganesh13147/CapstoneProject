import productList from '../models/productList.js';
import ProductList from '../models/productList.js';
export const getProducts  = async (req, res) => {
    try {
        const productList = await ProductList.find();
        console.log(productList);
        res.status(200).json(productList);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

    export const createProduct = async (req, res) => {
        const product = req.body;
        const newProduct = new productList(product);
        try {
            await newProduct.save();
            res.status(201).json(newProduct);
        } catch (error) {
            res.status(409).json({ message: error.message });
        }
}