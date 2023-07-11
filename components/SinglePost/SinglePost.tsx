"use client";

import { getSinglePost } from "@/data/posts";
import { getSingleUser } from "@/data/users";
import { useParams } from "next/navigation";
import React from "react";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function SinglePost() {
  const params = useParams();
  const { id } = params;

  const post = await getSinglePost(Number(id));

  const user = await getSingleUser(post.userId);

  return (
    <div className="section">
      {/* todo: back to posts */}
      <h2 className="sectionTitle">{post.title}</h2>
      <p>{post.body}</p>
      {/* todo: link to user page */}
      <h3>by {user.username}</h3>
    </div>
    // todo: add comments
  );
}
