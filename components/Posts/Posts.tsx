import { Post } from "@/app/posts/[id]/page";
import Link from "next/link";
import arrowRight from "./arrow-right.svg";
import Image from "next/image";
// import styles from "./Posts.module.css";

export default async function Posts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await response.json();

  return (
    <div className="section">
      <h1>List of Posts</h1>
      <div
        style={{
          // border: "2px dashed black",
          display: "flex",
          flexDirection: "column",
          gap: ".5rem",
          // marginTop: "1.7rem",
          // alignItems: "center",
        }}
      >
        {posts.map((post) => (
          <div key={post.id}>
            {/* Doing the link syntax like this got rid of all the 404 errors except 1 */}
            <Link
              href="/posts/id"
              as={`/posts/${post.id}`}
              style={{
                // border: "1px solid red",
                display: "flex",
                alignItems: "center",
              }}
              className="link"
            >
              {post.title}
              <Image src={arrowRight} alt="" height={24} width={24} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
