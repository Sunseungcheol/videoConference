import express from "express";
import { WebSocketServer } from "ws";
import http from "http";

const app = express();

//express로 view 설정
app.set("view engine", "pug");
app.set("views", __dirname + "/views");

//public 경로로 접속시 유저에게 /public을 보여주도록 한다.
app.use("/public", express.static(__dirname + "/public"));
//홈으로 가면 request, response를 받고 home 를 render 해준다.
app.get("/", (req, res) => res.render("home"));
//catchcall url, 유저가 어느 경로로 이동하든 /home 으로 보내준다.
app.get("/*", (req, res) => res.render("/home"));

//express 는 ws 를 지원하지 않음  application 시작 방법 변경해줄것
//app.listen(3000);

const handleListen = () => console.log("Listening on http://localhost:3000");
//http server
const server = http.createServer(app);
//ws server
const wss = new WebSocketServer({ server });

function handleConnection(socket) {
  console.log(socket);
}

//연결 .on 은 beckend에 연결된 사람의 정보 제공
wss.on("connection", handleConnection);

server.listen(3000, handleListen);
