import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
res.send('Successfully Connected Express Application!');
});

export default router;