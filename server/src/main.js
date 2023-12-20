"use strikt";

import express from "express";
import cors from "cors";

const server = express();
const PORT = 5000;

console.log("Server running");
server.use(
    cors({
        origin: ["http://localhost:5500", "http://127.0.0.1:5500"],
        optionsSuccessStatus: 200,
    })
);
server.use("/api/posts", (req, res) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => res.status(200).json(data))
        .catch(console.log("Something went wrong"));
});
server.listen(PORT);
