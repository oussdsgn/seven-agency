import Bento from "@/components/Bento";
import Blog from "@/components/Blog";
import Compare from "@/components/Compare";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Showcase from "@/components/Showcase";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="overflow-x-clip">
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
        <Cta />
      </main>
      <Footer />
    </>
  );
}
