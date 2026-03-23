import Image from "next/image";

const TESTIMONIALS = [
  {
    name: "James R.",
    role: "Business Consultant",
    avatar: "/images/ns-avatar-1.png",
    quote:
      "NextDoc AI completely changed how I prepare client proposals. I can generate structured documents in minutes, refine them using AI chat, and organize everything by project. The ability to switch between GPT and Claude depending on tone is a game-changer. This seamless integration has significantly increased my efficiency and the quality of my deliverables.",
  },
  {
    name: "Emily K.",
    role: "Content Strategist",
    avatar: "/images/ns-avatar-2.png",
    quote:
      "I've tried multiple AI writing tools, but NextDoc feels different. The version control, streaming generation, and document-level chat make it feel like a true writing workspace — not just a prompt box.",
  },
  {
    name: "Daniel M.",
    role: "SaaS Founder",
    avatar: "/images/ns-avatar-3.png",
    quote:
      "The project-based knowledge system is incredibly powerful. I upload all my research and reference documents once, and every new report automatically uses that context. It saves hours every week.",
  },
  {
    name: "Sophia L.",
    role: "Marketing Lead",
    avatar: "/images/ns-avatar-4.png",
    quote:
      "The text transformation tools are amazing. I can rewrite content into different tones, create executive summaries, and simplify technical explanations instantly. It's like having an AI editing team.",
  },
  {
    name: "Dr. Aaron P.",
    role: "Research Fellow",
    avatar: "/images/ns-avatar-5.png",
    quote:
      "The structured document generation and word-budget control make academic writing much easier. I also love being able to maintain version history while refining sections through chat.",
  },
  {
    name: "Olivia T.",
    role: "Operations Manager",
    avatar: "/images/ns-avatar-6.png",
    quote:
      "Sharing documents with clients is seamless. Secure link-based access and edit permissions make collaboration simple and professional. This isn't just an AI tool — it's a complete document platform.",
  },
];

export const UseCasesPageTestimonials = () => (
  <section className="py-20 lg:py-28">
    <div className="container">
      <div className="mb-12 text-center">
        <h2 className="text-2xl tracking-tight md:text-3xl lg:text-4xl">
          See what's working for our users
        </h2>
        <p className="text-muted-foreground mt-3 text-base font-serif">
          Thoughts from people using NextDoc in their everyday work.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map(({ name, role, avatar, quote }) => (
          <div key={name} className="flex flex-col gap-4 rounded-2xl border bg-card p-6">
            <p className="text-muted-foreground text-sm leading-relaxed font-serif flex-1">
              {quote}
            </p>
            <div className="flex items-center gap-3">
              <Image
                src={avatar}
                alt={name}
                width={36}
                height={36}
                className="rounded-full object-cover size-9"
              />
              <div>
                <div className="text-sm">{name}</div>
                <div className="text-muted-foreground text-xs">{role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
