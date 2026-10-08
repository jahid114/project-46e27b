import { useState } from "react";
import {
  Award,
  BadgeCheck,
  CreditCard,
  Handshake,
  Heart,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  Send,
  Ship,
  ShieldCheck,
  Sparkles,
  Timer,
  Zap,
} from "lucide-react";
import heroImg from "@/assets/hero-factory.jpg";
import officeImg from "@/assets/office.jpg.asset.json";
import knitImg from "@/assets/product-knit.jpg";
import wovenImg from "@/assets/product-woven.jpg";
import sweaterImg from "@/assets/product-sweater.jpg";

function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "dark",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  tone?: "dark" | "light";
}) {
  const body = tone === "light" ? "text-primary-foreground/70" : "text-muted-foreground";
  const head = tone === "light" ? "text-primary-foreground" : "text-primary";
  return (
    <div className="max-w-2xl">
      <p className="eyebrow text-accent">{eyebrow}</p>
      <h2 className={`mt-4 text-3xl leading-tight md:text-[2.6rem] ${head}`}>{title}</h2>
      {intro && <p className={`mt-5 text-base leading-relaxed ${body}`}>{intro}</p>}
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative isolate">
      <img
        src={heroImg}
        alt="Garment production floor with sewing lines and stacks of finished knitwear"
        width={1920}
        height={1088}
        fetchPriority="high"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="hero-veil absolute inset-0 -z-10" aria-hidden />
      <div className="hero-veil-base absolute inset-x-0 bottom-0 -z-10 h-1/2" aria-hidden />
      <div className="mx-auto max-w-7xl px-5 py-28 md:py-40 lg:px-8">
        <p className="eyebrow text-accent">Your Trust Is Our Strength</p>
        <h1 className="mt-6 max-w-4xl text-4xl leading-[1.08] text-primary-foreground md:text-6xl">
          A 100% export-oriented garments buying house in Chittagong, Bangladesh
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-primary-foreground/75">
          Eminent Sourcing Ltd connects global apparel buyers to reliable, quality-controlled RMG
          production — from fabric sourcing and factory evaluation to inspection, documentation and
          on-time shipment.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="bg-accent px-8 py-4 text-center text-[0.75rem] font-bold uppercase tracking-[0.18em] text-accent-foreground transition-colors hover:bg-gold-soft"
          >
            Request a Quote
          </a>
          <a
            href="#products"
            className="border border-primary-foreground/50 px-8 py-4 text-center text-[0.75rem] font-bold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:border-accent hover:text-accent"
          >
            View Our Products
          </a>
        </div>
        <dl className="mt-16 grid max-w-3xl grid-cols-2 gap-8 border-t border-primary-foreground/15 pt-8 md:grid-cols-4">
          {[
            ["2026", "Established"],
            ["6+", "Export markets"],
            ["45–60", "Days lead time"],
            ["100%", "Export oriented"],
          ].map(([value, label]) => (
            <div key={label}>
              <dt className="sr-only">{label}</dt>
              <dd className="text-2xl font-bold text-accent">{value}</dd>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-primary-foreground/60">
                {label}
              </p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="section-pad">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1.1fr_1fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="About Us"
            title="Established in 2026, built on supply channels that hold under pressure"
            intro="Eminent Sourcing Ltd is a 100% export-oriented garments buying house based in Chittagong, Bangladesh. Our strong supply channel gives us the capacity to handle large-quantity orders at competitive prices within a short lead time."
          />
          <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
            A skilled team of merchandisers and QA inspectors oversees delivery time, production
            supervision and quality control at every stage — so buyers receive a shipment that
            matches the approved sample, not a surprise.
          </p>
          <div className="mt-10 rule-gold pt-6">
            <p className="eyebrow text-primary">Markets we serve</p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {["USA", "Canada", "United Kingdom", "Australia", "New Zealand", "Europe"].map(
                (m) => (
                  <li key={m} className="border-l border-accent pl-3">
                    {m}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        <div className="grid gap-px bg-border">
          <article className="bg-primary p-9 text-primary-foreground">
            <p className="eyebrow text-accent">Our Vision</p>
            <p className="mt-5 leading-relaxed text-primary-foreground/85">
              Through our services we create future values for sustainable growth. We believe
              clients' satisfaction is our key performance parameter. We work for long-term business
              relationships through highest dedication and professionalism.
            </p>
          </article>
          <article className="bg-card p-9">
            <p className="eyebrow text-primary">Our Goal</p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Excellent integration of marketing, merchandising expertise, and ethical standards to
              establish a confident platform for our valued customers.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

const VALUES = [
  { icon: Award, name: "Excellence", text: "Committed to maintaining work excellence." },
  { icon: Sparkles, name: "Meaningful", text: "Our effort must have a sound meaning." },
  { icon: ShieldCheck, name: "Integrity", text: "Integrity is our motto." },
  { icon: Lightbulb, name: "Novelty", text: "Eagerness for innovation." },
  { icon: Zap, name: "Efficient", text: "We move together with our efficiency." },
  { icon: Heart, name: "Nourish", text: "We nourish your feedback and suggestions." },
  { icon: Handshake, name: "Trust", text: "We move forward with your trust." },
];

export function Values() {
  return (
    <section className="section-pad bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Core Values"
          title="Seven commitments that decide how we work"
          tone="light"
        />
        <ul className="mt-14 grid gap-px bg-primary-foreground/15 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(({ icon: Icon, name, text }) => (
            <li key={name} className="bg-primary p-7">
              <Icon size={22} className="text-accent" aria-hidden />
              <h3 className="mt-5 text-sm uppercase tracking-[0.18em] text-primary-foreground">
                {name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/65">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const PROCESS = [
  {
    title: "Fabric sourcing",
    text: "Yarn and fabric procurement monitored from booking to knitting and dyeing.",
  },
  {
    title: "Factory selection & evaluation",
    text: "Capacity and capability audits alongside labor law and environmental compliance checks.",
  },
  {
    title: "Sampling",
    text: "Own sample house developing against buyer design, sketch or counter sample.",
  },
  {
    title: "Price scrutiny",
    text: "Costing broken down and negotiated to a realistic, defensible FOB.",
  },
  {
    title: "Quality control in production",
    text: "Fabric approval, in-line inspection, surprise factory checks, pre-shipment inspection and certificate of inspection.",
  },
  {
    title: "Coordination to shipment",
    text: "Lab-dip approval, LC and banking, customs, GSP documentation, shipping and bank-to-bank documentation.",
  },
  {
    title: "Reporting",
    text: "Regular production and quality reports issued to buyers throughout the order.",
  },
  {
    title: "Buyer visit assistance",
    text: "Hotel booking, transport and supplier meeting arrangement in Bangladesh.",
  },
];

export function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="The full sourcing chain, handled by one accountable team"
          intro="We work as your office in Bangladesh — every step below is managed, documented and reported by our merchandising and QA staff."
        />
        <ol className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {PROCESS.map((step, i) => (
            <li key={step.title} className="flex gap-6 border-t border-border pt-6">
              <span className="font-display text-sm font-bold tracking-[0.1em] text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg text-primary">{step.title}</h3>
                <p className="mt-2 max-w-md leading-relaxed text-muted-foreground">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const CATEGORIES = [
  {
    id: "knit",
    label: "Circular Knit",
    image: knitImg,
    alt: "Folded cotton jersey t-shirts and pique polo shirts",
    items:
      "Basic and fancy T-shirts, polo shirts, raglan, cut & sew, nightwear, tank tops, turtleneck and mock neck, shorts, underwear and sweatshirts — for men, ladies, boys, girls and babies.",
    fabrics: "Single jersey, rib, interlock, pique, fleece and yarn-dyed stripes.",
  },
  {
    id: "woven",
    label: "Woven",
    image: wovenImg,
    alt: "Stack of woven cotton shirt, chino trousers and denim pants",
    items:
      "Shirts, pants, denim pants, cargo and Bermuda shorts, chino, jackets, trousers, aprons, workwear and outdoor wear.",
    fabrics: "Cotton twill, canvas, flannel and a full range of denim constructions.",
  },
  {
    id: "sweater",
    label: "Knitwear / Sweater",
    image: sweaterImg,
    alt: "Stacked knitted sweaters and cardigans in navy and oatmeal",
    items:
      "Cardigans, pullovers, shrugs and jumpers in half zip, full zip, round neck, V-neck and high neck.",
    fabrics: "Gauge range from coarse to fine in cotton, acrylic and blended yarns.",
  },
];

export function Products() {
  const [active, setActive] = useState<string>("knit");
  const current = CATEGORIES.find((c) => c.id === active) ?? CATEGORIES[0]!;


  return (
    <section id="products" className="section-pad bg-secondary">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Product Range"
          title="Knit, woven and sweater programmes for every age group"
        />

        <div role="tablist" aria-label="Product categories" className="mt-12 flex flex-wrap gap-px">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              role="tab"
              type="button"
              id={`tab-${c.id}`}
              aria-selected={active === c.id}
              aria-controls={`panel-${c.id}`}
              onClick={() => setActive(c.id)}
              className={`px-6 py-3 text-[0.72rem] font-bold uppercase tracking-[0.16em] transition-colors ${
                active === c.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:text-primary"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          id={`panel-${current.id}`}
          aria-labelledby={`tab-${current.id}`}
          className="mt-px grid gap-px bg-border md:grid-cols-[1fr_1.2fr]"
        >
          <img
            src={current.image}
            alt={current.alt}
            width={1024}
            height={1280}
            loading="lazy"
            className="h-72 w-full object-cover md:h-full"
          />
          <div className="bg-card p-9 md:p-12">
            <h3 className="text-2xl text-primary">{current.label}</h3>
            <p className="mt-5 leading-relaxed text-muted-foreground">{current.items}</p>
            <p className="eyebrow mt-8 text-primary">Fabric range</p>
            <p className="mt-3 leading-relaxed text-muted-foreground">{current.fabrics}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="bg-accent px-6 py-3 text-center text-[0.72rem] font-bold uppercase tracking-[0.16em] text-accent-foreground transition-colors hover:bg-gold-soft"
              >
                Download Product Catalogue
              </a>
              <a
                href="#contact"
                className="border border-primary px-6 py-3 text-center text-[0.72rem] font-bold uppercase tracking-[0.16em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Request Fabric Specifications
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Compliance() {
  return (
    <section id="compliance" className="section-pad">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Quality & Compliance"
          title="Factories audited against the standards your sourcing policy already names"
          intro="We work only with units that can stand an audit, and we accept third-party inspection as part of every order."
        />

        <div className="mt-14 grid gap-px bg-border lg:grid-cols-3">
          <div className="bg-card p-9">
            <BadgeCheck size={22} className="text-accent" aria-hidden />
            <h3 className="mt-5 text-lg text-primary">Certifications & standards</h3>
            <ul className="mt-5 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              {["ISO", "WRAP", "BSCI", "SEDEX", "Oeko-Tex", "Accord", "Alliance"].map((c) => (
                <li key={c} className="border border-border px-3 py-2 text-center">
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card p-9">
            <ShieldCheck size={22} className="text-accent" aria-hidden />
            <h3 className="mt-5 text-lg text-primary">Third-party inspection</h3>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              We accept and coordinate inspections by Bureau Veritas, TÜV, ITS and SGS, and issue a
              certificate of inspection before shipment.
            </p>
          </div>
          <div className="bg-card p-9">
            <Handshake size={22} className="text-accent" aria-hidden />
            <h3 className="mt-5 text-lg text-primary">Labor & ethical standards</h3>
            <ul className="mt-5 space-y-3 leading-relaxed text-muted-foreground">
              <li>No child labor and no forced labor in any partner unit.</li>
              <li>Safe, hygienic working environment with documented practice.</li>
              <li>Compliance with national labor law and environmental regulation.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Terms() {
  const items = [
    {
      icon: Timer,
      title: "Delivery",
      text: "Counted from L/C reception date — around 60 days plus transit for knitted garments; 45 days is possible depending on quality and situation.",
    },
    {
      icon: Ship,
      title: "Shipment",
      text: "FOB or C&F, FCL or LCL, by sea or air. Sea transit to Europe takes roughly 3–4 weeks; air around one week.",
    },
    {
      icon: CreditCard,
      title: "Payment",
      text: "L/C at sight, irrevocable and transferable, compliant with UCPDC (ICC Publication).",
    },
  ];
  return (
    <section id="terms" className="section-pad bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Shipment & Payment" title="Clear terms, agreed up front" tone="light" />
        <div className="mt-14 grid gap-px bg-primary-foreground/15 md:grid-cols-3">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-primary p-9">
              <Icon size={24} className="text-accent" aria-hidden />
              <h3 className="mt-5 text-lg text-primary-foreground">{title}</h3>
              <p className="mt-3 leading-relaxed text-primary-foreground/70">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1fr_1.1fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Send your inquiry — we reply within 24–48 hours"
            intro="Share your product, quantity and target price, and our merchandising team will come back with a costing and a realistic lead time."
          />
          <ul className="mt-10 space-y-5 text-sm">
            <li className="flex gap-4">
              <MapPin size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden />
              <span className="leading-relaxed text-muted-foreground">
                Ali Plaza-2, 5th Floor, 16 Lalchand Road, Chawak Bazar, Chittagong, Bangladesh
              </span>
            </li>
            <li className="flex gap-4">
              <Mail size={18} className="shrink-0 text-accent" aria-hidden />
              <a href="mailto:info@eminentsourcing.com" className="text-muted-foreground hover:text-primary">
                info@eminentsourcing.com
              </a>
            </li>
            <li className="flex gap-4">
              <Phone size={18} className="shrink-0 text-accent" aria-hidden />
              <a href="tel:+8801700000000" className="text-muted-foreground hover:text-primary">
                +880 1700 000 000
              </a>
            </li>
          </ul>
          <iframe
            title="Map showing Eminent Sourcing Ltd office in Chawak Bazar, Chittagong"
            src="https://www.openstreetmap.org/export/embed.html?bbox=91.83%2C22.33%2C91.88%2C22.37&layer=mapnik&marker=22.3512%2C91.8555"
            loading="lazy"
            className="mt-10 h-64 w-full border border-border"
          />
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="bg-card p-8 md:p-10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" name="name" required />
            <Field label="Company" name="company" />
            <Field label="Country" name="country" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" type="tel" />
            <div>
              <label htmlFor="interest" className="eyebrow text-primary">
                Product Interest
              </label>
              <select
                id="interest"
                name="interest"
                className="mt-2 h-11 w-full border border-input bg-background px-3 text-sm text-foreground"
              >
                <option>Circular Knit (Jersey Wear)</option>
                <option>Woven</option>
                <option>Knitwear / Sweater</option>
                <option>Mixed programme</option>
              </select>
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="message" className="eyebrow text-primary">
              Message / Order details
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-2 w-full border border-input bg-background p-3 text-sm text-foreground"
              placeholder="Style, quantity, target price, delivery window"
            />
          </div>
          <button
            type="submit"
            className="mt-7 inline-flex items-center gap-2 bg-accent px-7 py-4 text-[0.75rem] font-bold uppercase tracking-[0.18em] text-accent-foreground transition-colors hover:bg-gold-soft"
          >
            <Send size={16} aria-hidden /> Send Inquiry
          </button>
          <p aria-live="polite" className="mt-4 text-sm text-muted-foreground">
            {sent
              ? "Thank you — your inquiry has been noted. Our team replies within 24–48 hours."
              : "Inquiries are usually answered within 24–48 hours."}
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow text-primary">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 h-11 w-full border border-input bg-background px-3 text-sm text-foreground"
      />
    </div>
  );
}
