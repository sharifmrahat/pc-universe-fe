/* eslint-disable @next/next/no-img-element */
import loginImage from "@/assets/images/login-image.jpg";
import googleLogo from "@/assets/images/google.png";
import LoginForm from "@/components/shared/LoginForm";
import Link from "next/link";
import { Oswald } from "next/font/google";
import { signIn } from "next-auth/react";

const oswald = Oswald({ style: "normal", weight: "600", subsets: ["latin"] });

const LoginPage = () => {
  const handleLoginSubmit = (data: any) => {};

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center h-screen gap-10 overflow-hidden">
      <div className="lg:w-1/2 hidden lg:block">
        <img
          src={loginImage.src}
          className="h-screen w-full object-cover"
          alt=""
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:h-full px-5 lg:px-0">
        <section className="pb-10 text-center">
          {/* <div>Logo</div> */}
          <Link
            href="/"
            className={`text-center text-3xl font-semibold cursor-pointer text-primary ${oswald.className}`}
          >
            PC Universe
          </Link>
        </section>
        <section className="mb-10">
          <div className="bg-white p-6 rounded shadow">
            <div className="mb-5">
              <button
                onClick={() =>
                  signIn("google", {
                    callbackUrl: "http://localhost:3000/",
                  })
                }
                className="border-2 border-accent w-fit mx-auto flex flex-row justify-center items-center gap-4 rounded-md p-2"
              >
                <img src={googleLogo.src} alt="" className="w-6 mx-auto" />
                <p>{"Continue with Google"}</p>
              </button>
            </div>

            <LoginForm onSubmit={handleLoginSubmit} isLoading={false} />
            <p className="text-center mt-5 text-sm text-slate-700">
              Dont have an account?{" "}
              <Link
                href="/signup"
                className="text-primary underline focus:outline-none ml-2"
              >
                Signup
              </Link>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoginPage;
