import UserInfoCard from "@/components/pages/dashboard/users/users-info-card";
import React from "react";
import userIcon from "@/public/assets/icons/users-icon-cards.svg";
import activeUserIcon from "@/public/assets/icons/active-users-cards-icon.svg";
import userWithLoanIcon from "@/public/assets/icons/users-with-loans-icon.svg";
import userWithSavingsIcon from "@/public/assets/icons/users-with-savings-icon.svg";
import { UsersTable } from "@/components/pages/dashboard/users/users-table";

const Page = () => {
  return (
    <div className="h-full">
      <h1 className="mb-10 text-2xl font-medium text-secondary">Users</h1>
      <div className="grid grid-cols-4 gap-[26px]">
        {/* users */}
        <UserInfoCard
          title="users"
          content="2,453"
          className="bg-[#DF18FF]/10"
          icon={userIcon}
        />

        {/* active users */}
        <UserInfoCard
          title="Active Users"
          content="2,453"
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
      <UsersTable />
    </div>
  );
};

export default Page;
