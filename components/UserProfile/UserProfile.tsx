"use client";

import React from "react";
import { useParams } from "next/navigation";
import { getPostsByUser, getSingleUser } from "@/data/users";
import Link from "next/link";
import Image from "next/image";
import arrowRight from "public/arrow-right.svg";
import { Post } from "@/data/types";

const tempPostsArray = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
];

async function UserProfile() {
  const params = useParams();
  const { id } = params;
  const user = await getSingleUser(Number(id));
  const postByUser: Post[] = await getPostsByUser(Number(id));

  const gridFields = ["username", "email", "phone", "website"];

  return (
    <>
      <div className="section">
        <h2 className="sectionTitle">{user.name}</h2>
        User Profile
        <hr className="line" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            rowGap: "1rem",
            columnGap: "2rem",
            backgroundColor: "rgba(0,0,0,.1)",
            padding: "2rem",
            borderRadius: ".4rem",
            marginBottom: "2rem",
          }}
        >
          {gridFields.map((field) => (
            <div
              key={`${field}-field`}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: ".6rem",
              }}
            >
              <span
                style={{
                  fontWeight: "bold",
                  color: "var(--rainstorm)",
                }}
              >
                {field}
              </span>
              <p
                style={{
                  fontSize: "1.2rem",
                }}
              >
                {field === "username" && "@"}
                {user[field]}
              </p>
            </div>
          ))}
        </div>
        Posts by {user.name}
        <hr className="line" />
        {postByUser.map((post) => (
          <Link
            href="/posts/[id]"
            as={`/posts/${post.id}`}
            className="link"
            key={`post${post.id}`}
          >
            {post.title}
            <Image src={arrowRight} alt="" height={24} width={24} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default UserProfile;
