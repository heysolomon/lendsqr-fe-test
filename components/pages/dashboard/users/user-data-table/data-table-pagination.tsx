import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  return (
    <div className="mt-5 flex items-center justify-between px-2">
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex w-full items-center space-x-2.5">
          <p className="text-sm text-[#545F7D]">Showing</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="w-min border-none bg-[#213F7D1A] text-sm text-secondary">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-sm text-[#545F7D]">out of 100</p>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          className="h-auto rounded-[4px] bg-[#213F7D1A] p-[5px]"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <span className="sr-only">Go to previous page</span>
          <ChevronLeftIcon className="h-[14px] w-[14px]" />
        </Button>
        <div
          className={`flex items-center justify-center text-sm text-[#545F7D] ${table.getState().pagination.pageIndex + 1 == table.getState().pagination.pageIndex + 1 && "font-medium"}`}
        >
          {table.getState().pagination.pageIndex + 1}
        </div>
        <div
          className={`flex items-center justify-center text-sm text-[#545F7D] ${table.getState().pagination.pageIndex + 2 == table.getState().pagination.pageIndex + 1 && "font-medium"}`}
        >
          {table.getState().pagination.pageIndex + 2}
        </div>
        <span
          className={`flex items-center justify-center text-sm text-[#545F7D] ${table.getState().pagination.pageIndex && "font-medium"}`}
        >
          ...
        </span>
        <div
          className={`flex items-center justify-center text-sm text-[#545F7D] ${table.getState().pagination.pageIndex && "font-medium"}`}
        >
          {table.getPageCount() - 1}
        </div>
        <div
          className={`flex items-center justify-center text-sm text-[#545F7D] ${table.getState().pagination.pageIndex && "font-medium"}`}
        >
          {table.getPageCount()}
        </div>
        <Button
          variant="outline"
          className="h-auto rounded-[4px] bg-[#213F7D1A] p-[5px]"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <span className="sr-only">Go to next page</span>
          <ChevronRightIcon className="h-[14px] w-[14px]" />
        </Button>
      </div>
    </div>
  );
}
