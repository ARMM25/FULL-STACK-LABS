var express = require('express');
var bodyParser = require('body-parser') //includes the body parser! 

var router = express.Router(); //setting up the router to use the body-parser. 

router.use(bodyParser.json()) //extra step to handle Post submission using Body-Parser
router.use(bodyParser.urlencoded({ extended: true}));

/* GET users listing. */
router.get('/', function(req, res, next) { //this is for a GET request on POST app 
  res.send('respond with a resource'); //once the GET is selected then the response will be this. 
});

router.post('/', (req,res) => { //extra step to handle Post submission using Body-Parser
  console.log(`First Name: ${req.body.firstname}`) //1.Go to POSTMAN APP and choose POST type
  console.log(`Last Name: ${req.body.lastname}`)//2. Enter the firstname and lastname on post app
  res.send({status: "Received"})//3. once submitted the request "RECIEVED" will be displayed
})

module.exports = router;




