import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ hello: "world" });
});

export { app };
