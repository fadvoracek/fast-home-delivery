import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-wide section-padding pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-accent rounded-xl flex items-center justify-center">
                <span className="text-accent-foreground font-bold">FA</span>
              </div>
              <div>
                <span className="font-bold text-background">FA Dvořáček</span>
                <span className="text-background/60 text-sm block">s.r.o.</span>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Česká dopravní a logistická společnost s více než 40 vozidly. 
              Specializujeme se na přepravu elektroniky, nábytku a profesionální montáže.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-background mb-4">Služby</h4>
            <ul className="space-y-2 text-background/70 text-sm">
              <li><a href="#sluzby" className="hover:text-secondary transition-colors">Zásilková doprava</a></li>
              <li><a href="#sluzby" className="hover:text-secondary transition-colors">Přeprava elektroniky</a></li>
              <li><a href="#sluzby" className="hover:text-secondary transition-colors">Přeprava nábytku</a></li>
              <li><a href="#sluzby" className="hover:text-secondary transition-colors">Montáže spotřebičů</a></li>
              <li><a href="#sluzby" className="hover:text-secondary transition-colors">Montáže kuchyní</a></li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Užitečné odkazy</h4>
            <ul className="space-y-2 text-background/70 text-sm">
              <li><a href="#o-nas" className="hover:text-secondary transition-colors">O společnosti</a></li>
              <li><a href="#vozidla" className="hover:text-secondary transition-colors">Vozový park</a></li>
              <li><a href="#kariera" className="hover:text-secondary transition-colors">Kariéra</a></li>
              <li><a href="#kontakt" className="hover:text-secondary transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-background mb-4">Kontakt</h4>
            <ul className="space-y-3 text-background/70 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary" />
                <a href="tel:+420732345136" className="hover:text-secondary transition-colors">
                  +420 732 345 136
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary" />
                <a href="mailto:info@fa-dvoracek.cz" className="hover:text-secondary transition-colors">
                  info@fa-dvoracek.cz
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-secondary mt-0.5" />
                <span>Kurzova 2222/16, 155 00 Praha</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © 2024 FA Dvořáček s.r.o. Všechna práva vyhrazena.
          </p>
          <div className="flex gap-6 text-background/50 text-sm">
            <a href="#" className="hover:text-secondary transition-colors">Ochrana osobních údajů</a>
            <a href="#" className="hover:text-secondary transition-colors">Obchodní podmínky</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
