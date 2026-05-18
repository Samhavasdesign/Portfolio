import Hero from "@/components/Hero";
import HomeHashScroll from "@/components/HomeHashScroll";
import Nav from "@/components/Nav";
import Chatbot from "@/components/Chatbot";
import AboutSection from "@/components/AboutSection";
import ClientLogoMarquee from "@/components/ClientLogoMarquee";
import Footer from "@/components/Footer";
import WorkGrid from "@/components/WorkGrid";
import { labProjects } from "@/lib/lab";
import { caseStudies } from "@/lib/work";

export default function Home() {
  return (
    <div style={{ paddingTop: "78px", background: "var(--c-bg)" }}>
      <HomeHashScroll />
      <Nav />
      <Hero />
      <ClientLogoMarquee />
      <WorkGrid projects={caseStudies} />
      <WorkGrid
        title="AI lab experiments"
        meta={`${labProjects.length} PROJECTS · 2026`}
        projects={labProjects}
        id="Lab"
        linkPrefix="/lab"
      />
      <AboutSection />
      <Footer />
      <Chatbot />
    </div>
  );
}
