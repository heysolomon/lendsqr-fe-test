"use client";

import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { SlOptionsVertical } from "react-icons/sl";
import Image from "next/image";
import { userSchema } from "./schema";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const user = userSchema.parse(row.original);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="data-table-row-actions__trigger">
          <SlOptionsVertical />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="data-table-row-actions__menu-content">
        <DropdownMenuItem className="data-table-row-actions__menu-item">
          <Image
            src="/assets/icons/eye-icon.svg"
            width={16}
            height={16}
            alt="eye-icon"
          />{" "}
          <p className="data-table-row-actions__menu-text">View Details</p>
        </DropdownMenuItem>
        <DropdownMenuItem className="items-center gap-[8px] p-2.5">
          <Image
            src="/assets/icons/blacklist-icon.png"
            width={16}
            height={16}
            alt="eye-icon"
          />{" "}
          <p className="data-table-row-actions__menu-text">Blacklist User</p>
        </DropdownMenuItem>
        <DropdownMenuItem className="items-center gap-[8px] p-2.5">
          <Image
            src="/assets/icons/activate-user-icon.png"
            width={16}
            height={16}
            alt="eye-icon"
          />{" "}
          <p className="data-table-row-actions__menu-text">Activate User</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
