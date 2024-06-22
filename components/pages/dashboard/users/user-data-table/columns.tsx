"use client";

import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import { User } from "./schema";
import { statuses } from "./data";
import { Badge } from "@/components/ui/badge";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "organization",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Organization" />
    ),
    cell: ({ row }) => {
      return <div className="flex">{row.getValue("organization")}</div>;
    },
  },
  {
    accessorKey: "username",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="username" />
    ),
    cell: ({ row }) => {
      return <div className="flex">{row.getValue("username")}</div>;
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="email" />
    ),
    cell: ({ row }) => {
      return <div className="flex">{row.getValue("email")}</div>;
    },
  },
  {
    accessorKey: "phone_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="phone_number" />
    ),
    cell: ({ row }) => {
      return <div className="flex">{row.getValue("phone_number")}</div>;
    },
  },
  {
    accessorKey: "date_joined",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="date_joined" />
    ),
    cell: ({ row }) => {
      return <div className="flex">{row.getValue("date_joined")}</div>;
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status"),
      );

      if (!status) {
        return null;
      }

      return (
        <div className="flex w-[100px] items-center">
          {/* {status.icon && (
            <status.icon className="text-muted-foreground mr-2 h-4 w-4" />
          )} */}

          {
            <Badge
              className="capitalize"
              variant={`${status.value === "inactive" ? "default" : status.value === "pending" ? "pending" : status.value === "active" ? "active" : status.value === "blacklisted" ? "blacklisted" : "default"}`}
            >
              {status.label}
            </Badge>
          }
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
