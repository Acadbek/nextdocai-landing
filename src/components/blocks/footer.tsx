import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Footer() {
  const navigation = [
    { name: "Product", href: "/#feature-modern-teams" },
    { name: "About Us", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const social = [
    { name: "Xwitter", href: "https://x.com/ausrobdev" },
    { name: "LinkedIn", href: "#" },
  ];

  const legal = [{ name: "Privacy Policy", href: "/privacy" }];

  return (
    <footer className="flex flex-col items-center gap-14 pt-28 lg:pt-32">
      <div className="container space-y-3 text-center">
        <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
          NextDoc for everyone
        </h2>
        <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance font-serif">
          Everything you need to write smarter in one place.
        </p>
        <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance font-serif">
          Create, refine, and manage documents with AI, without switching tools.
        </p>
        <div>
          <Button size="lg" className="mt-4" asChild>
            <a href="https://github.com/shadcnblocks/mainline-nextjs-template">
              Try NextDoc for free
            </a>
          </Button>
        </div>
      </div>

      <nav className="container flex flex-col items-center gap-4">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="font-medium transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
          {social.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="flex items-center gap-0.5 font-medium transition-opacity hover:opacity-75"
              >
                {item.name} <ArrowUpRight className="size-4" />
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {legal.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-muted-foreground text-sm transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-10 w-full overflow-hidden md:mt-14 lg:mt-20">
        <p
          className="select-none text-center font-bold leading-none tracking-tight text-primary"
          style={{
            fontSize: "23.5vw",
            WebkitMaskImage: "linear-gradient(to bottom, currentColor 0%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, currentColor 0%, transparent 100%)",
            opacity: 0.5,
          }}
        >
          nextdoc
        </p>
      </div>
    </footer>
  );
}
