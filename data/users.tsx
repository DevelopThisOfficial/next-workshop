export async function getSingleUser(id: number) {
  const userData = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return await userData.json();
}

export async function getAllUsers() {
  const userData = await fetch("https://jsonplaceholder.typicode.com/users");
  return await userData.json();
}
