import { Suspense } from "react";
import Header from "./components/header";
import Loading from "./components/loading";
import CookiesToast from "./components/toast";
import ThemeProvider from "./utils/themeProvider";
import Hero from "./components/hero";
import Intro from "./components/intro";
import Manifesto from "./components/manifesto";

function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<Loading />}>
        <Header />
        <Hero />
        <Intro />
        <Manifesto />
        {/* <CookiesToast /> */}
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
