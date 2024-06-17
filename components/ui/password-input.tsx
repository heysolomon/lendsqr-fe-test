import React, { useState } from "react";
import { Input } from "./input";
import { Label } from "./label";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import { Button } from "./button";

const PasswordInput = ({ placeholder, field }: TPasswordInputProps) => {
  const [passwordType, setPasswordType] = useState<boolean>(true);
  return (
    <div className="border-[2px] border-[#545F7D26] focus-visible:outline-none focus-within:ring-1 focus-within:ring-secondary h-min rounded-[5px] text-sm  focus-visible:ring-offset-secondary">
      <div className="flex items-center gap-5 pr-4">
        <Input
          type={passwordType ? "password" : "text"}
          className="rounded-0 m-0 p-4 h-auto border-none text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
          placeholder={placeholder}
          id={field.name}
          {...field}
        />
        <Button
          type="button"
          className="w-[15%] bg-transparent shadow-none p-0 text-[#505050] hover:cursor-pointer hover:bg-transparent"
          onClick={() => setPasswordType(!passwordType)}
        >
          {passwordType ? (
            <p className="uppercase font-avenir-bold font-semibold text-primary">
              SHOW
            </p>
          ) : (
            <p className="uppercase font-avenir-bold font-semibold text-primary">
              Hide
            </p>
          )}
        </Button>
      </div>
    </div>
  );
};

export default PasswordInput;
