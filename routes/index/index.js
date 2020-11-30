const router = require('express').Router();
const { indexpage } = require('../../controller/index/index');

// Render index page 
router.get('/', indexpage);

module.exports = router;