import { Radio, FileCheck, ShieldCheck, Banknote } from "lucide-react";

const reasons = [
  {
    icon: Radio,
    title: "24/7 dispečink",
    description: "Nepřetržitý dispečink s online monitoringem všech vozidel v reálném čase.",
  },
  {
    icon: FileCheck,
    title: "Koncese na dopravu",
    description: "Koncesní listina pro dopravu do 3,5 t i nad 3,5 t po celé ČR a Evropě.",
  },
  {
    icon: ShieldCheck,
    title: "ADR licence",
    description: "Oprávnění pro přepravu nebezpečných látek – plynů dle dohody ADR.",
  },
  {
    icon: Banknote,
    title: "Pojištění na 10 mil. Kč",
    description: "Komplexní pojištění vozidel i přepravovaného nákladu až do výše 10 milionů Kč.",
  },
];

const Team = () => {
  return (
    <section id="proc-nas" className="section-padding !pt-0 bg-background">
      <div className="container-wide">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Naše výhody
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Proč právě nás?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Garantujeme profesionální přístup, bezpečnost a spolehlivost na každém kilometru.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-soft hover:shadow-lg transition-all duration-300 border border-border/50 group hover:border-primary/30 text-center"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
