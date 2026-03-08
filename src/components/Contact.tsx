import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Sestavení mailto odkazu jako fallback
    const subject = encodeURIComponent(`Poptávka od ${formData.name}`);
    const body = encodeURIComponent(
      `Jméno: ${formData.name}\nE-mail: ${formData.email}\nTelefon: ${formData.phone}\n\nZpráva:\n${formData.message}`
    );
    window.location.href = `mailto:info@fa-dvoracek.cz?subject=${subject}&body=${body}`;

    toast({
      title: "Zpráva připravena!",
      description: "Otevře se váš e-mailový klient s předvyplněnou zprávou.",
    });

    setIsSubmitting(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="kontakt" className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-8 sm:mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-2 sm:mb-4">
            Kontakt
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-6">
            Spojte se s námi
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto">
            Máte dotaz nebo zájem o naše služby? Neváhejte nás kontaktovat.
            Rádi vám připravíme nezávaznou nabídku.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 items-stretch">
          {/* Contact info */}
          <div className="flex flex-col">
            <div className="bg-gradient-primary rounded-xl sm:rounded-2xl p-5 sm:p-8 flex-1 flex flex-col">
              <h3 className="text-xl sm:text-2xl font-bold text-primary-foreground mb-4 sm:mb-6">
                FA Dvořáček s.r.o.
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <a
                  href="tel:+420732345136"
                  className="flex items-center gap-3 sm:gap-4 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-foreground/10 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-primary-foreground/70">Telefon</div>
                    <div className="font-semibold text-sm sm:text-base">+420 732 345 136</div>
                  </div>
                </a>
                <a
                  href="mailto:info@fa-dvoracek.cz"
                  className="flex items-center gap-3 sm:gap-4 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-foreground/10 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-primary-foreground/70">E-mail</div>
                    <div className="font-semibold text-sm sm:text-base">info@fa-dvoracek.cz</div>
                  </div>
                </a>
                <div className="flex items-center gap-3 sm:gap-4 text-primary-foreground/90">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-foreground/10 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-primary-foreground/70">Adresa</div>
                    <div className="font-semibold text-sm sm:text-base">Kurzova 2222/16, 155 00 Praha</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 text-primary-foreground/90">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-foreground/10 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-primary-foreground/70">Provozní doba</div>
                    <div className="font-semibold text-sm sm:text-base">Po–Ne: 6:00 – 20:00</div>
                  </div>
                </div>

                {/* Fakturační údaje */}
                <div className="border-t border-primary-foreground/20 pt-3 sm:pt-4 mt-3 sm:mt-4">
                  <h4 className="font-semibold text-primary-foreground text-sm sm:text-base mb-2">Fakturační údaje</h4>
                  <div className="text-primary-foreground/80 space-y-0.5 text-xs sm:text-sm">
                    <p>IČO: 17854938</p>
                    <p>DIČ: CZ17854938</p>
                    <p className="text-primary-foreground/60 text-[11px] sm:text-xs mt-1">Zapsána v OR vedeném Městským soudem v Praze, oddíl C, vložka 377559.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-card rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-border flex flex-col">
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">
              Pošlete nám zprávu
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 flex-1 flex flex-col">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    Jméno a příjmení *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Jan Novák"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="+420 123 456 789"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="jan@email.cz"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                  Zpráva *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full flex-1 min-h-[80px] px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Napište nám váš dotaz nebo poptávku..."
                />
              </div>
              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Odesílám..." : "Odeslat zprávu"}
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
