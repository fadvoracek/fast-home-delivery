import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Package, Wrench } from "lucide-react";
import { useCountUp } from "@/hooks/use-count-up";
import heroImage from "@/assets/hero-courier.jpg";

const Hero = () => {
  const vehicles = useCountUp(80, 1800);
  const shipments = useCountUp(100000, 2200);
  const satisfaction = useCountUp(100, 1500);

  return (
    <section className="relative min-h-screen sm:min-h-screen flex items-stretch pt-32 sm:pt-32 pb-16 sm:pb-20 overflow-hidden overflow-x-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Decorative elements - hidden on mobile to prevent overflow */}
      <div className="hidden md:block absolute top-1/4 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
      <div className="hidden md:block absolute bottom-1/4 left-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />

      <div className="container-wide px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl flex flex-col h-full">
          <div>
          <div className="inline-flex items-center gap-2 bg-card/10 backdrop-blur-sm border border-card/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 animate-fade-up">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse-soft" />
            <span className="text-card/90 text-xs sm:text-sm font-medium">Váš spolehlivý dopravní partner</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-card leading-tight mb-5 sm:mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Přeprava a{" "}
            <span className="text-secondary">montáže</span>{" "}
            po celé ČR a EU
          </h1>

          <p className="text-base sm:text-xl text-card/80 mb-8 sm:mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Jsme česká autodoprava s téměř 80 vozidly — od malých dodávek, přes plachtové vozy a kamiony až po nadrozměrnou a kontejnerovou přepravu.
            <br className="sm:hidden" />{" "}
            Specializujeme se na přepravu a montáž elektroniky a nábytku.
          </p>

          </div>
          <div className="flex-1 min-h-8 sm:min-h-0" />
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg" asChild>
              <a href="#kontakt">
                Nezávazná poptávka
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#sluzby">Naše služby</a>
            </Button>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-9 h-9 sm:w-12 sm:h-12 bg-card/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Truck className="w-4 h-4 sm:w-6 sm:h-6 text-secondary" />
              </div>
              <div>
                <span ref={vehicles.ref as React.RefObject<HTMLSpanElement>} className="text-lg sm:text-2xl font-bold text-card">{vehicles.count}+</span>
                <p className="text-card/70 text-xs sm:text-sm">vozidel</p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-9 h-9 sm:w-12 sm:h-12 bg-card/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Package className="w-4 h-4 sm:w-6 sm:h-6 text-secondary" />
              </div>
              <div>
                <span ref={shipments.ref as React.RefObject<HTMLSpanElement>} className="text-base sm:text-2xl font-bold text-card">{shipments.count.toLocaleString("cs-CZ")}+</span>
                <p className="text-card/70 text-xs sm:text-sm">zásilek/měsíc</p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-9 h-9 sm:w-12 sm:h-12 bg-card/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Wrench className="w-4 h-4 sm:w-6 sm:h-6 text-secondary" />
              </div>
              <div>
                <span ref={satisfaction.ref as React.RefObject<HTMLSpanElement>} className="text-lg sm:text-2xl font-bold text-card">{satisfaction.count}%</span>
                <p className="text-card/70 text-xs sm:text-sm">spokojenost</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-float hidden sm:block">
        <div className="w-6 h-10 border-2 border-card/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-card/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
