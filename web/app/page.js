import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <div style={{ paddingTop: "57px", background: "#0a0a0a" }}>
      <Nav />
      <Hero />
      <Chatbot />
    </div>
  );
}
