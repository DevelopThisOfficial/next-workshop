"use client";

import React from "react";
import { useParams } from "next/navigation";
import { getSingleUser } from "@/data/users";

function UserProfilePage() {
  const params = useParams();
  const { id } = params;

  const user = getSingleUser(Number(id));

  return <div>UserProfilePage</div>;
}

export default UserProfilePage;
