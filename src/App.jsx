import { Suspense } from "react";
import AppIntro from "./components/app";
import Header from "./components/header";
import Hero from "./components/hero";
import Intro from "./components/intro";
import Loading from "./components/loading";
import Manifesto from "./components/manifesto";
import ThemeProvider from "./utils/themeProvider";
import Values from "./components/values";
import Store from "./components/store";

function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<Loading />}>
        <Header />
        <Hero />
        <Intro />
        <Manifesto />
        <AppIntro />
        <Values />
        <Store />
        {/* <CookiesToast /> */}
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
