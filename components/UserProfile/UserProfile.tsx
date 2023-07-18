"use client";

import React from "react";
import { useParams } from "next/navigation";
import { getPostsByUser, getSingleUser } from "@/data/users";
import Link from "next/link";
import Image from "next/image";
import arrowRight from "public/arrow-right.svg";
import { Post } from "@/data/types";
import styles from "./UserProfile.module.css";

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
        <div className={styles.userInfo}>
          {gridFields.map((field) => (
            <div key={`${field}-field`} className={styles.gridItem}>
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
