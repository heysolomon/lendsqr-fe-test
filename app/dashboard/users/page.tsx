"use client";

import UserInfoCard from "@/components/pages/dashboard/users/users-info-card";
import React, { useEffect, useState } from "react";
import userIcon from "@/public/assets/icons/users-icon-cards.svg";
import activeUserIcon from "@/public/assets/icons/active-users-cards-icon.svg";
import userWithLoanIcon from "@/public/assets/icons/users-with-loans-icon.svg";
import userWithSavingsIcon from "@/public/assets/icons/users-with-savings-icon.svg";
import { DataTable } from "@/components/pages/dashboard/users/user-data-table/data-table";
import { columns } from "@/components/pages/dashboard/users/user-data-table/columns";
import { getUsers, User } from "@/lib/api";
import { UsersPageSkeleton } from "@/components/pages/dashboard/users/users-page-skeleton";

const Page = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <UsersPageSkeleton />;
  }

  return (
    <div className="users-page">
      <h1 className="users-page__title">Users</h1>
      <div className="users-stats-grid">
        {/* users */}
        <UserInfoCard
          title="users"
          content={`${users.length}`}
          iconVariant="pink"
          icon={userIcon}
        />

        {/* active users */}
        <UserInfoCard
          title="Active Users"
          content={`${users.length}`} // In a real app, filtering logic would go here
          iconVariant="purple"
          icon={activeUserIcon}
        />

        {/* users with loan */}
        <UserInfoCard
          title="Users with Loans"
          content="12,453"
          iconVariant="orange"
          icon={userWithLoanIcon}
        />

        {/* Users with savings */}
        <UserInfoCard
          title="Users with Savings"
          content="102,453"
          iconVariant="coral"
          icon={userWithSavingsIcon}
        />
      </div>
      {users && <DataTable data={users} columns={columns} />}
    </div>
  );
};

export default Page;

