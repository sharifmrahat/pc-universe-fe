/* eslint-disable @next/next/no-img-element */
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import DefaultLayout from "@/layouts/default";
import { useSession } from "next-auth/react";
import Image from "next/image";

const ProfilePage: NextPageWithLayout = () => {
  const { data: session } = useSession();
  return (
    <main className="py-10 lg:max-w-7xl px-5 mx-auto h-screen">
      <section>
        <div className="w-fit mx-auto bg-white shadow p-5 text-center">
          <div className="mb-4">
            {session?.user?.image && (
              <img
                src={session?.user?.image as string}
                alt={session?.user?.name as string}
                className="w-20 h-20 rounded-full mx-auto border-2 border-primary"
              />
            )}
          </div>
          <div className="text-xl lg:text-2xl font-semibold text-primary">
            {session?.user?.name}
          </div>
          <div className="text-lg lg:text-xl  text-slate-500">
            {session?.user?.email}
          </div>
        </div>
      </section>
    </main>
  );
};

ProfilePage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default ProfilePage;
