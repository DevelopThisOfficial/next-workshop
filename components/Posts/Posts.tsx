import Link from "next/link";
import styles from "./Posts.module.css";
import { getAllUsers } from "@/data/users";
import { getAllPosts } from "@/data/posts";
import Image from "next/image";
import arrowRight from "./arrow-right.svg";
import { Post } from "../SinglePost/SinglePost";

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

  // todo: paginate

  return (
    <div className="section">
      <h1>List of Posts</h1>
      <div className={styles.posts}>
        {posts.map((post) => (
          <div key={post.id}>
            {/* Doing the link syntax like this got rid of all the 404 errors except 1 */}
            <Link href="/posts/id" as={`/posts/${post.id}`} className="link">
              {post.title}
              <Image src={arrowRight} alt="" height={24} width={24} />
            </Link>
            <p>by {getUser(post.userId)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
