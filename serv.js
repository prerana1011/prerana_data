var express=require("express");
const mysql=require("mysql");
var app=express();

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'manager',
    database:'devops'
});
var data=[];
connection.connect();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/",function(response,request){
connection.query("select * from product",function(err,result){
if(err==null){
    data=result;
    // response.contentType("application/json");
    response.send(JSON.stringify(data));
}
else{
    response.contentType("application/json");
    response.send(JSON.stringify(err));
}
});
});

app.listen(4000,function(){
    console.log("port is started...");
})