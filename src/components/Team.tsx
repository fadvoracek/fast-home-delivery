import { Mail, Phone } from "lucide-react";

const teamMembers = [
  {
    name: "Jiří Dvořáček MBA",
    role: "Jednatel společnosti",
    email: "dvoracek@fa-dvoracek.cz",
    phone: "+420 732 345 136",
  },
  {
    name: "Simona Lhotková",
    role: "Manažerka XL služeb a balíkové přepravy",
    email: "lhotkova@fa-dvoracek.cz",
    phone: "+420 603 960 784",
  },
  {
    name: "Karolína Sonhot",
    role: "Personální manažerka a administrativní podpora",
    email: "sonhot@fa-dvoracek.cz",
    phone: "+420 605 432 123",
  },
  {
    name: "Pavol Srp",
    role: "Manažer služeb výdejních boxů a dispečinku",
    email: "dispecink@fa-dvoracek.cz",
    phone: "+420 123 456 789",
  },
];

const Team = () => {
  return (
    <section id="tym" className="section-padding bg-background">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Náš tým
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Lidé, kteří stojí za naším úspěchem
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Poznejte náš zkušený tým profesionálů, kteří se každý den starají o vaše zásilky.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-soft hover:shadow-lg transition-all duration-300 border border-border/50 group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">
                  {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-foreground text-center mb-1">
                {member.name}
              </h3>
              <p className="text-secondary text-sm text-center mb-4 font-medium">
                {member.role}
              </p>
              
              <div className="space-y-2">
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm justify-center"
                >
                  <Mail className="w-4 h-4" />
                  <span className="truncate">{member.email}</span>
                </a>
                <a
                  href={`tel:${member.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm justify-center"
                >
                  <Phone className="w-4 h-4" />
                  <span>{member.phone}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
