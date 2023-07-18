import UserProfile from "@/components/UserProfile/UserProfile";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "User Profile",
};

async function UserProfilePage() {
  return <UserProfile />;
}

export default UserProfilePage;
