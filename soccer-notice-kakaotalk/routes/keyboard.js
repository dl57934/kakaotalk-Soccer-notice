var express = require('express');
var router = express.Router();
var keyboard = {"type" : "buttons",
    "buttons" : ["선택 1", "선택 2", "선택 3"]};
router.send(keyboard);
module.exports = router;