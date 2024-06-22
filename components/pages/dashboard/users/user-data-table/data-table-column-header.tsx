import { Column } from "@tanstack/react-table";

import { cn } from "@/lib/utils";
import { IoFilterSharp } from "react-icons/io5";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="flex h-auto items-center gap-2.5 bg-transparent p-0 text-xs font-semibold uppercase text-[#545F7D] shadow-none hover:bg-transparent">
            {title}
            <IoFilterSharp size={16} />
          </Button>
        </PopoverTrigger>
        <PopoverContent>Filter stuff</PopoverContent>
      </Popover>
    </div>
  );
}
