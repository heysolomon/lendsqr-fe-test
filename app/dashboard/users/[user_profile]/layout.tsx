"use client";

import { use } from "react";
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
}: {
  params: Promise<{
    user_profile: string;
  }>;
  children: React.ReactNode;
}) => {
  const resolvedParams = use(params);
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
      link: `/dashboard/users/${resolvedParams.user_profile}`,
    },
    {
      item: "Documents",
      link: `/dashboard/users/${resolvedParams.user_profile}/documents`,
    },
    {
      item: "Bank Details",
      link: `/dashboard/users/${resolvedParams.user_profile}/bank%20details`,
    },
    {
      item: "Loans",
      link: `/dashboard/users/${resolvedParams.user_profile}/loans`,
    },
    {
      item: "Savings",
      link: `/dashboard/users/${resolvedParams.user_profile}/savings`,
    },
    {
      item: "App and System",
      link: `/dashboard/users/${resolvedParams.user_profile}/app%20and%20system`,
    },
  ];

  return (
    <div className="user-profile-layout">
      <div>
        <Button
          variant={`ghost`}
          onClick={handleBack}
          className="user-profile-layout__back-btn"
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
      <div className="user-profile-layout__header">
        <h1 className="user-profile-layout__title">User Details</h1>

        <div className="user-profile-layout__actions">
          <Button className="user-profile-layout__action-btn user-profile-layout__action-btn--blacklist">
            Blacklist User
          </Button>
          <Button className="user-profile-layout__action-btn user-profile-layout__action-btn--activate">
            Activate User
          </Button>
        </div>
      </div>

      <div className="user-header-card">
        <div className="user-header-card__info">
          <Avatar className="user-header-card__avatar">
            <AvatarImage
              src="/assets/icons/user-details-icon-user.svg"
              alt="user"
            />
            {/* <AvatarFallback>image</AvatarFallback> */}
          </Avatar>

          <div className="user-header-card__details">
            <div className="user-header-card__name-section">
              <h3 className="user-header-card__name">
                Grace Effiom
              </h3>
              <p className="user-header-card__id">LSQFf587g90</p>
            </div>
            <Separator
              className="user-header-card__divider"
              orientation="vertical"
            />
            <div className="user-header-card__tier-section">
              <p className="user-header-card__tier-label">User’s Tier</p>
              <div className="user-header-card__stars">
                <MdOutlineStarOutline size={16} />
                <MdOutlineStarOutline size={16} />
                <MdOutlineStarOutline size={16} />
              </div>
            </div>
            <Separator
              className="user-header-card__divider"
              orientation="vertical"
            />
            <div className="user-header-card__bank-section">
              <h3 className="user-header-card__amount">
                ₦200,000.00
              </h3>
              <p className="user-header-card__bank-details">
                9912345678/Providus Bank
              </p>
            </div>
          </div>
        </div>
        <nav className="user-nav">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className={`group user-nav__link`}
            >
              <li
                className={`user-nav__item ${path === item.link && "user-nav__item--active"}`}
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
