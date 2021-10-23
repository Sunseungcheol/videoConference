const host = window.location.host;
const socket = new WebSocket(`ws://${host}`);

//서버와 연결됐을 때
socket.addEventListener("open", () => {
  console.log("connet to Server");
});

//서버에서 메세지를 받을때
socket.addEventListener("message", (message) => {
  console.log("New message ", message.data);
});

//서버와의 연결이 끊어졌을 때
socket.addEventListener("close", () => {
  console.log("disconnect from server");
});

setTimeout(() => {
  socket.send("hello from the browser!");
}, 10000);
