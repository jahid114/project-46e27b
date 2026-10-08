import monogramAsset from "@/assets/es-monogram.png.asset.json";

const monogram = monogramAsset.url;

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span className="flex items-center gap-3">
      <img
        src={monogram}
        alt="Eminent Sourcing Ltd ES monogram"
        width={48}
        height={48}
        className="h-11 w-11 object-contain"
      />
      <span
        className={
          tone === "light"
            ? "wordmark text-primary-foreground text-[0.78rem] sm:text-[0.9rem]"
            : "wordmark text-primary text-[0.78rem] sm:text-[0.9rem]"
        }
      >
        Eminent Sourcing
        <span className="block text-[0.6rem] tracking-[0.42em] text-accent">Ltd</span>
      </span>
    </span>
  );
}
