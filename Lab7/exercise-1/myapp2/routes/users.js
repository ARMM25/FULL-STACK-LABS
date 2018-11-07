var express = require('express');
var bodyParser = require('body-parser')

var router = express.Router();

router.use(bodyParser.json()) //extra step to handle Post submission using Body-Parser
router.use(bodyParser.urlencoded({ extended: true}));

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', (req,res) => { //extra step to handle Post submission using Body-Parser
  console.log(`First Name: ${req.body.firstname}`)
  console.log(`Last Name: ${req.body.lastname}`)
  res.send({status: "Received"})
})

module.exports = router;




