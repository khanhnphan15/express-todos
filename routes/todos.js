var express = require('express');
var router = express.Router();
var todosCtrl = require('../controllers/todos');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

//all actual parts start with "/todos"

//GET/todos
router.get('/', todosCtrl.index);
module.exports = router;
