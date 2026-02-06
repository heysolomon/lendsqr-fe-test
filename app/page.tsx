import Image from "next/image";
import authIllustration from "@/public/assets/images/asset-login-page.png";
import LoginForm from "@/components/pages/auth/login";

export default function Home() {
  return (
    <main className="login-page">
      <div className="login-page__illustration-container">
        {/* lendsqr logo */}
        <Image
          src="/assets/icons/logo.svg"
          width={173.76}
          height={36}
          alt=""
          className="login-page__logo"
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
