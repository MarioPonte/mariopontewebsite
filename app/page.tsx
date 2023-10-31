import About from "./components/About";
import Contacts from "./components/contacts/Contacts";
import { Projects } from "./components/projects/Projects";
import Services from "./components/Services";
import Technologies from "./components/technologies/Technologies";
import Hero from "./components/hero/Hero";
import { HomePageData } from "./types/page-info";
import { fetchHygraphQuery } from "./utils/fetch-hygraph-query";
import { pageQuery } from "./utils/hygraph-queries";

const getPageData = async (): Promise<HomePageData> => {
  return fetchHygraphQuery(
    pageQuery, 
    1000 * 60 * 60 * 24,
  );
}

export default async function Home() {

  const { page: pageData } = await getPageData();

  return (
    <>
      <Hero/>
      <About homeInfo={pageData} />
      <Technologies/>
      <Projects projects={pageData.highlightProjects} />
      <Services/>
      <Contacts/>
    </>
  )
}