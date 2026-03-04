import { Check, Award, Users, MapPin } from "lucide-react";
import courier from "@/assets/courier-1.jpg";

const features = [
  "Více než 60 dodávkových vozidel v provozu",
  "Zkušený tým kurýrů a montérů",
  "Pokrytí celé České republiky",
  "Expresní doručení tentýž den",
  "Profesionální montážní služby",
  "Férové ceny bez skrytých poplatků",
];

const About = () => {
  return (
    <section id="o-nas" className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={courier}
                alt="Kurýr FA Dvořáček"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-soft border border-border max-w-xs">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">8 let</div>
                  <div className="text-muted-foreground text-sm">na trhu</div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Spolehlivý partner pro stovky spokojených klientů
              </p>
            </div>
          </div>

          {/* Content side */}
          <div>
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              O společnosti
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              FA Dvořáček s.r.o.
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Jsme česká dopravní a logistická společnost, která se specializuje na přepravu zásilek, 
              velké elektroniky a nábytku. Naším hlavním aktivem je moderní vozový park čítající 
              více než 40 dodávkových vozidel značek Fiat Ducato, Toyota Proace a Renault Master.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Kromě dopravy nabízíme také profesionální montážní služby - od instalace 
              domácích spotřebičů až po kompletní montáž kuchyňských linek. Naši technici 
              mají bohaté zkušenosti a dbají na kvalitu odvedené práce.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 pt-6 border-t border-border">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">Tým 50+ profesionálů</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">Sídlo: Praha</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
