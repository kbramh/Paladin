import express from "express";

const app = express();

app.use("/public", express.static("public"));

//app.get("/", (request, response) => {
// response.send("Hello World");
//});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000/public");
});
