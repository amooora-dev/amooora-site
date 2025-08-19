import AppIntro from "@/components/home/app";
import Faq from "@/components/home/faq";
import Hero from "@/components/home/hero";
import Intro from "@/components/home/intro";
import Manifesto from "@/components/home/manifesto";
import Newsletter from "@/components/home/newsletter";
import Store from "@/components/home/store";
import Values from "@/components/home/values";
import WhoAreWe from "@/components/home/whoAreWe";
import Loading from "@/components/loading";
import ToTop from "@/components/toTop";
import { Suspense } from "react";


const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Hero />
      <Intro />
      <Manifesto />
      <AppIntro />
      <Values />
      <Store />
      <Faq />
      <WhoAreWe />
      <Newsletter />
      <ToTop />
    </Suspense>
  );
};

export default Home;
