//express is web application framework in nodejs
//make routing vrey eassy
//static files vo hote hai jo publicly server pe available ho -- agar kisi file ka link mil jaaye to bina login ke file download kar sakte hai

console.log("shubham is the best")
const express = require ("express")
const path = require("path");
const fs = require("fs")
const { name } = require("pug/lib");
const app = express()
const port = 80;

//express specific kaam hai
app.use('/static',express.static('static'))
app.use(express.urlencoded())


//pug specific kaam
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))


//endpoints
app.get('/',(req,res)=>{
    const con = "this is the best content on the website that u can get";
    const params = {'title': 'pubg is the best game ', content : con}
    res.status(200).render('index.pug',params)
})
app.post('/',(req,res)=>{
    // const con = "this is the best content on the website that u can get";
    names = req.body.names;
    age = req.body.age;
    gender = req.body.gender;
    address = req.body.address;
    more = req.body.more;
    let outputoWrite =    `the name of the client is ${names} ,${age} years old ,${gender} , residing at ${address} . More about him  ${more}`
    fs.writeFileSync('output.txt', outputoWrite)
    
    const params = {'message': 'your form has been submitted sucessfully'}
    res.status(200).render('index.pug',params)
})


//listerning the server
app.listen(port,()=>{
    console.log(`the application started sucessfully on port ${port}`)
})