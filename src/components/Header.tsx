import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

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
        <div className="container-wide flex justify-between items-center text-xs sm:text-sm">
          <div className="flex items-center gap-2 sm:gap-6">
            <a href="tel:+420732345136" className="flex items-center gap-1 sm:gap-2 hover:text-secondary transition-colors">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>+420 732 345 136</span>
            </a>
            <a href="mailto:info@fa-dvoracek.cz" className="flex items-center gap-1 sm:gap-2 hover:text-secondary transition-colors">
              <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden xs:inline sm:inline">info@fa-dvoracek.cz</span>
              <span className="xs:hidden sm:hidden">Email</span>
            </a>
          </div>
          <span className="text-primary-foreground/80 hidden md:block">Doprava po celé ČR a Evropě</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container-wide py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img 
              src={logo} 
              alt="FA Dvořáček s.r.o." 
              className="h-10 sm:h-12 w-auto"
            />
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
