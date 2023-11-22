import express from "express";

const server = express();
const PORT = 5000;

console.log("Server running");

server.use("/api/posts", (req, res) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => res.status(200).json(data))
        .catch(console.log("Something went wrong"));
});
server.listen(PORT);
