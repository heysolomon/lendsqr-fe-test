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
        <Button variant="ghost" className="h-auto bg-transparent p-0">
          <SlOptionsVertical />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-[4px] border border-[#545F7D0A] p-5 px-2.5 shadow-[3px_5px_20px_0px_#0000000A]">
        <DropdownMenuItem className="items-center gap-[8px] p-2.5">
          <Image
            src="/assets/icons/eye-icon.svg"
            width={16}
            height={16}
            alt="eye-icon"
          />{" "}
          <p className="text-sm font-medium text-[#545F7D]">View Details</p>
        </DropdownMenuItem>
        <DropdownMenuItem className="items-center gap-[8px] p-2.5">
          <Image
            src="/assets/icons/blacklist-icon.png"
            width={16}
            height={16}
            alt="eye-icon"
          />{" "}
          <p className="text-sm font-medium text-[#545F7D]">Blacklist User</p>
        </DropdownMenuItem>
        <DropdownMenuItem className="items-center gap-[8px] p-2.5">
          <Image
            src="/assets/icons/activate-user-icon.png"
            width={16}
            height={16}
            alt="eye-icon"
          />{" "}
          <p className="text-sm font-medium text-[#545F7D]">Activate User</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
