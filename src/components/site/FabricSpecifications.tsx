const MATERIALS = [
  { title: "Natural fibers", text: "Cotton, Linen, Wool, Silk, Hemp, and Jute." },
  { title: "Semi-synthetic / regenerated fibers", text: "Rayon, Viscose, Modal, Lyocell, and Acetate." },
  { title: "Synthetic fibers", text: "Polyester, Nylon, Acrylic, Spandex/Elastane, and Polypropylene." },
];

const FABRICS = [
  ["Cotton & Canvas", "Breathable, durable, available in 100% cotton or twill", "T-Shirts, Casual Wear, Children’s Wear, Outerwear"],
  ["Denim", "Heavyweight cotton twill weave", "Jeans, Jackets, Casual Bottoms"],
  ["French Terry & Fleece", "Knitted loop back or napped thermal surface", "Sweatshirts, Tracksuits, Activewear, Cold-weather gear"],
  ["Jersey & Rib Knit", "Single/double stretch knits with high elasticity", "T-Shirts, Tops, Cuffs, Collars, Sportswear"],
  ["Broadcloth & Poplin", "Smooth, dense, tightly woven plain weave", "Formal Dress Shirts, Woven Tops"],
  ["Crepe & Chiffon", "Lightweight, textured, moisture-absorbent, high fluidity", "Evening Wear, Dresses, High-temperature apparel"],
  ["Corduroy & Flannel", "Napped or ridged (wale) insulating structures", "Winter Clothing, Pants, Overshirts"],
  ["Elastane Blends", "Form-fitting stretch performance (5–10% elastane)", "Activewear, Leggings, Swimwear"],
];

const CONSTRUCTIONS = [
  ["Plain weave", "Alternating warp and weft interlacing for maximum durability (e.g., Poplin, Canvas)."],
  ["Twill weave", "Diagonal rib structure offering enhanced flexibility and strength (e.g., Denim, Gabardine)."],
  ["Satin weave", "Floating threads creating a smooth, high-luster surface finish."],
  ["Weft knits", "Single Jersey, Rib Knit, Purl Knit, and Interlock for superior stretch and softness."],
  ["Warp knits", "Tricot and Raschel knits engineered for technical sportswear and specialized textiles."],
];

export function FabricSpecifications() {
  return (
    <section id="fabric-specifications" className="section-pad" aria-labelledby="fabric-specifications-title">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow text-accent">Technical Expertise</p>
          <h2 id="fabric-specifications-title" className="mt-4 text-3xl leading-tight text-primary md:text-[2.6rem]">
            Fabric Specifications &amp; Technical Capabilities
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            At Eminent Sourcing Ltd., we source and develop premium fabrics engineered for performance,
            comfort, and durability. Our technical team oversees every stage of fabric construction,
            weaving, and testing to meet exact international buyer standards.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="text-xl text-primary">Fiber Composition &amp; Materials</h3>
          <dl className="mt-6 grid gap-8 border-t border-border pt-6 md:grid-cols-3">
            {MATERIALS.map(({ title, text }) => (
              <div key={title}>
                <dt className="text-sm font-bold text-primary">{title}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-12">
          <h3 className="text-xl text-primary">Fabric Types &amp; Common Uses</h3>
          <div className="mt-6">
            <table className="w-full table-fixed border-collapse text-left text-sm">
              <caption className="sr-only">Fabric categories, construction characteristics and ideal applications</caption>
              <thead className="hidden bg-primary text-primary-foreground md:table-header-group">
                <tr>
                  <th scope="col" className="w-1/4 px-5 py-4 font-semibold">Fabric category</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Key characteristics &amp; weave</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Ideal applications</th>
                </tr>
              </thead>
              <tbody className="block md:table-row-group">
                {FABRICS.map(([category, characteristics, applications]) => (
                  <tr key={category} className="block border-b border-border py-5 first:border-t md:table-row md:py-0 md:first:border-t-0">
                    <th scope="row" className="block text-base font-semibold text-primary md:table-cell md:px-5 md:py-5 md:text-sm">{category}</th>
                    <td className="mt-3 block leading-relaxed text-muted-foreground md:table-cell md:px-5 md:py-5">
                      <span className="mb-1 block text-xs font-semibold text-primary md:hidden">Characteristics &amp; weave</span>
                      {characteristics}
                    </td>
                    <td className="mt-3 block leading-relaxed text-muted-foreground md:table-cell md:px-5 md:py-5">
                      <span className="mb-1 block text-xs font-semibold text-primary md:hidden">Applications</span>
                      {applications}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <div className="rule-gold pt-6">
            <h3 className="text-xl text-primary">Weaving &amp; Construction Analysis</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We conduct precise structural evaluations to ensure the optimal balance of strength,
              permeability, texture, and flexibility:
            </p>
            <dl className="mt-6 space-y-5">
              {CONSTRUCTIONS.map(([title, text]) => (
                <div key={title}>
                  <dt className="text-sm font-bold text-primary">{title}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="rule-gold pt-6">
            <h3 className="text-xl text-primary">Yarn Parameters &amp; Quality Control</h3>
            <dl className="mt-6 space-y-7">
              <div>
                <dt className="text-sm font-bold text-primary">Yarn counts</dt>
                <dd className="mt-3 leading-relaxed text-muted-foreground">
                  Full range of direct (Tex, Denier) and indirect counting systems across single,
                  2-ply, and multi-ply yarns to achieve exact GSM weight, hand-feel, and strength targets.
                </dd>
              </div>
              <div>
                <dt className="text-sm font-bold text-primary">Testing &amp; quality assurance</dt>
                <dd className="mt-3 leading-relaxed text-muted-foreground">
                  In-house laboratory inspections including Burn Testing, Touch/Hand-feel Verification,
                  Wrinkle Resistance, Stretch &amp; Recovery Testing, Shade Continuity, and Lab Dip Approvals.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}