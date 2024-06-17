import Image from "next/image";
import authIllustration from "@/public/assets/images/asset-login-page.png";
import LoginForm from "@/components/pages/auth/login";

export default function Home() {
  return (
    <main className="font-avenir-regular grid grid-cols-1 md:grid-cols-2 items-center h-screen">
      <div className="hidden md:flex flex-col items-start gap-y-10 pl-10">
        {/* lendsqr logo */}
        <Image
          src="/assets/icons/logo.svg"
          width={173.76}
          height={36}
          alt=""
          className="ml-10"
        />
        <Image
          src={authIllustration}
          placeholder="blur"
          width={600}
          height={337.57}
          alt=""
        />
      </div>
      <LoginForm />
    </main>
  );
}
