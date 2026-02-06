"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Menu, Search } from "lucide-react";

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
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
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
      <div className="dashboard-layout">
        <Sidebar />
        <div className="dashboard-layout__content">
          <header className="dashboard-layout__header">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="dashboard-layout__mobile-menu-btn"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="mobile-sidebar-sheet">
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                <MobileSidebar />
              </SheetContent>
            </Sheet>
            <div className="dashboard-layout__search-container">
              <form>
                <div className="dashboard-layout__search-box">
                  <Input
                    type="search"
                    placeholder="Search for anything"
                    className="dashboard-layout__search-input"
                  />
                  <div className="dashboard-layout__search-btn">
                    <Search className="dashboard-layout__search-icon" />
                  </div>
                </div>
              </form>
            </div>
            <Link
              href=""
              className="dashboard-layout__docs-link"
            >
              Docs
            </Link>
            <Image
              src={`/assets/icons/bell-icon.png`}
              width={26}
              height={26}
              alt=""
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="dashboard-layout__user-btn"
                  variant="ghost"
                >
                  <Avatar className="dashboard-layout__avatar">
                    <AvatarImage src="/assets/images/avatar-image.svg" alt="user" />
                  </Avatar>
                  <span className="dashboard-layout__user-name">Adedeji</span>
                  <IoMdArrowDropdown className="dashboard-layout__user-icon" />
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
          <main className="dashboard-layout__main">
            {children}
          </main>
        </div>
      </div>
    </QueryClientProvider>
  );
}
