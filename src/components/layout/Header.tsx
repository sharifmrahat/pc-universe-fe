/* eslint-disable @next/next/no-img-element */
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Oswald } from "next/font/google";
import { Poppins } from "next/font/google";
import Link from "next/link";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];

const poppins = Poppins({ style: "normal", weight: "400", subsets: ["latin"] });
const oswald = Oswald({ style: "normal", weight: "600", subsets: ["latin"] });

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`${poppins.className} bg-primary sticky top-0 z-50`}>
      <nav
        className="mx-auto flex lg:max-w-7xl items-center justify-between py-4"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span
              className={`text-xl lg:text-3xl text-accent pl-5 lg:pl-0 ${oswald.className}`}
            >
              PC Universe
            </span>
            {/* <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            /> */}
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-end rounded-md p-2.5 text-accent"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/"
            className="text-sm font-semibold leading-6 text-accent hover:text-secondary"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-sm font-semibold leading-6 text-accent hover:text-secondary"
          >
            Products
          </Link>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-accent border-none outline-none hover:text-secondary">
              Categories
              <ChevronDownIcon
                className="h-5 w-5 flex-none"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-sm overflow-hidden rounded bg-white shadow-lg">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded text-sm leading-6 hover:bg-accent text-slate-600 hover:text-primary"
                    >
                      <div className="flex h-8 w-8 flex-none items-center justify-center rounded  group-hover:bg-primary">
                        <item.icon
                          className="h-4 w-4 group-hover:text-accent"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <Link href={item.href} className="block font-semibold ">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Link
            href="/promotion"
            className="text-sm font-semibold leading-6 text-accent hover:text-secondary"
          >
            Promotion
          </Link>
          <Link
            href="/service"
            className="text-sm font-semibold leading-6 text-accent hover:text-secondary"
          >
            Service
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center gap-8">
          <Link
            href="/pc-builder"
            className="text-sm font-semibold leading-6 text-accent border-2 py-1 px-3 rounded border-secondary hover:text-secondary"
          >
            <SquaresPlusIcon className="w-4 h-4 mr-3 inline-block" />
            PC Builder
          </Link>
          <Link
            href="/login"
            className="text-sm font-semibold leading-6 text-primary bg-accent py-1 px-3 rounded hover:bg-secondary hover:border-secondary border-2"
          >
            Login
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-primary px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            {/* <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a> */}
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-accent/50">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Link
                        href="/"
                        className="rounded py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-accent hover:bg-accent hover:text-primary block"
                      >
                        Home
                      </Link>
                      <Link
                        href="/products"
                        className="rounded py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-accent hover:bg-accent hover:text-primary block"
                      >
                        Products
                      </Link>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-accent hover:bg-accent hover:text-primary">
                        Categories
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2 bg-accent text-primary rounded p-2">
                        {[...products].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded p-2 text-sm font-semibold leading-7 text-slate-600 hover:bg-primary hover:text-accent"
                          >
                            <item.icon
                              className="h-4 w-4 group-hover:text-accent inline-block mr-2"
                              aria-hidden="true"
                            />{" "}
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                      <Link
                        href="/promotion"
                        className="rounded py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-accent hover:bg-accent hover:text-primary block"
                      >
                        Promotion
                      </Link>
                      <Link
                        href="/service"
                        className="rounded py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-accent hover:bg-accent hover:text-primary block"
                      >
                        Service
                      </Link>
                    </>
                  )}
                </Disclosure>
              </div>
              <div className="py-6 flex flex-row justify-center items-center gap-5">
                <Link
                  href="/pc-builder"
                  className="text-sm font-semibold leading-6 text-accent border-2 py-1 px-3 rounded border-secondary hover:text-secondary w-fit"
                >
                  <SquaresPlusIcon className="w-4 h-4 mr-3 inline-block" />
                  PC Builder
                </Link>
                <Link
                  href="/login"
                  className="text-sm font-semibold leading-6 text-primary bg-accent py-1 px-3 rounded hover:bg-secondary hover:border-secondary border-2 w-fit"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
