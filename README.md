# IChat
### _RealTime Chat Application_
<ul>
## Overview
  <li>It is a scalable Realtime Chatting Application that provides an interface for multiple user chatting at the same time.</li>
## Technologies used
  <li>FrontEnd - HTML, CSS</li>
  <li>BackEnd - JavaScript, Node.js</li>
  <li>Used Socket.io module for a two-way connection between client and server.</li>
## Website's structure & features
  <li>FrontEnd includes a navigation bar, Chat window and a form submit button for sending the messages.</li>
  <li>HTML has been used for preparing the structure of application.</li>
  <li>CSS has been used for styling the application.</li>
  <li>Added Client sided JavaScript for the purpose of playing with DOM elements.</li>
  <li>First of all stored all the DOM elements in a respectives JS variable.</li>
  <li>Used Audio file (ting.mp3) which gives notification on receiving the messages.</li>
  <li>Everytime a new user tries to join, first of all ask his/her name and let the server and already connected users know.</li>
  <li>If a new user joins, receive the event from the server using eventListner.</li>
  <li>If a user leaves the chat, tell all the other users that this user has left the chat.</li>
  <li>Server Side JavaScript will handle the Socket IO connections.</li>
  <li>If someone sends the message, broadcast it to other people.</li>
</ul>

## Installation in your local computer
- Fork the repository
- Clone the forked repository to your local machine by giving the following command in the terminal :
```
git clone https://github.com/swarnarkadas/ichat_app.git
```
- Change the current directory to iChat's directory by using the following command : 
```
cd ichat_app
```
- Install the dependencies in this folder using the below command :
```
npm install
```
- Now change the current directory to nodeServer directory
```
cd nodeServer
```
- Run ```npm install``` here also and then run ```npm run dev``` in the ```nodeServer``` folder only.
- Now, go back to the main folder in git bash using the ```cd ..``` command.
- Either you can double click on the ```index.js``` file to start the website, or you can also download live-server extension of VS code and run the ```index.js``` file using it.
- A instance of the application will appear in the browser.
- Copy the url from the address bar and open another instance in another tab or in incognito or on another browser.

## Contribution
- Fork the repository.
- Clone the forked repository to your local machine by giving the following command in the terminal :
```
git clone https://github.com/swarnarkadas/ichat_app.git
```
- Change the current directory to iChat's directory by using the following command : 
```
cd ichat_app
```
- Add remote to the original repository by using the following command : 
```
git remote add upstream https://github.com/swarnarkadas/ichat_app.git
```
- **Important step** : Take a pull from upstream repository to your main branch by using the following command :
```
git pull upstream main
```
- Create a new branch (Do not write the "<>" brackets)
```
git checkout -b <new-branch-name>
```
- Now, perform any changes to the codebase to resolve an issue.
- After you have made all the changes, give the following commands :
```
git add . 
```
```
git commit -m"any relevant message"
```
```
git push -u origin <new-branch-name>
```
- Now, head over to GitHub and click on the ```compare and pull request``` button.
- Add appropriate details to the pull request.
- Click on ```Create pull request``` button.
- Now chillax 🥳, and wait for the PR to get reviewed and merged.

<h1>User 1: Swarnarka Das</h1>

![Screenshot (257)](https://user-images.githubusercontent.com/84660268/217365582-f06c975b-0403-40d1-a98c-164e36d47d3c.png)


<h1>User 2: Ray</h1>

![Screenshot (258)](https://user-images.githubusercontent.com/84660268/217365748-81432018-3588-4512-8a28-365e9bae3d33.png)
