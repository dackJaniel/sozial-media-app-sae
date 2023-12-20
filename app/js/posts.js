const getPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.org/posts");
    return await response.json();
  } catch (error) {
    console.log("Something went wrong: ", error);
  }
};

const getUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.org/users");
    return await response.json();
  } catch (error) {
    console.log("Something went wrong: ", error);
  }
};

const print = async () => {
  const postDiv = document.getElementById("posts");
  const posts = await getPosts();
  console.log(posts);
  const users = await getUsers();

  posts.forEach((post) => {
    postDiv.innerHTML += `
        <div class="card">
            <img src="${post.image}" alt="${post.title}" />
            <div class="card-body">
            <small class="text-muted">${users[post.userId].firstname} ${
      users[post.userId].lastname
    }</small>
                
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">${post.content}</p>
            </div>
        </div>
        `;
  });
};

print();
