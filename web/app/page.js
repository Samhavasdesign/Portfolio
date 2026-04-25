import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Chatbot from "@/components/Chatbot";
import ClientLogoMarquee from "@/components/ClientLogoMarquee";
import Footer from "@/components/Footer";
import WorkGrid from "@/components/WorkGrid";
import WorkShowcase from "@/components/WorkShowcase";
import { labProjects } from "@/lib/lab";

export default function Home() {
  return (
    <div style={{ paddingTop: "78px", background: "var(--c-bg)" }}>
      <Nav />
      <Hero />
      <ClientLogoMarquee />
      <WorkGrid />
      <WorkGrid
        title="AI Lab Experiments"
        meta={`${labProjects.length} PROJECTS · 2025`}
        projects={labProjects}
        id="lab"
        linkPrefix="/lab"
      />
      <WorkShowcase />
      <Footer />
      <Chatbot />
    </div>
  );
}
