"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { handleUserSave } from "../config/userConfig";
import BannerViews from "@/components/views/BannerViews";
import NewAiViews from "@/components/views/NewAiViews";

const Dashboard = () => {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      handleUserSave(user);
    }
  }, [user]);

  return (
    <div className="flex flex-col px-4 py-4">
      <BannerViews/>
      <NewAiViews/>
    </div>
  );
};

export default Dashboard;
