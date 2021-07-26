var express = require('express');
var router = express.Router();

router.get("/",function(req,res,next)
{
    res.write("hii world");
});

router.get("/users",function(req,res,next)
{
   res.write("hello worlds");
   // res.writeHead(200,{"Content-Type" : "text/plain"});
});

module.exports = router;