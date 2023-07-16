"use client";

import Link from "next/link";
import styles from "./Posts.module.css";
import { getAllUsers } from "@/data/users";
import { getAllPosts } from "@/data/posts";
import Image from "next/image";
import arrowRight from "./arrow-right.svg";
import { Post } from "../SinglePost/SinglePost";
import { useRouter } from "next/navigation";

type User = {
  id: number;
  username: string;
};

async function Posts() {
  const router = useRouter();
  const posts: Post[] = await getAllPosts();
  const users: User[] = await getAllUsers();

  function getUsernameFromCachedList(id: number) {
    const user = users.find((user: any) => user.id === id);
    return user ? user.username : "Unknown user";
  }

  // todo: paginate

  return (
    <div className="section">
      <h1>List of Posts</h1>
      <div className={styles.posts}>
        {posts.map((post) => (
          <div
            key={post.id}
            className={`hover ${styles.post}`}
            onClick={(e) => {
              router.push(`/posts/${post.id}`);
            }}
          >
            <Link href="/posts/id" as={`/posts/${post.id}`} className="link">
              {post.title}
              <Image src={arrowRight} alt="" height={24} width={24} />
            </Link>
            <span
              className="author"
              onClick={(e) => {
                e.stopPropagation();
                console.log("clicked on author");
              }}
            >
              by {getUsernameFromCachedList(post.userId) || "Unknown user"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
