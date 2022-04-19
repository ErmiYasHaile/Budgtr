const express = require("express")
const app = express()

require("dotenv").config()
const PORT = process.env.PORT || 4000

app.get("/",(req,res) => {
    res.send("You are home!")
})






app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})
