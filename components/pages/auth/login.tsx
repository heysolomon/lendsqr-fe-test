"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import PasswordInput from "@/components/ui/password-input";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { ZodSchema, z } from "zod";

const LoginSchema: ZodSchema = z.object({
  email: z.string().email("email is required"),
  password: z
    .string({
      required_error: "password is required",
    })
    .regex(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      `Must Contain One Uppercase, One Lowercase,
  One Number and one special case Character`
    )
    .min(8, "password must be atleast 8 characters long"),
});

const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const sendEmail = async (values: z.infer<typeof LoginSchema>) => {
    console.log("submit to an api");
  };

  function onSubmit(values: z.infer<typeof LoginSchema>) {
    sendEmail(values);
  }
  return (
    <div className="p-10 md:w-[80%] drop-shadow-auth">
      {/* lendsqr logo */}
      <Image
        src="/assets/icons/logo.svg"
        width={173.76}
        height={36}
        alt=""
        className="md:hidden mb-10 w-[35%]"
      />
      <div className="mb-10">
        <h1 className="font-avenir-bold font-bold text-secondary text-[40px]">
          Welcome!
        </h1>
        <p className="text-[20px] text-[#545F7D]">Enter details to login.</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Email"
                    className="border-[2px] border-[#545F7D26] rounded-[5px] text-sm p-4 h-auto focus-visible:ring-secondary"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <PasswordInput placeholder="Password" field={field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Link href="/auth/forgot%20password" className="">
            <p className="uppercase mt-6 font-avenir-bold hover:underline font-semibold text-primary text-xs">
              Forgot PASSWORD?
            </p>
          </Link>
          <Button
            type="submit"
            className="w-full bg-primary text-sm py-3 h-auto rounded-lg hover:bg-primary/80 font-avenir-bold font-semibold text-white uppercase"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
