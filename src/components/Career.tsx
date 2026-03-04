import { Button } from "@/components/ui/button";
import { Banknote, Car, Clock, Users, ArrowRight } from "lucide-react";
import careerTeam from "@/assets/career-team.png";

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
    salary: "Až 80 000 Kč/měsíc",
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
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left side - intro */}
          <div>
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-2 sm:mb-4">
              Kariéra
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-6">
              Hledáme posily do týmu
            </h2>
            <p className="text-muted-foreground text-sm sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              Staň se součástí našeho týmu a získej nadstandardní finanční ohodnocení! 
              Nabízíme stabilní zázemí české firmy, nové vozidlo a férový přístup.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="bg-card rounded-lg sm:rounded-xl p-3 sm:p-4 border border-border"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2 sm:mb-3">
                    <benefit.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-xs sm:text-base mb-0.5 sm:mb-1">{benefit.title}</h3>
                  <p className="text-muted-foreground text-[10px] sm:text-sm hidden sm:block">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden hidden sm:block">
              <img
                src={careerTeam}
                alt="Kurýr předává zásilku zákazníkovi"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-6">
                <p className="text-card font-medium">
                  FA Dvořáček s.r.o. – dodáváme kvalitu, hledáme profesionály!
                </p>
              </div>
            </div>
          </div>

          {/* Right side - positions */}
          <div className="space-y-4 sm:space-y-6">
            {positions.map((position) => (
              <div
                key={position.title}
                className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-soft"
              >
                <div className="flex flex-wrap items-start justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
                  <div>
                    <h3 className="text-base sm:text-xl font-bold text-foreground mb-1">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
                        📍 {position.location}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
                        💼 {position.type}
                      </span>
                    </div>
                  </div>
                  <div className="bg-secondary/10 text-secondary font-bold px-3 py-1 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base">
                    {position.salary}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-3 sm:mb-4 hidden sm:block">{position.description}</p>

                <div className="mb-3 sm:mb-4">
                  <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Požadujeme:</h4>
                  <ul className="grid sm:grid-cols-2 gap-1.5 sm:gap-2">
                    {position.requirements.map((req) => (
                      <li key={req} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full sm:w-auto" size="sm">
                  Mám zájem
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            ))}

            <div className="bg-gradient-primary rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
              <h3 className="text-lg sm:text-xl font-bold text-primary-foreground mb-2">
                Chceš se přidat?
              </h3>
              <p className="text-primary-foreground/80 text-sm mb-3 sm:mb-4">
                Pošli nám životopis nebo zavolej pro nezávazné setkání
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
                <Button variant="heroOutline" size="sm" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  📧 info@fa-dvoracek.cz
                </Button>
                <Button variant="heroOutline" size="sm" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  📞 +420 732 345 136
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
