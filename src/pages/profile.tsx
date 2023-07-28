import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import DefaultLayout from "@/layouts/default";

const ProfilePage: NextPageWithLayout = () => {
  return <main className="my-20">Profile Page</main>;
};

ProfilePage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default ProfilePage;
