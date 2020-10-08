const express = require("express")
const app = express()

app.get("/test", (req, res) =>{
    res.send("all OK")
})

app.listen(3000, () => {
    console.log("api is working")
})