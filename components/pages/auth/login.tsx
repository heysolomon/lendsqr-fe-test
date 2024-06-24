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
import { useRouter } from "next/navigation";
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
  One Number and one special case Character`,
    )
    .min(8, "password must be atleast 8 characters long"),
});

const LoginForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const login = async (values: z.infer<typeof LoginSchema>) => {
    router.push("/dashboard/users");
  };

  function onSubmit(values: z.infer<typeof LoginSchema>) {
    login(values);
  }
  return (
    <div className="drop-shadow-auth p-10 md:w-[80%]">
      {/* lendsqr logo */}
      <Image
        src="/assets/icons/logo.svg"
        width={173.76}
        height={36}
        alt=""
        className="mb-10 w-[35%] md:hidden"
      />
      <div className="mb-10">
        <h1 className="font-avenir-bold text-[40px] font-bold text-secondary">
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
                    className="h-auto rounded-[5px] border-[2px] border-[#545F7D26] p-4 text-sm focus-visible:ring-secondary"
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
            <p className="mt-6 font-avenir-bold text-xs font-semibold uppercase text-primary hover:underline">
              Forgot PASSWORD?
            </p>
          </Link>
          <Button
            type="submit"
            className="h-auto w-full rounded-lg bg-primary py-3 font-avenir-bold text-sm font-semibold uppercase text-white hover:bg-primary/80"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
