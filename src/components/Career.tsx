import { Button } from "@/components/ui/button";
import { MapPin, Briefcase, Mail, Phone } from "lucide-react";
import { Banknote, Car, Clock, Users, ArrowRight } from "lucide-react";
import careerCourier from "@/assets/career-courier.png";

const benefits = [
  {
    icon: Banknote,
    title: "Nadstandardní ohodnocení",
    description: "Férové finanční podmínky s jasným výdělkem",
  },
  {
    icon: Car,
    title: "Nový vozový park",
    description: "Dostaneš novou dodávku značky Toyota, Fiat, nebo Renault",
  },
  {
    icon: Clock,
    title: "Flexibilní spolupráce",
    description: "Možnost spolupráce na HPP, DPP, nebo IČO",
  },
  {
    icon: Users,
    title: "Skvělý kolektiv",
    description: "Férový přístup a přátelské zázemí",
  },
];

const positions = [
  {
    title: "Řidič - rozvoz zásilek",
    location: "Praha",
    type: "IČO / Brigáda",
    salary: "1900-2500 Kč/den",
    description: "Rozvoz zásilek po Praze a okolí dodávkovým vozidlem. Práce na pravidelných trasách s každodenním plánováním rozvozu.",
    requirements: [
      "Řidičský průkaz sk. B",
      "Zkušenost s dodávkou",
      "Spolehlivost a zodpovědnost",
      "Fyzická zdatnost",
    ],
  },
  {
    title: "Řidič - rozvoz elektroniky",
    location: "Praha",
    type: "IČO / Brigáda",
    salary: "Až 70 000 Kč/měsíc",
    description: "Řízení plachtové dodávky a rozvoz zboží podle plánu. Výnos spotřebičů do bytů a jejich instalace, kontakt se zákazníky.",
    requirements: [
      "Řidičský průkaz sk. B",
      "Zkušenost s instalací výhodou",
      "Manuální zručnost",
      "Komunikativnost",
    ],
  },
  {
    title: "Řidič nákladního vozidla",
    location: "Praha a ČR",
    type: "HPP / IČO",
    salary: "Až 60 000 Kč/měsíc",
    description: "Přeprava nákladů kamionovou nebo návěsovou soupravou po České republice i v rámci mezinárodní přepravy. Zajištění nakládky a vykládky zboží.",
    requirements: [
      "Řidičský průkaz C+E",
      "Profesní způsobilost řidiče",
      "Zkušenosti s řízením nákladního vozidla",
      "Komunikativnost",
    ],
  },
];

const Career = () => {
  return (
    <section id="kariera" className="section-padding bg-muted">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-2 sm:mb-4">
            Kariéra
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Hledáme posily do týmu
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Staň se součástí našeho týmu a získej nadstandardní finanční ohodnocení!
          </p>
        </div>

        {/* Benefits row */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4 mb-8 sm:mb-12">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex flex-col items-center text-center p-2 sm:p-4"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-2">
                <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-[10px] sm:text-sm leading-tight">{benefit.title}</h3>
            </div>
          ))}
        </div>

        {/* Positions grid */}
        <div className="grid md:grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4">
          {positions.map((position) => (
            <div
              key={position.title}
              className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-soft flex flex-col"
            >
              <div className="mb-2 sm:mb-3">
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-foreground leading-tight">
                    {position.title}
                  </h3>
                </div>
                <div className="bg-secondary/10 text-secondary font-bold px-2 py-1 rounded-lg text-sm inline-block mb-2">
                  {position.salary}
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
                    <MapPin className="w-3.5 h-3.5" /> {position.location}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
                    <Briefcase className="w-3.5 h-3.5" /> {position.type}
                  </span>
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-2 sm:mb-3 hidden sm:block">{position.description}</p>

              <div className="mb-3 flex-1">
                <h4 className="font-semibold text-foreground mb-1.5 text-sm">Požadujeme:</h4>
                <ul className="space-y-1">
                  {position.requirements.map((req) => (
                    <li key={req} className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tlačítko nyní scrolluje na kontaktní sekci */}
              <Button className="w-full" size="sm" asChild>
                <a href="#kontakt">
                  Mám zájem
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* CTA card */}
        <div className="grid md:grid-cols-2 gap-3 sm:gap-4 items-stretch h-48 sm:h-52">
          <div className="bg-gradient-primary rounded-xl sm:rounded-2xl p-4 sm:p-5 flex flex-col justify-center">
            <h3 className="text-base sm:text-lg font-bold text-primary-foreground mb-1.5">
              Chceš se přidat?
            </h3>
            <p className="text-primary-foreground/80 text-sm mb-3">
              Pošli nám životopis nebo zavolej pro nezávazné setkání
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button variant="heroOutline" size="sm" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <a href="mailto:info@fa-dvoracek.cz"><Mail className="w-4 h-4" /> info@fa-dvoracek.cz</a>
              </Button>
              <Button variant="heroOutline" size="sm" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <a href="tel:+420732345136"><Phone className="w-4 h-4" /> +420 732 345 136</a>
              </Button>
            </div>
          </div>

          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden hidden md:block">
            <img
              src={careerCourier}
              alt="Kurýr předává zásilku zákazníkovi"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-4 sm:p-5">
              <p className="text-card font-medium text-sm">
                FA Dvořáček s.r.o. – dodáváme kvalitu, hledáme profesionály!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
