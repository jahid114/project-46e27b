import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import {
  About,
  Compliance,
  Contact,
  Hero,
  Products,
  Services,
  Terms,
  Values,
} from "@/components/site/Sections";

const title = "Eminent Sourcing Ltd — Garments Buying House in Chittagong, Bangladesh";
const description =
  "Eminent Sourcing Ltd is a 100% export-oriented RMG sourcing agent and knitwear supplier in Chittagong, Bangladesh, serving apparel buyers in the USA, Canada, UK, Europe and Oceania.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Eminent Sourcing Ltd",
          slogan: "Your Trust Is Our Strength",
          description,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Ali Plaza-2, 5th Floor, 16 Lalchand Road, Chawak Bazar",
            addressLocality: "Chittagong",
            addressCountry: "BD",
          },
          email: "info@eminentsourcing.com",
          telephone: "+8801700000000",
          areaServed: ["US", "CA", "GB", "AU", "NZ", "EU"],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Values />
        <Services />
        <Products />
        <Compliance />
        <Terms />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
