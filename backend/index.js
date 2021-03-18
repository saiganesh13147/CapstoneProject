import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import productRoutes from './routes/products.js';
import userRoutes from './routes/users.js';
import authRoutes from './routes/auth.js';

const app = express();



app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

const CONNECTION_URL = `mongodb+srv://ShravaniMale:MongoDB@123@capstonecluster.5ntcn.mongodb.net/CapstoneDB?retryWrites=true&w=majority`;
//;
// `mongodb+srv://ShravaniMale:MongoDB@123@cluster0.8m1cv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => app.listen(PORT, () => console.log(`Server running on PORT: `,PORT)))
            .catch((error) => console.log('Error: ', error.message));

mongoose.set('useFindAndModify', false);