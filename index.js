/*The first thing is setting up our server, and below is how to set up our server.*/

const express = require("express")

const port = 1700

const app  = sever()
//On line nine(9), we implemented the "Get function"
app.use(express.json()).get("/", (req, res)=>{
    res.status(200).json({
        message: "Set07 API is ready for consumption"
    })
})

app.listen(port, ()=>{
    console.log("Server is listening fine....")
})