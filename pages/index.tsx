import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Page from "@/components/utility/Page";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";

export default function Home() {
  return (
    <Page currentPage="Home" meta={{ desc: "Dave Canache - Software Developer and Content Creator building beautiful web applications." }}>
      <Hero />
      <div className="mt-20 space-y-32">
        <Projects />
        <Skills />
      </div>
      <CTA />
    </Page>
  );
}
