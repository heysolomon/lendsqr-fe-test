"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CircleUser, Menu, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "@/components/pages/dashboard/sidebar";
import MobileSidebar from "@/components/pages/dashboard/mobile-sidebar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <div className="fixed grid h-screen w-full overflow-hidden bg-[#FBFBFB] font-work-sans md:grid-cols-[220px_1fr] lg:grid-cols-[283px_1fr]">
        <Sidebar />
        <div className="flex h-screen flex-col overflow-hidden">
          <header className="flex h-14 items-center gap-4 bg-white px-4 shadow-[3px_0px_20px_0px_#0000000A] lg:px-8 lg:py-8">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col p-0">
                <MobileSidebar />
              </SheetContent>
            </Sheet>
            <div className="w-full">
              <form>
                <div className="flex h-10 w-max items-center justify-between rounded-lg border-y border-l md:w-[400px]">
                  <Input
                    type="search"
                    placeholder="Search for anything"
                    className="h-full w-full appearance-none border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 md:w-2/3 lg:w-full"
                  />
                  <div className="flex h-10 items-center justify-center rounded-r-lg bg-[#39CDCC] px-[21px]">
                    <Search className="h-4 w-4 text-white" />
                  </div>
                </div>
              </form>
            </div>
            <Link href="" className="text-[16px] text-secondary underline">
              Docs
            </Link>
            <Avatar className="h-[48px] w-[48px] bg-[#213F7D]/20">
              <AvatarImage src="/assets/images/avatar-image.svg" alt="user" />
              {/* <AvatarFallback>image</AvatarFallback> */}
            </Avatar>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="h-auto p-0 font-medium text-secondary hover:bg-transparent hover:text-secondary"
                  variant={`ghost`}
                >
                  Adedeji
                  <IoMdArrowDropdown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </header>
          <main className="flex h-full flex-1 flex-col gap-4 overflow-y-auto p-4 lg:p-7">
            {children}
          </main>
        </div>
      </div>
    </QueryClientProvider>
  );
}
