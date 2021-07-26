// var express = require('express');
// var router = express.Router();

// router.get("/user",function(req,res,next)
// {
//     res.write("responded");
// });

// module.exports = router;
var express = require('express');
var router = express.Router();

router.get("/users",function(req,res,next)
{
   res.write("hello worlds");
   // res.writeHead(200,{"Content-Type" : "text/plain"});
});

module.exports = router;