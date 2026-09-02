import Image from "next/image";

const CLIENT_LOGOS = [
  { src: "/clientlogos/fmc_white.svg", name: "First Manhattan Co." },
  { src: "/clientlogos/sarankco_white.svg", name: "Sarankco" },
  { src: "/clientlogos/lytics_white.svg", name: "Lytics" },
  { src: "/clientlogos/chargebee_white.svg", name: "Chargebee" },
  { src: "/clientlogos/homeadvisor_white.svg", name: "HomeAdvisor" },
  { src: "/clientlogos/ucl_white.svg", name: "UCL" },
  { src: "/clientlogos/homer.svg", name: "Homer" },
  { src: "/clientlogos/sesame_street_white.svg", name: "Sesame Street" },
  { src: "/clientlogos/fisher_price_white.svg", name: "Fisher Price" },
  { src: "/clientlogos/angi.svg", name: "Angi" },
  { src: "/clientlogos/sephora.svg", name: "Sephora" },
  { src: "/clientlogos/amex_white_transparent.svg", name: "American Express" },
  { src: "/clientlogos/bu_white_no_bg.svg", name: "Boston University" },
  { src: "/clientlogos/avianu_white.png", name: "avianu", width: 240, height: 88 },
  { src: "/clientlogos/mercor_white.png", name: "Mercor", width: 990, height: 343 },
];

function logoModifierClass(src) {
  if (src.includes("amex_white_transparent")) return " client-logo-marquee-logo--amex";
  if (src.includes("bu_white_no_bg")) return " client-logo-marquee-logo--bu";
  if (src.includes("sarankco_white")) return " client-logo-marquee-logo--sarankco";
  if (src.includes("fmc_white")) return " client-logo-marquee-logo--fmc";
  if (src.includes("avianu_white")) return " client-logo-marquee-logo--avianu";
  if (src.includes("mercor_white")) return " client-logo-marquee-logo--mercor";
  return "";
}

function ClientLogoStrip() {
  return (
    <div className="client-logo-marquee-set">
      {CLIENT_LOGOS.map((logo) => (
        <Image
          key={logo.src}
          src={logo.src}
          alt=""
          width={logo.width ?? 120}
          height={logo.height ?? 32}
          className={`client-logo-marquee-logo${logoModifierClass(logo.src)}`}
          aria-hidden="true"
          loading="lazy"
          decoding="async"
        />
      ))}
    </div>
  );
}

export default function ClientLogoMarquee() {
  return (
    <section className="client-logo-marquee" aria-label="Client logos">
      <div className="client-logo-marquee-inner">
        <div className="client-logo-marquee-track" aria-hidden="true">
          <ClientLogoStrip />
          <ClientLogoStrip />
        </div>
      </div>
    </section>
  );
}
