"use client";
// THIS IS IN USE
import { getPostComments, getSinglePost } from "@/data/posts";
import { getSingleUser } from "@/data/users";
import { useParams } from "next/navigation";
import React from "react";
import styles from "./SinglePost.module.css";
import Link from "next/link";
import Image from "next/image";
import arrowLeft from "public/arrow-left.svg";
import { Comment } from "@/data/types";

export default async function SinglePost() {
  const params = useParams();
  const { id } = params;

  const post = await getSinglePost(Number(id));
  const author = await getSingleUser(post.userId);
  const comments: Comment[] = await getPostComments(Number(id));

  return (
    <div className="section">
      <Link
        href="/posts"
        className="link hover btn-link"
        style={{
          marginBottom: "2rem",
        }}
      >
        <Image src={arrowLeft} alt="" height={24} width={24} />
        Back to Posts
      </Link>
      <h2 className="sectionTitle">{post.title}</h2>
      <p className={styles.postBody}>{post.body}</p>
      {/* todo: link to user page */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: ".6rem",
          marginBottom: "2rem",
        }}
      >
        <span>by</span>
        <Link
          href="/user/[id]"
          as={`/user/${post.userId}`}
          className="link hover btn-link"
        >
          @{author.username}
        </Link>
      </div>

      {comments.length > 0 && (
        <>
          <h3
            style={{
              color: "var(--azure-tide)",
            }}
          >
            Comments
          </h3>
          <hr className={styles.line} />
          <ul className={styles.comments}>
            {comments.map((comment) => (
              <li key={comment.id} className={styles.comment}>
                <h4>{comment.name}</h4>
                <p>{comment.body}</p>
                <div className={styles.quote}>
                  <p className={styles.commentAuthor}>{comment.email}</p>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
