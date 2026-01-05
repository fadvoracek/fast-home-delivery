import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Fleet from "@/components/Fleet";
import About from "@/components/About";
import Team from "@/components/Team";
import Career from "@/components/Career";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <Clients />
        <Fleet />
        <About />
        <Team />
        <Career />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
