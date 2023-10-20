import About from "./components/About";
import Contacts from "./components/contacts/Contacts";
import Projects from "./components/projects/Projects";
import Services from "./components/Services";
import Technologies from "./components/technologies/Technologies";
import Welcome from "./components/Welcome";
import { HomePageData } from "./types/page-info";
import { fetchHygraphQuery } from "./utils/fetch-hygraph-query";

const getPageData = async (): Promise<HomePageData> => {
  const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        about {
          raw
        } 
      }
    }
  `

  return fetchHygraphQuery(query, 60 * 60 * 24);
}

export default async function Home() {

  const { page: pageData } = await getPageData();

  return (
    <>
      <Welcome/>
      <About homeInfo={pageData} />
      <Technologies/>
      <Projects/>
      <Services/>
      <Contacts/>
    </>
  )
}
