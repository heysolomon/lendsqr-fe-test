"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MdOutlineStarOutline } from "react-icons/md";

const Layout = ({
  params,
  children,
}: Readonly<{
  params: {
    user_profile: string;
  };
  children: React.ReactNode;
}>) => {
  const path = usePathname();
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  interface NItems {
    item: string;
    link: string;
  }

  const navItems: NItems[] = [
    {
      item: "General Details",
      link: `/dashboard/users/${params.user_profile}`,
    },
    {
      item: "Documents",
      link: `/dashboard/users/${params.user_profile}/documents`,
    },
    {
      item: "Bank Details",
      link: `/dashboard/users/${params.user_profile}/bank%20details`,
    },
    {
      item: "Loans",
      link: `/dashboard/users/${params.user_profile}/loans`,
    },
    {
      item: "Savings",
      link: `/dashboard/users/${params.user_profile}/savings`,
    },
    {
      item: "App and System",
      link: `/dashboard/users/${params.user_profile}/app%20and%20system`,
    },
  ];

  return (
    <div className="flex w-full flex-col">
      <div>
        <Button
          variant={`ghost`}
          onClick={handleBack}
          className="flex items-center gap-[13px] p-0 text-[#545F7D] hover:bg-transparent hover:underline"
        >
          <Image
            src="/assets/icons/back-icon.svg"
            alt=""
            width={30}
            height={30}
          />

          <p>Back to Users</p>
        </Button>
      </div>
      <div className="mb-10 items-center justify-between space-y-5 md:flex">
        <h1 className="text-2xl font-medium text-secondary">User Details</h1>

        <div className="space-x-5">
          <Button className="h-auto rounded-lg border border-[#E4033B] bg-transparent px-4 py-3 text-sm font-semibold uppercase text-[#E4033B] shadow-none hover:bg-transparent">
            Blacklist User
          </Button>
          <Button className="h-auto rounded-lg border border-[#39CDCC] bg-transparent px-4 py-3 text-sm font-semibold uppercase text-[#39CDCC] shadow-none hover:bg-transparent">
            Activate User
          </Button>
        </div>
      </div>

      <div className="space-y-5 border border-[#213F7D0F] bg-white p-5 pb-0 shadow-[3px_5px_20px_0px_#0000000A]">
        <div className="items-center gap-5 md:flex">
          <Avatar className="h-[100px] w-[100px] bg-[#213F7D]/20 p-5">
            <AvatarImage
              src="/assets/icons/user-details-icon-user.svg"
              alt="user"
            />
            {/* <AvatarFallback>image</AvatarFallback> */}
          </Avatar>

          <div className="grid grid-cols-2 items-center gap-x-4 md:flex md:gap-x-0">
            <div className="md:pr-[30px]">
              <h3 className="text-[22px] font-medium text-secondary">
                Grace Effiom
              </h3>
              <p className="mt-2 text-[#545F7D]">LSQFf587g90</p>
            </div>
            <Separator
              className="hidden h-20 bg-[#545F7D] md:block"
              orientation="vertical"
            />
            <div className="py-[19px] md:px-[30px]">
              <p className="text-sm font-medium text-[#545F7D]">User’s Tier</p>
              <div className="mt-2.5 flex items-center gap-[4.63px]">
                <MdOutlineStarOutline size={16} className="text-[#E9B200]" />
                <MdOutlineStarOutline size={16} className="text-[#E9B200]" />
                <MdOutlineStarOutline size={16} className="text-[#E9B200]" />
              </div>
            </div>
            <Separator
              className="hidden h-20 bg-[#545F7D] md:block"
              orientation="vertical"
            />
            <div className="py-[19px] md:px-[30px]">
              <h3 className="text-[22px] font-medium text-secondary">
                ₦200,000.00
              </h3>
              <p className="mt-2.5 text-xs text-secondary">
                9912345678/Providus Bank
              </p>
            </div>
          </div>
        </div>
        <nav className="grid list-none grid-cols-2 gap-y-3 rounded-[15px] bg-white md:grid-cols-6 md:gap-y-0">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className={`group flex justify-center rounded-t-[25px]`}
            >
              <li
                className={`px-2 pb-2.5 text-[16px] font-medium text-secondary ${path === item.link && "border-b-[2px] border-b-[#39CDCC] text-[#39CDCC]"}`}
              >
                {item.item}
              </li>
            </Link>
          ))}
        </nav>
      </div>
      <>{children}</>
    </div>
  );
};

export default Layout;
