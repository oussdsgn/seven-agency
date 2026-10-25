import Bento from "@/components/Bento";
import Blog from "@/components/Blog";
import Compare from "@/components/Compare";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Showcase from "@/components/Showcase";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Showcase />
      <Compare />
      <Bento />
      <Services />
      <Projects />
      <Process />
      <Pricing />
      <Testimonials />
      <Blog />
      <Faq />
    </>
  );
}
