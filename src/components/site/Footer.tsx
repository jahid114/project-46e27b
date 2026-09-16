import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <Logo tone="light" />
          <p className="eyebrow mt-6 text-accent">Your Trust Is Our Strength</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
            A 100% export-oriented garments buying house based in Chittagong, Bangladesh, serving
            apparel buyers across North America, the UK, Europe and Oceania.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="eyebrow text-primary-foreground/60">Navigate</h2>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
            {[
              ["About Us", "#about"],
              ["Services", "#services"],
              ["Products", "#products"],
              ["Quality & Compliance", "#compliance"],
              ["Terms", "#terms"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <li key={label}>
                <a href={href} className="transition-colors hover:text-accent">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow text-primary-foreground/60">Contact</h2>
          <ul className="mt-5 space-y-4 text-sm text-primary-foreground/80">
            <li className="flex gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden />
              <span>
                Ali Plaza-2, 5th Floor, 16 Lalchand Road, Chawak Bazar, Chittagong, Bangladesh
              </span>
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden />
              <a href="mailto:info@eminentsourcing.com" className="hover:text-accent">
                info@eminentsourcing.com
              </a>
            </li>
            <li className="flex gap-3">
              <Phone size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden />
              <a href="tel:+8801700000000" className="hover:text-accent">
                +880 1700 000 000
              </a>
            </li>
            <li className="flex gap-3">
              <Linkedin size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden />
              <a href="https://www.linkedin.com" className="hover:text-accent">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="rule-gold">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-primary-foreground/50 lg:px-8">
          © {new Date().getFullYear()} Eminent Sourcing Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
