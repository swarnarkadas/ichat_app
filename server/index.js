// Requiring Modules for Database 
const Connection = require('./database/db')
const bp = require('body-parser')
const User = require('./database/Models/schema')

console.log("server started")
// Node Server which will handel socket.io connections
const express = require('express')
const PORT = 3000;
const { Socket } = require('socket.io')

const App = express()


App.use(bp.json());
App.use(bp.urlencoded({extended: false}))

const io = require('socket.io')(5500)      //port no. 8000

const users = {};
let activeUsers = [];

//loading static asssets
App.use(express.static("../src"))

App.listen(PORT, () => {
    console.log("App listening at port " + PORT)
    try{
        Connection();
    }
    catch{
        console.log("Couldnot Connect to Database")
    }
})

//Socket.io conections

io.on('connection', socket => {            //'io.on' is a socket.io instance(server) which will listen many Socket connections
    socket.on('new-user-joined', (name,socketId) => {      //& 'socket.on' is related to any particular Socket connections, Here 'socket.on' send a event named -'new-user-joined'
        // console.log("New User", name)
        users[socket.id] = name;             //so,whenever 'socket.on' listen the 'new-user-joined' event, then we will set the 'name' in the 'users'
        socket.broadcast.emit('user-joined',name,socketId)     //So, when any 'new-users-joined' the chat,then 'socket.on' broadcast it to others as 'user-joinde' with his 'name'
        activeUsers.push(name);
        socket.emit("toCurrUserScreen", activeUsers);
        socket.broadcast.emit('activeUsers', activeUsers);
    })

    socket.on('send',message =>{               //if 'socket.on' listen the 'send' event means if anyone send' any message
        socket.broadcast.emit('receive', {message : message, name: users[socket.id]})  //if anyone send message, then broadcast others the received message along with the senders name.
    })

    socket.on('typing',function(data){
        socket.broadcast.emit('typing',data);
    });

    socket.on('encrypted-chat-send', (message,userIdValue) =>{               //if 'socket.on' listen the 'send' event means if anyone send' any message
        socket.to(userIdValue).emit('encrypted-chat-receive', {message : message, name: users[socket.id]})  //if anyone send message, then broadcast others the received message along with the senders name.
    });

    socket.on('join-room', (roomId) => {
        socket.join(roomId);
        console.log("joined room", roomId);
    });

    socket.on('room-chat-send', (message,roomIdValue) =>{               //if 'socket.on' listen the 'send' event means if anyone send' any message
        socket.to(roomIdValue).emit('room-chat-receive', {message : message, name: users[socket.id], roomIdValue : roomIdValue})  //if anyone send message, then broadcast others the received message along with the senders name.
    });

    socket.on('disconnect',message =>{               //if 'socket.on' listen the 'disconnect' event means if anyone left from the chat
        socket.broadcast.emit('left',users[socket.id])  //if anyone left the chat or message, then broadcast others that users name who left the chat.
        // socket.emit("activeUsers", users);
        activeUsers = activeUsers.filter((user) => user !== users[socket.id]);
        // console.log(activeUsers);
        delete users[socket.id];             //& after that user left the Chat, delete that user from 'users' array
        socket.broadcast.emit("activeUsers", activeUsers);
    });
})

// Users route
App.post('/savetodb', (req, res) => {
    const name = req.body.Name
    const email = req.body.Email
    const phone = req.body.Phone
    const password = req.body.Password

    console.log()
    const newUser = new User({
        name: name,
        email: email,
        phone: phone,
        password: password
    })
    try {
        newUser.save()
        res.status(201).send("Voila! Data saved Successfully !!!");
    }
    catch {
        console.log("Couldnot save data to Database")
    }
})