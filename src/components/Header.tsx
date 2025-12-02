import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#sluzby", label: "Služby" },
    { href: "#vozidla", label: "Vozový park" },
    { href: "#o-nas", label: "O nás" },
    { href: "#kariera", label: "Kariéra" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container-wide flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+420603000000" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+420 603 000 000</span>
            </a>
            <a href="mailto:info@fa-dvoracek.cz" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">info@fa-dvoracek.cz</span>
            </a>
          </div>
          <span className="text-primary-foreground/80 hidden md:block">Doprava po celé ČR</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container-wide py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-soft">
              <span className="text-primary-foreground font-bold text-xl">FA</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-foreground">FA Dvořáček</span>
              <span className="text-muted-foreground text-sm block">s.r.o.</span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Button variant="secondary" size="lg">
              Poptávka
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary font-medium transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="secondary" className="mt-2">
                Poptávka
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
