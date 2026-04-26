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
];

function ClientLogoStrip() {
  return (
    <div className="client-logo-marquee-set">
      {CLIENT_LOGOS.map((logo) => (
        <img
          key={logo.src}
          src={logo.src}
          alt=""
          className={`client-logo-marquee-logo${
            logo.src.includes("amex_white_transparent")
              ? " client-logo-marquee-logo--amex"
              : ""
          }${
            logo.src.includes("bu_white_no_bg")
              ? " client-logo-marquee-logo--bu"
              : ""
          }${
            logo.src.includes("sarankco_white")
              ? " client-logo-marquee-logo--sarankco"
              : ""
          }${
            logo.src.includes("fmc_white")
              ? " client-logo-marquee-logo--fmc"
              : ""
          }`}
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
