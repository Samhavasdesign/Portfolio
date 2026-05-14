import Hero from "@/components/Hero";
import HomeHashScroll from "@/components/HomeHashScroll";
import Nav from "@/components/Nav";
import Chatbot from "@/components/Chatbot";
import AboutSection from "@/components/AboutSection";
import ClientLogoMarquee from "@/components/ClientLogoMarquee";
import Footer from "@/components/Footer";
import WorkGrid from "@/components/WorkGrid";
import { labProjects } from "@/lib/lab";

export default function Home() {
  return (
    <div style={{ paddingTop: "78px", background: "var(--c-bg)" }}>
      <HomeHashScroll />
      <Nav />
      <Hero />
      <ClientLogoMarquee />
      <WorkGrid />
      <WorkGrid
        title="AI Lab Experiments"
        meta={`${labProjects.length} PROJECTS · 2025`}
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
