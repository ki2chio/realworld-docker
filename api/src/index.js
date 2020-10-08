const express = require("express")
const app = express()
const port = process.env.PORT
const host = process.env.HOST

app.get("/", (req, res) =>{
    res.send("main is OK")
})

app.get("/test", (req, res) =>{
    res.send("all OK")
})

app.listen(port, () => {
    console.log(`api is working on port ${port}`)
    console.log(`hostis ${host}`)
})