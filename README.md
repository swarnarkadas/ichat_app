<h1>RealTime Chat Application - IChat</h1>
<hr>
<ul>
  <li>It is an scalable Realtime Chatting Application that provides an interface for multiple user chatting at the same time.</li>
  <li>FrontEnd Technologies- HTML, CSS</li>
  <li>BackEnd Technologies- JavaScript, Node.js</li>
  <li>Used Socket.io module for a two-way connection between client and server.</li>
  <li>FrontEnd includes a navigation bar, Chat window and a form submit button for sending the messages.</li>
  <li>HTML has been used for preparing the structure of application.</li>
  <li>CSS has been used for styling the application.</li>
  <li>Added Client sided JavaScript for the purpose of playing with DOM elements.</li>
  <li>First of all stored all the DOM elements in a respectives JS variable.</li>
  <li>Used Audio file (ting.mp3) which gives notification on receiving the messages.</li>
  <li>Everytime a new user tries to join, first of all ask his/her name and let the server know.</li>
  <li>If a new user joins, receive the event from the server using eventListner.</li>
  <li>Receive message from server using receive function.</li>
  <li>If a user leaves the chat, tell all the other users that this user has left the chat.</li>
  <li>Server Side JavaScript will handle the Socket IO connections.</li>
  <li>If a new user joins, let the other users connected with server know.</li>
  <li>If someone sends the message, broadcast it to other people.</li>
  <li>If someone leaves the chat, let others know.</li>
</ul>




<h1>Process to run the app</h1>
<hr>
<ol>
  <li>First Fork the repo</li>
  <li> first open terminal and write - git clone https://github.com/swarnarkadas/ichat_app.git </li>
  <li> then - npm install</li>
  <li>write - <b>cd nodeServer</b></li>
  <li>run <b>npm run dev</b></li>
  <li>Install the extension 'live server' for Vs Code.</li>
  <li>After the extension gets installed navigate to index.html and open it to edit.</li>
  <li>Right click anywhere in the file index.html and from the menu that appears select Open with Live server</li>
  <li>A instance of the application will appear in the browser.</li>
  <li>Copy the url from the address bar and open another instance in another tab or in incognito or on another browser.</li>
</ol>

<h1>User 1: Swarnarka Das</h1>

![Screenshot (257)](https://user-images.githubusercontent.com/84660268/217365582-f06c975b-0403-40d1-a98c-164e36d47d3c.png)


<h1>User 2: Ray</h1>

![Screenshot (258)](https://user-images.githubusercontent.com/84660268/217365748-81432018-3588-4512-8a28-365e9bae3d33.png)
