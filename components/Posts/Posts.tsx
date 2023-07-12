import Link from "next/link";
import styles from "./Posts.module.css";
import { getAllUsers } from "@/data/users";
import { getAllPosts } from "@/data/posts";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type User = {
  id: number;
  username: string;
};

async function Posts() {
  const posts: Post[] = await getAllPosts();

  const users: User[] = await getAllUsers();

  function getUser(id: number) {
    const user = users.find((user: any) => user.id === id);

    return user ? user.username : "Unknown user";
  }

  return (
    <div className="sectionWrapper">
      <h1 className="sectionTitle">All Posts</h1>
      <div className={styles.posts}>
        {/* wrapper of all posts */}

        {/* map the posts */}
        {posts.map((post: Post) => {
          return (
            <div key={post.id} className={styles.post}>
              <h3>
                <Link href={`/posts/${post.id}`}>{post.title}</Link>
              </h3>
              <p>by {getUser(post.userId)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
