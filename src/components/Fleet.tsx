import osobniDodavka from "@/assets/osobni-dodavka.jpg";
import pickup from "@/assets/pickup-new.jpg";
import dodavka from "@/assets/dodavka-new.jpg";
import plachta from "@/assets/plachta-new.jpg";
import soloHydraulic from "@/assets/solo-hydraulic.jpg";
import navesovaSouprava from "@/assets/navesova-souprava.jpg";

const vehicles = [
  {
    image: osobniDodavka,
    title: "Osobní dodávka",
    capacity: "do 500 kg",
    description: "Mercedes-Benz V-Class pro expresní a VIP přepravy.",
    dimensions: "Ložný prostor: 2 m³",
  },
  {
    image: pickup,
    title: "Pickup / malá dodávka",
    capacity: "do 1 000 kg",
    description: "Pro střední zásilky a flexibilní městskou dopravu.",
    dimensions: "Ložný prostor: 4 m³",
  },
  {
    image: dodavka,
    title: "Dodávka furgon",
    capacity: "do 1 500 kg",
    description: "Naše nejčastější vozidlo. Fiat Ducato, Toyota Proace, Renault Master.",
    dimensions: "Ložný prostor: 13-17 m³",
  },
  {
    image: plachta,
    title: "Plachtová dodávka",
    capacity: "do 1 500 kg",
    description: "Pro nadrozměrné a objemné zásilky s možností bočního nakládání.",
    dimensions: "Ložný prostor: 20 m³",
  },
  {
    image: soloHydraulic,
    title: "Sólo s hydraulickým čelem",
    capacity: "do 6 000 kg",
    description: "Pro těžší zásilky s možností snadného nakládání pomocí hydraulického čela.",
    dimensions: "Ložný prostor: 40 m³",
  },
  {
    image: navesovaSouprava,
    title: "Návěsová souprava",
    capacity: "do 24 000 kg",
    description: "Pro velkoobjemové přepravy a paletové zásilky po celé Evropě.",
    dimensions: "Ložný prostor: 90 m³",
  },
];

const Fleet = () => {
  return (
    <section id="vozidla" className="section-padding pt-4 bg-muted">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Vozový park
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Více než 40 vozidel
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Disponujeme moderním vozovým parkem pro jakýkoli typ přepravy. 
            Od malých zásilek až po kamionovou dopravu.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((vehicle, index) => (
            <div
              key={vehicle.title}
              className={`group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-soft ${
                index === 2 ? "lg:col-span-1 sm:col-span-2 lg:row-span-1" : ""
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {vehicle.capacity}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{vehicle.title}</h3>
                <p className="text-muted-foreground mb-3">{vehicle.description}</p>
                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {vehicle.dimensions}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 bg-gradient-primary rounded-2xl p-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: "40+", label: "Dodávkových vozidel" },
            { value: "3+", label: "Kamionů" },
            { value: "100%", label: "Pokrytí ČR" },
            { value: "24/7", label: "Dispečink" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-primary-foreground mb-2">{stat.value}</div>
              <div className="text-primary-foreground/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
