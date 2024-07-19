import Footer from "./components/Footer"
import About from "./pages/about";
import Skills from "./pages/skills";
import Contact from "./pages/contact";
import Journey from "./pages/journey";

export default function Home() {
  return (
    <>
      <About />
      <Skills />
      <Journey />
      <Contact />
    </>
  );
}
