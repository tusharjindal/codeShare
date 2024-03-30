const host = process.env.HOST


const makeMessage = (roomid, roomname, user) => {
  const message = `<h2>Hello from CodeSahre,</h2>
  <p style="font-size:15px;">Hi Coder,</p>
  
<p style="font-size:15px;">You have been invited to collaborate to the room.</p> 
<h3>Room: <i style="color:blue;">${roomname}</i><h3>
<h3>Room ID: <i style="color:blue;">${roomid}</i><h3>
<h3>Created By - <i style="color:blue;">${user}</i></h3>
<p style="font-size:15px;">Click the below link to start contributing.
You can also copy the roomid and use option of Join Room. Before make sure you sign up on platform using this E-mail.</p>

<h2> Link : <a href="${host}/edit/${roomid}">Click to Access Room</a></h2>

<h3>Happy Coding👨‍💻💻!!<br>
<br>
<br>
Regards,<br>CodeSahre Coderooms</h3>

<br><br><br>

<p> Report any issues about the platform here : <a href="https://github.com/yuvhrajVirSinghVerma">https://github.com/yuvhrajVirSinghVerma</a> </p>
`;
  return message;
};

export default makeMessage;
