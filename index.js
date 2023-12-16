const express = require("express")
const app = express()

app.get("/",(req,res)=>res.sendFile(__dirname+"/index.html"))

app.get("/img/:id",(req,res)=>{
    const id = req.params.id
    res.sendFile((`${__dirname}/img/${id}`))
})

app.post("/",(req,res)=>{
    console.log(`id ${req.query.id} timeSpent${req.query.timespent}`);
    res.sendStatus(204);
    
})

app.listen(8082,()=>console.log("listening on 8082"))