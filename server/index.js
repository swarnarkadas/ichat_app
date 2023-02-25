// Node Server which will handel socket.io connections

const { Socket } = require('socket.io')

const io = require('socket.io')(5500)      //port no. 8000

const users = {};
let activeUsers = [];


io.on('connection', socket => {            //'io.on' is a socket.io instance(server) which will listen many Socket connections
    socket.on('new-user-joined', (name,socketId) => {      //& 'socket.on' is related to any particular Socket connections, Here 'socket.on' send a event named -'new-user-joined'
        // console.log("New User", name)
        users[socket.id] = name;             //so,whenever 'socket.on' listen the 'new-user-joined' event, then we will set the 'name' in the 'users'
        socket.broadcast.emit('user-joined',name,socketId)     //So, when any 'new-users-joined' the chat,then 'socket.on' broadcast it to others as 'user-joinde' with his 'name'
        activeUsers.push(name);
        // console.log(activeUsers);
        socket.emit('activeUsers', activeUsers);
    })

    socket.on('send',message =>{               //if 'socket.on' listen the 'send' event means if anyone send' any message
        socket.broadcast.emit('receive', {message : message, name: users[socket.id]})  //if anyone send message, then broadcast others the received message along with the senders name.
    })

    socket.on('encrypted-chat-send', (message,userIdValue) =>{               //if 'socket.on' listen the 'send' event means if anyone send' any message
        socket.to(userIdValue).emit('encrypted-chat-receive', {message : message, name: users[socket.id]})  //if anyone send message, then broadcast others the received message along with the senders name.
    });

    socket.on('disconnect',message =>{               //if 'socket.on' listen the 'disconnect' event means if anyone left from the chat
        socket.broadcast.emit('left',users[socket.id])  //if anyone left the chat or message, then broadcast others that users name who left the chat.
        delete users[socket.id];             //& after that user left the Chat, delete that user from 'users' array
        socket.emit("activeUsers", users);
    });
})