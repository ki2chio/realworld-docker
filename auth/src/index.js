const express = require("express")
const app = express()
const {port, host} = require('./configuration')

const {connectDB} = require('./helper/helper_db.js')



function startServer(){
    app.listen(port, () => {
        console.log(`auth is working on port ${port}`)
        console.log(`hostis ${host}`)
    })
}

app.get("/auth", (req, res) =>{
    res.send("all OK Login here!")
})


connectDB()
    .on('error', console.error.bind(console, "connection error:"))
    .on('disconnected', connectDB)
    .once('open', startServer)

app.get("api/user", (req,res)=> {
    res.json({
        id: "1999",
        firstName: "Illiya",
        lastName: "Chernyak"
    })
})

