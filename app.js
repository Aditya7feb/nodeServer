const express = require("express");
const app = express();
const mongoose = require("mongoose");
const mySchema = require("./studentSchema");

const url = "mongodb+srv://aditya:fRkIMxbU5eQBpfii@sl-lab.3g1gn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(url,{ useNewUrlParser: true }).then(()=>console.log("Connection to Database Sucessful"));
app.use(express.json());
app.post("/add-new-post",async (req,res)=>{
    const myTitle = req.body.name;
    const myAuthor = req.body.reg;
    const myContent = req.body.marks;

    try{
        const newStud = new mySchema(
            {
                name : myTitle,
                reg : myAuthor,
                marks : myContent,
            }
        )
        const savedStud = await newStud.save();
        res.json({
            "message" : "Data is saved",
            "data" : savedStud,

        })
    }
    catch(e){
        res.json(err);
    }
})

app.use("/",(req,res)=> {
    res.json(
        {
            "message":"Express Server Started => Localhost/3000"
        }
    )
});

app.listen(3000,()=>console.log('Express Server Started at Localhost Port 3000'));

