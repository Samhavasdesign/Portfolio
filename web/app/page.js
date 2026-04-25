import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Chatbot from "@/components/Chatbot";
import WorkGrid from "@/components/WorkGrid";
import WorkShowcase from "@/components/WorkShowcase";

export default function Home() {
  return (
    <div style={{ paddingTop: "57px", background: "#0a0a0a" }}>
      <Nav />
      <Hero />
      <WorkGrid />
      <WorkShowcase />
      <Chatbot />
    </div>
  );
}
