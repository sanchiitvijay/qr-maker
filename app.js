import express from "express"
import qr from "qr-image"
import bodyParser from "body-parser";
import fs from "fs"

const app=express();
const port=3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('assests'));

// declaring global variable
var name="qr_img";
var imgLocation;
var url;

// deleting previous file
fs.rm('assests/images/qr_img.png', { recursive:true }, (err) => {
    // console.log("File deleted successfully");
})


app.get('/',(req,res)=>{
    res.render('index.ejs');
})

app.get('/generate',(req,res)=>{
    res.render('generate.ejs',{
        "url" : url,
        "name" : name,
    });
})

app.post('/generate',(req,res)=>{
    url=req.body.url;

    // generating qr code
    var qr_svg = qr.image(url,{
        type: 'png',
        margin: 5,
    });

    imgLocation = `assests/images/${name}.png`;
    qr_svg.pipe(fs.createWriteStream(imgLocation));

    res.redirect('/generate',) 

})

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})