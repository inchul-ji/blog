// server.js는 main 파일로 server.js를 실행하면서 app.js까지 불러와서
// 같이 실행될 수 있는 구조로 개발한다.
import app from "./app";

app.listen("7000", () => {
  console.log("h1");
});
