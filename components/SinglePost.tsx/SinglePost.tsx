"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import arrowLeft from "./arrow-left.svg";
import { useParams } from "next/navigation";
import styles from "./SinglePost.module.css";

export type Post = {
  id: number;
  title: string;
};

export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export default async function SinglePost() {
  const params = useParams();
  const postID = params.id;

  const postResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postID}`
  );
  const post = await postResponse.json();

  const userID = post.userId;

  // fetch user based on post.userId
  const userResponse = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userID}`
  );
  const user = await userResponse.json();

  const commentsResponse = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postID}`
  );
  const comments: Comment[] = await commentsResponse.json();

  return (
    <div className="section">
      <Link href="/posts" className="link">
        <Image src={arrowLeft} alt="" height={24} width={24} />
        Back to Posts
      </Link>
      <h1>{post.title}</h1>
      {/* TODO: link to user profile */}
      <h3>by {user.username}</h3>

      <p className={styles.postBody}>{post.body}</p>

      {comments.length > 0 && (
        <>
          <h3>Comments</h3>
          <hr className={styles.line} />
          <ul className={styles.comments}>
            {comments.map((comment) => (
              <li key={comment.id} className={styles.comment}>
                <h4>{comment.name}</h4>
                <p>{comment.body}</p>
                <div className={styles.quote}>
                  {/* TODO: link to user */}
                  <p className={styles.commentAuthor}>{user.username}</p>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
