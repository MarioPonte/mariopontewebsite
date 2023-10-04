import About from "./components/About";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Welcome from "./components/Welcome";

export default function Home() {
  return (
    <>
      <Welcome/>
      <About/>
      <Technologies/>
      <Projects/>
    </>
  )
}
