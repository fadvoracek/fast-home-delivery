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
    <section id="vozidla" className="section-padding pt-4 bg-muted">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Vozový park
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Více než 60 vozidel
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
              <div className="relative h-48 overflow-hidden flex items-center justify-center bg-white">
                <img
                  src={vehicle.image}
                  alt={vehicle.title}
                  className="max-h-36 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
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
            { value: "60+", label: "Dodávkových vozidel" },
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
