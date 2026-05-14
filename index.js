import express from "express";
import { createServer } from "vite";

const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("dist"));
} else {
  const vite = await createServer({
    server: {
      middlewareMode: true,
    },
    appType: "spa",
  });

  app.use(vite.middlewares);
}

//app.get("/", (request, response) => {
// response.send("Hello World");
//});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
