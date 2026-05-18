import Link from "next/link";
import { redirect } from "next/navigation";
import Nav from "@/components/Nav";
import { labProjects } from "@/lib/lab";

export default async function LabProjectPage({ params }) {
  const { slug } = await params;
  const project = labProjects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <motionlessNotFound />
    );
  }

  if (project.externalUrl) {
    redirect(project.externalUrl);
  }

  return (
    <div
      style={{
        background: "var(--c-bg)",
        minHeight: "100vh",
        color: "var(--c-text)",
      }}
    >
      <Nav />
      <main
        className="section-container"
        style={{
          display: "flex",
          minHeight: "calc(100vh - 78px)",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "calc(var(--section-pad-y) + 78px)",
          paddingBottom: "var(--section-pad-y)",
          textAlign: "center",
        }}
      >
        <p
          className="section-eyebrow"
          style={{ color: "var(--c-purple)", marginBottom: "20px" }}
        >
          {project.company}
        </p>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(24px, 3.5vw, 40px)",
            fontWeight: 400,
            lineHeight: 1.35,
            letterSpacing: "-0.02em",
            maxWidth: "28ch",
            marginBottom: "40px",
          }}
        >
          Sorry, this project is still under construction. Check back soon! :)
        </h1>
        <Link href="/#Lab" className="nav-link" style={{ fontSize: "var(--fs-base)" }}>
          ← Back to AI Lab
        </Link>
      </main>
    </div>
  );
}
