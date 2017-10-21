import { Router } from 'express';

const router = Router();

let fruits = ['apple', 'peach', 'banana'];

router.get('/', (req, res) => {
    res.json(fruits);
});


export default router;