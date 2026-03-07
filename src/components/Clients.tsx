import alzaLogo from "@/assets/logos/alza.png";
import dpdLogo from "@/assets/logos/dpd.png";
import oneAllegroLogo from "@/assets/logos/one-allegro.svg";
import rhenusLogo from "@/assets/logos/rhenus.svg";
import gorenjeLogo from "@/assets/logos/gorenje.png";
import decoledLogo from "@/assets/logos/decoled.png";

const clients = [
  { name: "Alza.cz", logo: alzaLogo, url: "https://www.alza.cz" },
  { name: "DPD", logo: dpdLogo, url: "https://www.dpd.com/cz/cs/" },
  { name: "One by Allegro", logo: oneAllegroLogo, url: "https://onedelivery.cz" },
  { name: "Rhenus", logo: rhenusLogo, url: "https://www.rhenus.group/cz/cs/" },
  { name: "Gorenje", logo: gorenjeLogo, url: "https://cz.gorenje.com/kuchyne" },
  { name: "Decoled", logo: decoledLogo, url: "https://www.decoled.cz" },
];

const Clients = () => {
  return (
    <section className="section-padding !pt-0 bg-background">
      <div className="container-wide">
        <div className="text-center mb-4">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Důvěřují nám
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Naši zákazníci a partneři
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client) => (
            <a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center p-4 h-24"
            >
              <img
                src={client.logo}
                alt={`Logo ${client.name}`}
                className="max-h-12 max-w-full object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
