"use client";

import Link from "next/link";
import styles from "./Posts.module.css";
import { getAllPosts } from "@/data/posts";
import { getAllUsers } from "@/data/users";
import Image from "next/image";
import arrowRight from "public/arrow-right.svg";
import { useRouter } from "next/navigation";
import { Post, User } from "@/data/types";

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
            <Link href="/posts/[id]" as={`/posts/${post.id}`} className="link">
              {post.title}
              <Image src={arrowRight} alt="" height={24} width={24} />
            </Link>
            <span
              className="author"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: ".6rem",
                }}
              >
                <span>by</span>
                <Link
                  href="/user/[id]"
                  as={`/user/${post.userId}`}
                  className="link hover btn-link"
                >
                  @{getUsernameFromCachedList(post.userId) || "Unknown user"}
                </Link>
              </div>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
