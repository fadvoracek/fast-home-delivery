import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Package, Wrench } from "lucide-react";
import heroImage from "@/assets/hero-van.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />

      <div className="container-wide px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-card/10 backdrop-blur-sm border border-card/20 rounded-full px-4 py-2 mb-6 animate-fade-up">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse-soft" />
            <span className="text-card/90 text-sm font-medium">Váš spolehlivý dopravní partner</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-card leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Doprava zásilek a{" "}
            <span className="text-secondary">montáže</span>{" "}
            po celé ČR
          </h1>

          <p className="text-lg sm:text-xl text-card/80 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Jsme česká dopravní společnost s více než 40 vozidly. Specializujeme se na přepravu elektroniky, nábytku a profesionální montáže spotřebičů a kuchyní.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg">
              Nezávazná poptávka
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="lg">
              Naše služby
            </Button>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-card/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Truck className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <span className="text-2xl font-bold text-card">40+</span>
                <p className="text-card/70 text-sm">vozidel</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-card/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Package className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <span className="text-2xl font-bold text-card">5000+</span>
                <p className="text-card/70 text-sm">zásilek/měsíc</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-card/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Wrench className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <span className="text-2xl font-bold text-card">99%</span>
                <p className="text-card/70 text-sm">spokojenost</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-card/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-card/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
