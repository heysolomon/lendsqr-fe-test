"use client";

import UserInfoCard from "@/components/pages/dashboard/users/users-info-card";
import React, { useEffect, useState } from "react";
import userIcon from "@/public/assets/icons/users-icon-cards.svg";
import activeUserIcon from "@/public/assets/icons/active-users-cards-icon.svg";
import userWithLoanIcon from "@/public/assets/icons/users-with-loans-icon.svg";
import userWithSavingsIcon from "@/public/assets/icons/users-with-savings-icon.svg";
import { DataTable } from "@/components/pages/dashboard/users/user-data-table/data-table";
import { columns } from "@/components/pages/dashboard/users/user-data-table/columns";
import { mockUsers } from "@/components/pages/dashboard/users/user-data-table/mock-users";

const Page = () => {
  const localData = mockUsers;

  return (
    <div className="users-page">
      <h1 className="users-page__title">Users</h1>
      <div className="users-stats-grid">
        {/* users */}
        <UserInfoCard
          title="users"
          content={`${localData?.length}`}
          iconVariant="pink"
          icon={userIcon}
        />

        {/* active users */}
        <UserInfoCard
          title="Active Users"
          content={`${localData?.length}`}
          iconVariant="purple"
          icon={activeUserIcon}
        />

        {/* users with loan */}
        <UserInfoCard
          title="Users with Loans"
          content="2,453"
          iconVariant="orange"
          icon={userWithLoanIcon}
        />

        {/* Users with savings */}
        <UserInfoCard
          title="Users with Savings"
          content="2,453"
          iconVariant="coral"
          icon={userWithSavingsIcon}
        />
      </div>
      {localData && <DataTable data={localData} columns={columns} />}
    </div>
  );
};

export default Page;

