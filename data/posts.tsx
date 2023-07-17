export async function getSinglePost(id: number) {
  const postData = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  return await postData.json();
}

export async function getAllPosts() {
  const postData = await fetch("https://jsonplaceholder.typicode.com/posts");

  return await postData.json();
}

export async function getPostComments(id: number) {
  const comments = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );

  return await comments.json();
}
