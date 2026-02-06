import { Column } from "@tanstack/react-table";

import { cn } from "@/lib/utils";
import { IoFilterSharp } from "react-icons/io5";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { ZodSchema, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  table: Table<TData>;
  title: string;
}

const FilterSchema: ZodSchema = z.object({
  organization: z.string().optional(),
  username: z.string().optional(),
  email: z.string().email().optional().or(z.literal('')),
  date: z.date().optional(),
  phone_number: z.string().optional(),
  status: z.string().optional(),
});

export function DataTableColumnHeader<TData, TValue>({
  column,
  table,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  const form = useForm<z.infer<typeof FilterSchema>>({
    resolver: zodResolver(FilterSchema),
    defaultValues: {
      organization: "",
      username: "",
      email: "",
      date: undefined,
      phone_number: "",
      status: "",
    },
  });

  const filter = (values: z.infer<typeof FilterSchema>) => {
    // Filter by organization
    if (values.organization) {
      table.getColumn("organization")?.setFilterValue(values.organization);
    } else {
      table.getColumn("organization")?.setFilterValue(undefined); // Clear if empty
    }

    // Filter by username
    if (values.username) {
      table.getColumn("username")?.setFilterValue(values.username);
    } else {
      table.getColumn("username")?.setFilterValue(undefined);
    }

    // Filter by email
    if (values.email) {
      table.getColumn("email")?.setFilterValue(values.email);
    } else {
      table.getColumn("email")?.setFilterValue(undefined);
    }

    // Filter by date
    if (values.date) {
      // Assuming the table data is a string or date object. If string, we might need formatting.
      // For strict equality or smart filtering, just passing the date object might work if the filterFn handles it.
      // Or format it to string if the data is a string.
      // Let's assume standard date filtering or exact match for now.
      // Ideally we would filter for a range or "on this day".
      // Let's try passing the raw value first, or maybe formatted string if the column is string.
      // The column accessor is "date_joined".
      table.getColumn("date_joined")?.setFilterValue(values.date);
    } else {
      table.getColumn("date_joined")?.setFilterValue(undefined);
    }

    // Filter by phone number
    if (values.phone_number) {
      table.getColumn("phone_number")?.setFilterValue(values.phone_number);
    } else {
      table.getColumn("phone_number")?.setFilterValue(undefined);
    }

    // Filter by status
    if (values.status) {
      table.getColumn("status")?.setFilterValue(values.status);
    } else {
      table.getColumn("status")?.setFilterValue(undefined);
    }
  };

  const reset = () => {
    form.reset();
    table.getColumn("organization")?.setFilterValue(undefined);
    table.getColumn("username")?.setFilterValue(undefined);
    table.getColumn("email")?.setFilterValue(undefined);
    table.getColumn("date_joined")?.setFilterValue(undefined);
    table.getColumn("phone_number")?.setFilterValue(undefined);
    table.getColumn("status")?.setFilterValue(undefined);
  }

  function onSubmit(values: z.infer<typeof FilterSchema>) {
    filter(values);
  }

  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="data-table-column-header__btn">
            {title}
            <IoFilterSharp size={16} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="data-table-column-header__popover-content">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="filter-form">
              {/* organization */}
              <FormField
                control={form.control}
                name="organization"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="filter-form__label">
                      Organization
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="filter-form__select-trigger">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="lentz">Lentz</SelectItem>
                        <SelectItem value="irorun">Irorun</SelectItem>
                        <SelectItem value="lendstar">Lendstar</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* username */}
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="filter-form__label">
                      Username
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="User"
                        className="filter-form__input"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="filter-form__label">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Email"
                        className="filter-form__input"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* date */}
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="filter-form__label">
                      Date
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "filter-form__date-trigger",
                              !field.value && "text-muted-foreground",
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* phone number */}
              <FormField
                control={form.control}
                name="phone_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="filter-form__label">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Phone Number"
                        className="filter-form__input"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* status */}
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="filter-form__label">
                      Status
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="filter-form__select-trigger">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="blacklisted">Blacklisted</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="filter-form__actions">
                <Button
                  type="reset"
                  variant={`ghost`}
                  className="filter-form__reset-btn"
                  onClick={reset}
                >
                  Reset
                </Button>
                <Button
                  type="submit"
                  className="filter-form__submit-btn"
                >
                  Filter
                </Button>
              </div>
            </form>
          </Form>
        </PopoverContent>
      </Popover>
    </div>
  );
}
