
// const socket = io('http://localhost:5500');

var socket = io('http://localhost:5500', { transports: ['websocket', 'polling', 'flashsocket'] });   
//we made connection with server side Socket.io to Client
// Have to add this part to avoid -'No 'Access-Control-Allow-Origin' header is present' error

                                        
//Get DOM elements in respective Js variables                                          
const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp')
const messageContainer = document.querySelector('.container')

// Audio that will play on recieving messages
var audio = new Audio('../assets/sounds/notification.mp3')


//Function which will append(add) event info to the container
const append =(message,position,time)=>{
    const messageElement = document.createElement('div')
    messageElement.classList.add('message')
    messageElement.classList.add(position)

    const messageContent = document.createElement('div');
    messageContent.classList.add('message-content');
    messageContent.innerText = message;
  
    const messageTime = document.createElement('div');
    messageTime.classList.add('message-time');
    messageTime.innerText = new Date().toLocaleTimeString();
  
    if (position === 'right') {
        messageElement.appendChild(messageContent);
        messageElement.appendChild(messageTime);
    } else {
      messageElement.appendChild(messageContent);
      messageElement.appendChild(messageTime);
    }

    messageContainer.append(messageElement)
    if(position =='left'){        // Means if I send message, then audio will not play. 
        audio.play()
    }
}


//Ask new user for his/her name and let the server know
let name="Enter your name here";
 name = prompt("Enter Your Name To Join");
if(name==null || name=="" )
{
    alert("Please enter valid name.");
    window.location.reload();
}else{
socket.emit('new-user-joined',name)      // so here 'emit()' means we send message or trigger the 'new-user-joined' event along with the user name' to 'socket.io' to listen it
}


//If a new user joins,receive his name from the server(socket.on of 'index.js')
socket.on('user-joined',name =>{
    append(`${name} joined the chat`,'right')
})


//IF Server 'sends' a message, receive it
socket.on('receive',data =>{
    const currentTime = new Date().toLocaleTimeString();
    append(`${data.name}: ${data.message}`, 'left', currentTime);
})

//If a user leaves the chat, append the info to the container
socket.on('left',name =>{
    append(`${name} left the chat`, 'right')
})

//If the form gets submitted, send server the message
form.addEventListener('submit', (e)=>{
    e.preventDefault();     //so the page will not reload
    const message = messageInput.value;
    const currentTime = new Date().toLocaleTimeString();
    append(`You: ${message}`, 'right',currentTime);
    // append(`You: ${message}`,'right')    //If you send any message
    socket.emit('send',message);     //notify other that you send a message
    messageInput.value =''    //after the message sent, make the menssage form' blank 
})