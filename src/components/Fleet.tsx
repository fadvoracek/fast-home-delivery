import malaDodavka from "@/assets/mala-dodavka.png";
import furgon from "@/assets/furgon.png";
import plachta from "@/assets/plachta-vozidlo.png";
import solo from "@/assets/solo.png";
import ruka from "@/assets/ruka.png";
import tahac from "@/assets/tahac.png";

const vehicles = [
  {
    image: malaDodavka,
    title: "Malá dodávka",
    capacity: "do 1 000 kg",
    description: "Kompaktní a rychlá. Ideální pro městské rozvozy a menší zásilky.",
    dimensions: "Ložný prostor: 4 m³",
  },
  {
    image: furgon,
    title: "Dodávka furgon",
    capacity: "do 1 500 kg",
    description: "Naše nejčastější vozidlo. Uzavřený nákladový prostor pro bezpečnou přepravu.",
    dimensions: "Ložný prostor: 13–17 m³",
  },
  {
    image: plachta,
    title: "Plachtová dodávka",
    capacity: "do 1 500 kg",
    description: "Pro nadrozměrné a objemné zásilky s možností bočního nakládání.",
    dimensions: "Ložný prostor: 20 m³",
  },
  {
    image: solo,
    title: "Sólo s hydraulickým čelem",
    capacity: "do 6 000 kg",
    description: "Pro těžší zásilky s možností snadného nakládání pomocí hydraulického čela.",
    dimensions: "Ložný prostor: 40 m³",
  },
  {
    image: ruka,
    title: "Kamion s hydraulickou rukou",
    capacity: "do 12 000 kg",
    description: "Vybavený hydraulickou rukou pro manipulaci s těžkými a rozměrnými náklady bez potřeby jeřábu.",
    dimensions: "Ložná plocha: 6,2 × 2,4 m",
  },
  {
    image: tahac,
    title: "Tahač s návěsem",
    capacity: "do 24 000 kg",
    description: "Pro velkoobjemové přepravy a paletové zásilky po celé Evropě.",
    dimensions: "Ložný prostor: 90 m³",
  },
];

const Fleet = () => {
  return (
    <section id="vozidla" className="section-padding bg-muted">
      <div className="container-wide">
        <div className="text-center mb-8 sm:mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-2 sm:mb-4">
            Vozový park
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-6">
            Více než 80 vozidel
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto">
            Disponujeme moderním vozovým parkem pro jakýkoli typ přepravy. 
            Od malých zásilek až po kamionovou dopravu.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.title}
              className="group bg-card rounded-xl sm:rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-soft"
            >
              <div className="relative h-28 sm:h-52 overflow-hidden flex items-center justify-center bg-white">
                <img
                  src={vehicle.image}
                  alt={vehicle.title}
                  className="max-h-24 sm:max-h-48 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-secondary text-secondary-foreground px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-sm font-semibold">
                  {vehicle.capacity}
                </div>
              </div>
              <div className="p-3 sm:p-6">
                <h3 className="text-sm sm:text-xl font-bold text-foreground mb-1 sm:mb-2">{vehicle.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-base mb-2 sm:mb-3 hidden sm:block">{vehicle.description}</p>
                <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-sm text-primary font-medium">
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary rounded-full" />
                  {vehicle.dimensions}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-8 sm:mt-16 bg-gradient-primary rounded-xl sm:rounded-2xl p-4 sm:p-8 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {[
            { value: "60+", label: "Dodávkových vozidel" },
            { value: "3+", label: "Kamionů" },
            { value: "100%", label: "Pokrytí ČR" },
            { value: "24/7", label: "Dispečink" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-4xl font-bold text-primary-foreground mb-1 sm:mb-2">{stat.value}</div>
              <div className="text-primary-foreground/80 text-xs sm:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
