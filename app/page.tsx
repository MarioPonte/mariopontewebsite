import About from "./components/About";
import Contacts from "./components/contacts/Contacts";
import Projects from "./components/projects/Projects";
import Services from "./components/Services";
import Technologies from "./components/technologies/Technologies";
import Welcome from "./components/Welcome";

export default function Home() {
  return (
    <>
      <Welcome/>
      <About/>
      <Technologies/>
      <Projects/>
      <Services/>
      <Contacts/>
    </>
  )
}
