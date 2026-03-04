import { Package, Truck, Sofa, Wrench, Box, Pill, Scaling, Archive } from "lucide-react";
import deliveryTeam from "@/assets/delivery-team.jpg";
import installation from "@/assets/installation.jpg";

const services = [
  {
    icon: Package,
    title: "Zásilková doprava",
    description: "Expresní doručení balíků a zásilek po celé České republice. Denně rozvážíme tisíce zásilek s 99% úspěšností doručení.",
  },
  {
    icon: Truck,
    title: "Přeprava elektroniky",
    description: "Specializujeme se na přepravu velké elektroniky - lednice, pračky, televize. Šetrná manipulace a profesionální zacházení.",
  },
  {
    icon: Sofa,
    title: "Přeprava nábytku",
    description: "Bezpečná přeprava nábytku jakýchkoli rozměrů. Od drobného nábytku po kompletní vybavení domácnosti.",
  },
  {
    icon: Wrench,
    title: "Montáže spotřebičů",
    description: "Profesionální instalace a montáž domácích spotřebičů. Naši technici mají letité zkušenosti s vestavnými spotřebiči.",
  },
  {
    icon: Box,
    title: "Zásobování výdejních boxů",
    description: "Spolehlivé zásobování Alzaboxů a dalších výdejních míst. Pravidelné trasy s pevným rozvrhem a 100% spolehlivostí doručení.",
  },
  {
    icon: Pill,
    title: "Přeprava léčiv",
    description: "Specializovaná přeprava farmaceutických produktů a léčiv s dodržením teplotního režimu. Spolehlivé doručení s trasováním zásilek v reálném čase.",
  },
];

const Services = () => {
  return (
    <section id="sluzby" className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Co nabízíme
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Kompletní logistické služby
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Od expresní přepravy zásilek až po profesionální montáže. 
            Postaráme se o vaše zboží od A do Z.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-soft hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gradient-primary transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Featured images */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative group overflow-hidden rounded-2xl">
            <img
              src={deliveryTeam}
              alt="Tým kurýrů při vykládce elektroniky"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-card text-xl font-bold mb-2">Profesionální tým</h3>
                <p className="text-card/80">Zkušení kurýři a montéři připraveni splnit vaše požadavky</p>
              </div>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-2xl">
            <img
              src={installation}
              alt="Montáž vestavných spotřebičů"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-card text-xl font-bold mb-2">Montážní služby</h3>
                <p className="text-card/80">Instalace spotřebičů a kuchyní na klíč</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
