import express from "express";
import ViteExpress from "vite-express";

const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

// Configuration for production build

// ViteExpress.config({ mode: "development" });

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
