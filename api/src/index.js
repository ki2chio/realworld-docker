const express = require("express")
const app = express()
const {port, host} = require('./configuration')

const {connectDB} = require('./helper/helper_db.js')



function startServer(){
    app.listen(port, () => {
        console.log(`api is working on port ${port}`)
        console.log(`hostis ${host}`)
    })
}

app.get("/test", (req, res) =>{
    res.send("all OK /n Server is working correctly on Dev mode")
})


connectDB()
    .on('error', console.error.bind(console, "connection error:"))
    .on('disconnected', connectDB)
    .once('open', startServer)


