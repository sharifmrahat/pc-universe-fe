import { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";
import DefaultLayout from "@/layouts/default";

const HomePage: NextPageWithLayout = () => {
  return (
    <main className="w-full lg:max-w-7xl mx-auto my-10">
      home page lorem20 Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Adipisci illum nemo saepe vel, expedita ad, hic quae consequatur
      cupiditate placeat, sint officia beatae! Architecto quae non eos, eveniet
      impedit libero perspiciatis. In, a. Non rem suscipit laborum, numquam nam
      nihil quae voluptatibus explicabo ullam esse ut quibusdam veniam quos
      cumque porro deleniti tenetur eum dolorum quasi eos nesciunt neque.
      Accusamus error, enim aperiam excepturi placeat culpa animi consectetur
      suscipit magnam illum fugiat odit fuga natus ad labore accusantium?
      Perspiciatis aut omnis unde harum corrupti repellat iusto labore atque
      explicabo maiores inventore cumque reprehenderit aliquam, sed porro
      numquam. Excepturi suscipit saepe incidunt nobis officiis corporis numquam
      adipisci aperiam sunt, sequi laudantium ex minus cupiditate molestiae
      deleniti. Atque molestiae dolores tempore id placeat eveniet praesentium
      veritatis iusto quis accusamus doloribus et temporibus voluptates cumque
      reprehenderit aspernatur, adipisci consectetur hic quasi eaque aut quae
      odio ratione aliquid? Odio incidunt quia ratione. Voluptas reiciendis
      provident ut nesciunt sed? Nihil unde reiciendis, ducimus repellendus
      delectus magni rem accusantium maxime ipsa deserunt excepturi porro quae
      beatae recusandae, voluptate quod quia labore ex illo libero totam aliquam
      adipisci tempore. Deserunt eaque consequuntur doloremque, repellendus ipsa
      magnam error consectetur, repellat incidunt quam dolorum, cupiditate sed
      saepe pariatur? Autem?
    </main>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default HomePage;
