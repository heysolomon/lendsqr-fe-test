"use client";

import React, { useState } from "react";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

import { cn } from "@/lib/utils";

const PasswordInput = ({
  placeholder,
  field,
  className,
}: {
  placeholder?: string;
  field: ControllerRenderProps<FieldValues, string>;
  className?: string;
}) => {
  const [show, setShow] = useState(false);
  return (
    <div className="password-input">
      <input
        type={show ? "text" : "password"}
        placeholder={placeholder}
        className={cn("password-input__field", className)}
        {...field}
      />
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="password-input__toggle"
      >
        {show ? "HIDE" : "SHOW"}
      </button>
    </div>
  );
};

export default PasswordInput;
