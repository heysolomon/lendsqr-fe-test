import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

const UserInfoCard = ({
  icon,
  className,
  title,
  content,
}: {
  icon: StaticImport;
  className: string;
  title: string;
  content: string;
}) => {
  return (
    <Card className="rounded-[4px] border border-[#213F7D0F] px-[30px] py-5 shadow-[3px_5px_20px_0px_#0000000A]">
      <CardTitle className="flex flex-col gap-[14px]">
        <div
          className={cn(
            "flex h-[40px] w-[40px] items-center justify-center rounded-full",
            className,
          )}
        >
          <Image src={icon} width={20} height={20} alt="" />
        </div>
        <p className="text-sm font-medium uppercase text-[#545F7D]">{title}</p>
      </CardTitle>
      <CardContent className="mt-[14px] p-0">
        <p className="text-2xl font-semibold text-secondary">{content}</p>
      </CardContent>
    </Card>
  );
};

export default UserInfoCard;
