import About from "./components/About";
import Contacts from "./components/contacts/Contacts";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/Services";
import Technologies from "./components/technologies/Technologies";
import Welcome from "./components/Welcome";

export default function Home() {
  return (
    <>
      <Welcome/>
      <About/>
      <Technologies/>
      <Portfolio/>
      <Services/>
      <Contacts/>
    </>
  )
}
