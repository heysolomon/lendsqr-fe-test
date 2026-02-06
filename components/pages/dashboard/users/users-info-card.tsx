import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

const UserInfoCard = ({
  icon,
  iconVariant = "pink",
  title,
  content,
}: {
  icon: StaticImport;
  iconVariant?: "pink" | "purple" | "orange" | "coral";
  title: string;
  content: string;
}) => {
  return (
    <Card className="user-info-card">
      <CardTitle className="user-info-card__header">
        <div
          className={cn(
            "user-info-card__icon-wrapper",
            `user-info-card__icon-wrapper--${iconVariant}`,
          )}
        >
          <Image src={icon} width={20} height={20} alt="" />
        </div>
        <p className="user-info-card__label">{title}</p>
      </CardTitle>
      <CardContent className="user-info-card__content">
        <p className="user-info-card__value">{content}</p>
      </CardContent>
    </Card>
  );
};

export default UserInfoCard;

