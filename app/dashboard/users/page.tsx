"use client";

import UserInfoCard from "@/components/pages/dashboard/users/users-info-card";
import React, { useEffect, useState } from "react";
import userIcon from "@/public/assets/icons/users-icon-cards.svg";
import activeUserIcon from "@/public/assets/icons/active-users-cards-icon.svg";
import userWithLoanIcon from "@/public/assets/icons/users-with-loans-icon.svg";
import userWithSavingsIcon from "@/public/assets/icons/users-with-savings-icon.svg";
import { DataTable } from "@/components/pages/dashboard/users/user-data-table/data-table";
import { columns } from "@/components/pages/dashboard/users/user-data-table/columns";
import { useQuery } from "@tanstack/react-query";

const Page = () => {
  const [localData, setLocalData] = useState([]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch(
        "https://run.mocky.io/v3/0819ac61-8e70-4cd3-9d8c-bdda7f4bf8ee",
      );
      if (!response.ok) {
        throw new Error("failed getting records");
      }
      return response.json();
    },
  });

  useEffect(() => {
    if (data) {
      localStorage.setItem("users", JSON.stringify(data));
      setLocalData(data);
    } else {
      const storedData = localStorage.getItem("users");
      if (storedData) {
        setLocalData(JSON.parse(storedData));
      }
    }
  }, [data]);

  return (
    <div className="">
      <h1 className="mb-10 text-2xl font-medium text-secondary">Users</h1>
      <div className="grid grid-cols-2 gap-[26px] md:grid-cols-4">
        {/* users */}
        <UserInfoCard
          title="users"
          content={`${localData?.length}`}
          className="bg-[#DF18FF]/10"
          icon={userIcon}
        />

        {/* active users */}
        <UserInfoCard
          title="Active Users"
          content={`${localData?.length}`}
          className="bg-[#5718FF]/10"
          icon={activeUserIcon}
        />

        {/* users with loan */}
        <UserInfoCard
          title="Users with Loans"
          content="2,453"
          className="bg-[#F55F44]/10"
          icon={userWithLoanIcon}
        />

        {/* Users with savings */}
        <UserInfoCard
          title="Users with Savings"
          content="2,453"
          className="bg-[#FF3366]/10"
          icon={userWithSavingsIcon}
        />
      </div>
      {localData && <DataTable data={localData} columns={columns} />}
    </div>
  );
};

export default Page;
