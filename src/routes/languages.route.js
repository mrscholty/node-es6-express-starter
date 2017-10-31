import {Router} from 'express';
import * as Languages from '../business/Languages';

const router = Router();

router.get('/', (req, res) => {
    res.json(Languages.get());
});

router.get('/:id', (req, res) => {
    let id = req.params.id;
    res.json(Languages.getOne(id));
});

router.post('/', (req, res) => {
    let body = req.body;
    res.json(Languages.add(body));
});

router.put('/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;
    res.json(Languages.update(id, body));
});

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    res.json(Languages.remove(id));
});

export default router;