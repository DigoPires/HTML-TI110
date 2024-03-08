const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/task');

router.use('/', TaskController);

module.exports = router;