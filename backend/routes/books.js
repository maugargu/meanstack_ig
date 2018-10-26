const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/books/test', bookController.test);
router.get('/books', bookController.getAll);
router.get('/books/getById', bookController.getById);
router.post('/book', bookController.insert);
router.put('/book', bookController.update);
router.delete('/book', bookController.remove);

module.exports = router;