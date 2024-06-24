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
  title: string;
}

const FilterSchema: ZodSchema = z.object({
  organization: z.string(),
  username: z.string(),
  email: z.string().email({
    message: "please enter a valid email address",
  }),
  date: z.string().date("date not valid"),
  phone_number: z.string(),
  status: z.string(),
});

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  const form = useForm<z.infer<typeof FilterSchema>>({
    resolver: zodResolver(FilterSchema),
    defaultValues: {
      organization: "",
      username: "",
      email: "",
      date: "",
      phone_number: "",
      status: "",
    },
  });

  const filter = async (values: z.infer<typeof FilterSchema>) => {
    console.log("filter table");
  };

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
          <Button className="flex h-auto items-center gap-2.5 bg-transparent p-0 text-xs font-semibold uppercase text-[#545F7D] shadow-none hover:bg-transparent">
            {title}
            <IoFilterSharp size={16} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="rounded-[4px] border border-[#545F7D24] p-5 shadow-[3px_5px_20px_0px_#0000000A]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              {/* organization */}
              <FormField
                control={form.control}
                name="organization"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mb-[6px] text-[14px] font-[500] text-[#545F7D]">
                      Organization
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="h-10 rounded-lg border-[#545F7D26] text-secondary/70 shadow-none">
                          <SelectValue placeholder="Select" className="" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="zolarac">Zolarac</SelectItem>
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
                    <FormLabel className="mb-[6px] text-[14px] font-[500] text-[#545F7D]">
                      Username
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="User"
                        className="h-10 rounded-[5px] border-[1px] border-[#545F7D26] p-4 text-sm text-secondary/70 shadow-none focus-visible:ring-secondary"
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
                    <FormLabel className="mb-[6px] text-[14px] font-[500] text-[#545F7D]">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Email"
                        className="h-10 rounded-[5px] border-[1px] border-[#545F7D26] p-4 text-sm text-secondary/70 shadow-none focus-visible:ring-secondary"
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
                    <FormLabel className="mb-[6px] text-[14px] font-[500] text-[#545F7D]">
                      Date
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left text-sm font-normal text-secondary/70",
                              !field.value && "text-muted-foreground",
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span className="text-secondary/70">Date</span>
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
                    <FormLabel className="mb-[6px] text-[14px] font-[500] text-[#545F7D]">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Pnone Number"
                        className="h-10 rounded-[5px] border-[1px] border-[#545F7D26] p-4 text-sm text-secondary/70 shadow-none focus-visible:ring-secondary"
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
                    <FormLabel className="mb-[6px] text-[14px] font-[500] text-[#545F7D]">
                      Status
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="h-10 rounded-lg border-[#545F7D26] text-secondary/70 shadow-none">
                          <SelectValue placeholder="Select" className="" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Iactive</SelectItem>
                        <SelectItem value="blacklisted">Blacklisted</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 gap-[14px]">
                <Button
                  type="reset"
                  variant={`ghost`}
                  className="h-auto w-full rounded-lg border border-[#545F7D] bg-transparent py-3 font-avenir-bold text-sm font-semibold capitalize text-[#545F7D] hover:bg-transparent"
                >
                  Reset
                </Button>
                <Button
                  type="submit"
                  className="h-auto w-full rounded-lg bg-primary py-3 font-avenir-bold text-sm font-semibold uppercase text-white hover:bg-primary/80"
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
