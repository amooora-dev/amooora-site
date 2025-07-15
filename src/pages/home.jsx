import AppIntro from "../components/app";
import Faq from "../components/faq";
import Hero from "../components/hero";
import Intro from "../components/intro";
import Manifesto from "../components/manifesto";
import Newsletter from "../components/newsletter";
import Store from "../components/store";
import Values from "../components/values";
import WhoAreWe from "../components/whoAreWe";

const Home = () => {
  return (
    <>
      <Hero />
      <Intro />
      <Manifesto />
      <AppIntro />
      <Values />
      <Store />
      <Faq />
      <WhoAreWe />
      <Newsletter />
    </>
  );
};

export default Home;
