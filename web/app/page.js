import Hero from "@/components/Hero";
import HomeHashScroll from "@/components/HomeHashScroll";
import Nav from "@/components/Nav";
import Chatbot from "@/components/Chatbot";
import AboutSection from "@/components/AboutSection";
import ClientLogoMarquee from "@/components/ClientLogoMarquee";
import Footer from "@/components/Footer";
import WorkGrid from "@/components/WorkGrid";
import { visibleLabProjects } from "@/lib/lab";
import { caseStudies } from "@/lib/work";

export default function Home() {
  return (
    <div style={{ paddingTop: "78px", background: "var(--c-bg)" }}>
      <HomeHashScroll />
      <Nav />
      <Hero />
      <ClientLogoMarquee />
      <WorkGrid
        title="AI builds"
        meta={`${visibleLabProjects.length} BUILDS · 2026`}
        description="Working prototypes I designed and coded end to end — from idea to live product."
        projects={visibleLabProjects}
        id="Lab"
        linkPrefix="/lab"
        className="section-container--tight-bottom"
      />
      <WorkGrid projects={caseStudies} className="section-container--tight-top" />
      <AboutSection />
      <Footer />
      <Chatbot />
    </div>
  );
}
