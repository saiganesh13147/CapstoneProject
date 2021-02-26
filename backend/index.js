import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import routerRoutes from './routes/route.js';

const app = express();

app.use('/api', routerRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


const CONNECTION_URL = `mongodb+srv://ShravaniMale:MongoDB@123@cluster0.8m1cv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
// `mongodb+srv://ganeshsai:ganeshsai@cluster0.guu9q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);