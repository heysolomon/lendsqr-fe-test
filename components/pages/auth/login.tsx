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
    <div className="login-form">
      {/* lendsqr logo */}
      <Image
        src="/assets/icons/logo-mark.svg"
        width={24.75}
        height={25}
        alt=""
        className="login-form__logo"
      />
      <div className="login-form__header">
        <h1 className="login-form__title">
          Welcome!
        </h1>
        <p className="login-form__subtitle">Enter details to login.</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="login-form__form">
          {/* email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Email"
                    aria-label="Email"
                    className="login-form__input"
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
                  <PasswordInput
                    placeholder="Password"
                    aria-label="Password"
                    field={field}
                    className="login-form__input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Link href="/auth/forgot%20password" className="">
            <p className="login-form__forgot-link">
              Forgot PASSWORD?
            </p>
          </Link>
          <Button
            type="submit"
            className="login-form__submit"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
