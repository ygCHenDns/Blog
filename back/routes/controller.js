var express = require('express');
var router = express.Router();

router.get('/', require('../components/Dao/createUserDao'));

module.exports = router;