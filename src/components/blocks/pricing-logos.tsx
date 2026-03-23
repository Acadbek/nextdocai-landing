import Image from "next/image";

import Marquee from "react-fast-marquee";

const LOGOS = [
  { name: "Client 1", src: "/images/ns-client-logo-1.svg", darkSrc: "/images/ns-client-logo-dark-1.svg" },
  { name: "Client 2", src: "/images/ns-client-logo-2.svg", darkSrc: "/images/ns-client-logo-dark-2.svg" },
  { name: "Client 3", src: "/images/ns-client-logo-3.svg", darkSrc: "/images/ns-client-logo-dark-3.svg" },
  { name: "Client 4", src: "/images/ns-client-logo-4.svg", darkSrc: "/images/ns-client-logo-dark-4.svg" },
  { name: "Client 5", src: "/images/ns-client-logo-5.svg", darkSrc: "/images/ns-client-logo-dark-5.svg" },
];

export const PricingLogos = () => (
  <div className="overflow-hidden py-8 border-y">
    <Marquee pauseOnHover speed={40} gradient={false}>
      {[...LOGOS, ...LOGOS].map((logo, i) => (
        <div key={i} className="mx-10 flex items-center">
          <Image
            src={logo.src}
            alt={logo.name}
            width={120}
            height={32}
            className="h-7 w-auto object-contain opacity-50 dark:hidden"
          />
          <Image
            src={logo.darkSrc}
            alt={logo.name}
            width={120}
            height={32}
            className="h-7 w-auto object-contain opacity-50 hidden dark:block"
          />
        </div>
      ))}
    </Marquee>
  </div>
);
