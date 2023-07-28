/* eslint-disable @next/next/no-img-element */
import heroImage from "@/assets/images/hero-image.jpeg";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-200">
      <div className="mx-auto lg:max-w-7xl">
        <div className="bg-white dark:bg-slate-700 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <main className="mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
            <div className="sm:text-center lg:text-left px-5 lg:px-0 text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl md:text-5xl">
                <span className="block xl:inline">
                  Building Beyond Boundaries:
                </span>{" "}
                <span className="block text-primary dark:text-secondary xl:inline">
                  Ignite Your Imagination, Power Your Passions.
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                Discover the power of customization at our builder website.
                Design your perfect PC with cutting-edge technology and seamless
                compatibility. Unleash your creativity and optimize performance
                like never before.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start px-5 lg:px-0">
                <div className="rounded-md shadow">
                  <Link
                    href="/products"
                    className="flex w-full items-center justify-center rounded-md border border-transparent text-slate-100 bg-primary px-8 py-2 text-base font-medium hover:bg-primary md:px-10 md:text-lg"
                  >
                    Explore Now
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    href="/products"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-secondary px-8 py-2 text-base font-medium text-primary hover:bg-secondary md:px-10 md:text-lg"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="pt-5 lg:pt-0 mx-auto lg:max-w-7xl">
        <Image
          className="py-5 w-[280px] mx-auto rounded"
          src={heroImage.src}
          alt="heroImage"
          width={280}
          height={200}
        />
      </div>
    </div>
  );
}
