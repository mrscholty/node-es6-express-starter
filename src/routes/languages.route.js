import {Router} from 'express';

const router = Router();

let languages = [
    {id: '1', name: 'JavaScript'},
    {id: '2', name: 'Java'},
    {id: '3', name: 'C#'},
    {id: '4', name: 'Pascal'},
    {id: '5', name: 'C'}
];

router.get('/', (req, res) => {
    res.json(languages);
});

router.get('/:id', (req, res) => {
    let id = req.params.id;
    res.json(languages.find(item => item.id === id) || {});
});

router.post('/', (req, res) => {
    let body = req.body;
    languages = [...languages, body];
    res.json(body);
});

router.put('/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;
    languages = languages.map(item => item.id === id ?
        {...item, name: body.name} : item
    );
    res.json(languages.find(item => item.id === id) || {});
});

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    let itemIndex = languages.findIndex(item => item.id === id);
    let item = languages[itemIndex] || {};
    languages = [
        ...languages.slice(0, itemIndex),
        ...languages.slice(itemIndex + 1)
    ];
    res.json(item);
});

export default router;