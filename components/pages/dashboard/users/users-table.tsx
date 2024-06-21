import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { IoFilterSharp } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";

const users = [
  {
    organisation: "Lendsqr",
    userName: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneNumber: "08078903721",
    dateJoined: "May 15, 2020 10:00 AM",
    status: "inactive",
  },
  {
    organisation: "Lendsqr",
    userName: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneNumber: "08078903721",
    dateJoined: "May 15, 2020 10:00 AM",
    status: "blacklisted",
  },
];

export function UsersTable() {
  return (
    <div className="mt-10 rounded-[4px] border border-[#213F7D0F] bg-white p-[30px] pb-8 shadow-[3px_5px_20px_0px_#0000000A]">
      <Table className="">
        <TableHeader>
          <TableRow className="border-none">
            <TableHead className="text-xs font-semibold uppercase text-[#545F7D]">
              <span className="flex items-center gap-2.5">
                organization
                <IoFilterSharp size={16} />
              </span>
            </TableHead>
            <TableHead className="text-xs font-semibold uppercase text-[#545F7D]">
              <span className="flex items-center gap-2.5">
                Username
                <IoFilterSharp size={16} />
              </span>
            </TableHead>
            <TableHead className="text-xs font-semibold uppercase text-[#545F7D]">
              <span className="flex items-center gap-2.5">
                Email
                <IoFilterSharp size={16} />
              </span>
            </TableHead>
            <TableHead className="text-xs font-semibold uppercase text-[#545F7D]">
              <span className="flex items-center gap-2.5">
                Phone number
                <IoFilterSharp size={16} />
              </span>
            </TableHead>
            <TableHead className="text-xs font-semibold uppercase text-[#545F7D]">
              <span className="flex items-center gap-2.5">
                Date joined
                <IoFilterSharp size={16} />
              </span>
            </TableHead>
            <TableHead className="text-xs font-semibold uppercase text-[#545F7D]">
              <span className="flex items-center gap-2.5">
                Status
                <IoFilterSharp size={16} />
              </span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user, index) => (
            <TableRow className="border-b-secondary" key={index}>
              <TableCell className="font-sm pb-[23px] pt-[21px] text-xs">
                {user.organisation}
              </TableCell>
              <TableCell className="font-sm pb-[23px] pt-[21px] text-xs">
                {user.userName}
              </TableCell>
              <TableCell className="font-sm pb-[23px] pt-[21px] text-xs">
                {user.email}
              </TableCell>
              <TableCell className="font-sm pb-[23px] pt-[21px] text-xs">
                {user.phoneNumber}
              </TableCell>
              <TableCell className="font-sm pb-[23px] pt-[21px] text-xs">
                {user.dateJoined}
              </TableCell>
              <TableCell className="font-sm pb-[23px] pt-[21px] text-xs">
                {
                  <Badge
                    className="capitalize"
                    variant={`${user.status === "inactive" ? "default" : user.status === "pending" ? "pending" : user.status === "active" ? "active" : user.status === "blacklisted" ? "blacklisted" : "default"}`}
                  >
                    {user.status}
                  </Badge>
                }
              </TableCell>
              <TableCell className="font-sm pb-[23px] pt-[21px] text-xs">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <SlOptionsVertical />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="rounded-[4px] border border-[#545F7D0A] p-5 px-2.5 shadow-[3px_5px_20px_0px_#0000000A]">
                    <DropdownMenuItem className="items-center gap-[8px] p-2.5">
                      <Image
                        src="/assets/icons/eye-icon.svg"
                        width={16}
                        height={16}
                        alt="eye-icon"
                      />{" "}
                      <p className="text-sm font-medium text-[#545F7D]">
                        View Details
                      </p>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="items-center gap-[8px] p-2.5">
                      <Image
                        src="/assets/icons/blacklist-icon.png"
                        width={16}
                        height={16}
                        alt="eye-icon"
                      />{" "}
                      <p className="text-sm font-medium text-[#545F7D]">
                        Blacklist User
                      </p>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="items-center gap-[8px] p-2.5">
                      <Image
                        src="/assets/icons/activate-user-icon.png"
                        width={16}
                        height={16}
                        alt="eye-icon"
                      />{" "}
                      <p className="text-sm font-medium text-[#545F7D]">
                        Activate User
                      </p>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
