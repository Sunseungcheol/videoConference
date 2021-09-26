import express from "express";

const app = express();

//express로 view 설정
app.set("view engine", "pug");
app.set("views", __dirname + "/views");

//public 경로로 접속시 /public를 보여주도록 한다.
app.use("/public", express.static(__dirname + "/public"));
//홈으로 가면 request, response를 받고 home 를 render 해준다.
app.get("/", (req, res) => res.render("home"));

app.listen(3000);

console.log("hello");
