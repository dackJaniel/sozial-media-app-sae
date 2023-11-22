"use strikt";

// const axios = require("axios");

// const getPosts = async () => {
//     let posts;
//     try {
//         const response = axios.get("localhost:5000/api/posts");
//         console.log(response);
//     } catch (error) {
//         console.log("Something went wrong: ", error);
//     }
// };

const getPosts = async () => {
    let posts;
    try {
        const response = await fetch("http://localhost:5000/api/posts");
        posts = await response.json();
        console.log(posts);
    } catch (error) {}
};

getPosts();
