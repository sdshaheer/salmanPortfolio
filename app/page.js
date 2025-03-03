import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import TopSection from "./components/homepage/top-section";

async function getData() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}&per_page=6`, {
    method: 'GET',
    headers: {
      'Cache-Control': 'no-cache, no-store',
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();

  const filtered = data.filter((item) => item?.cover_image).sort((a, b) => a.published_timestamp - b.published_timestamp);
  return filtered;
};


export default async function Home() {
  const blogs = await getData();



  return (
    <>
      <TopSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs} />
      <ContactSection />
    </>
  )
};