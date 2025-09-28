const express = require('express');
const socketIo = require('socket.io');

const app = express();

const http = require('http');
const path = require('path');
const server = http.createServer(app);

const io = socketIo(server);

app.set("view wngine", ejs);

app.set("views", path.join(__dirname, "views"));

let data = ["aish" , "amit" , "manu"];

app.get("/", (req,res)=>{
    res.render("index.ejs", {greet:data})
})

const user = {}

io.on("connection", (socket)=>{
    console.log("User connected", socket.id);

    socket.on("chat", (msg)=>{
        console.log("Message receivedfrom client", msg);
        socket.emit("chat","Here i am")
    })

    socket.on("egister", (data)=>{
        console.log("id of client", data);
    })
});



server.listen(3000, () =>{
    console.log('Server is running on port 3000');
})