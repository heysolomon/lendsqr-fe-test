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
    <div className="data-table-pagination">
      <div className="data-table-pagination__left">
        <div className="data-table-pagination__showing-container">
          <p className="data-table-pagination__text">Showing</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger
              className="data-table-pagination__select-trigger"
              aria-label="Select page size"
            >
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
          <p className="data-table-pagination__text">out of {table.getFilteredRowModel().rows.length}</p>
        </div>
      </div>

      <div className="data-table-pagination__right">
        <Button
          variant="outline"
          className="data-table-pagination__nav-btn"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <span className="sr-only">Go to previous page</span>
          <ChevronLeftIcon className="h-[14px] w-[14px]" />
        </Button>
        <div
          className={`data-table-pagination__page-number ${table.getState().pagination.pageIndex + 1 == table.getState().pagination.pageIndex + 1 && "data-table-pagination__page-number--active"}`}
        >
          {table.getState().pagination.pageIndex + 1}
        </div>
        <div
          className={`data-table-pagination__page-number ${table.getState().pagination.pageIndex + 2 == table.getState().pagination.pageIndex + 1 && "data-table-pagination__page-number--active"}`}
        >
          {table.getState().pagination.pageIndex + 2}
        </div>
        <span
          className={`data-table-pagination__page-number ${table.getState().pagination.pageIndex && "data-table-pagination__page-number--active"}`}
        >
          ...
        </span>
        <div
          className={`data-table-pagination__page-number ${table.getState().pagination.pageIndex && "data-table-pagination__page-number--active"}`}
        >
          {table.getPageCount() - 1}
        </div>
        <div
          className={`data-table-pagination__page-number ${table.getState().pagination.pageIndex && "data-table-pagination__page-number--active"}`}
        >
          {table.getPageCount()}
        </div>
        <Button
          variant="outline"
          className="data-table-pagination__nav-btn"
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
