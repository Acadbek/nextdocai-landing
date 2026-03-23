"use client";

import { useState } from "react";

import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    monthlyPrice: "$0",
    yearlyPrice: "$0",
    monthlyLabel: "per month",
    yearlyLabel: "per month",
    description: "Free for everyone",
    badge: null,
    features: [
      "5,000 AI words/month",
      "2,000 words max per document",
      "Unlimited documents",
      "Limited AI models",
      "One-click doc generation from prompts",
      "AI editor — smart writing & rewriting",
      "AI chat, write mode & next sentence",
      "AI search with real-time internet",
      "Charts & tables from text or data",
      "Reference files (up to 5/document)",
      "Knowledge base support",
      "AI translation",
      "PDF & Word export",
    ],
  },
  {
    name: "Pro",
    monthlyPrice: "$28",
    yearlyPrice: "$12",
    monthlyLabel: "/mo",
    yearlyLabel: "/mo",
    description: "For growing teams",
    badge: "Save 55% with yearly",
    features: [
      "Everything in Free, plus:",
      "Frontier AI models (unlimited)",
      "Humanize AI content",
      "100,000 AI words/month",
      "10,000 words max per document",
      "Reference files (up to 20/document)",
      "Unlimited documents",
      "Unlimited text transformations",
      "Priority AI generation",
      "Richer one-click doc generation",
    ],
  },
  {
    name: "Power",
    monthlyPrice: "$49",
    yearlyPrice: "$20",
    monthlyLabel: "/mo",
    yearlyLabel: "/mo",
    description: "For power users",
    badge: "Save 59% with yearly",
    features: [
      "Everything in Pro, plus:",
      "All AI models (unlimited)",
      "Unlimited AI words/month",
      "Unlimited words per document",
      "Fastest priority AI generation",
      "Advanced long-form & complex docs",
      "Bulk generation & transformations",
      "Early access to new features",
      "Priority support",
    ],
  },
];

export const Pricing = ({
  className,
  title,
  subtitle,
}: {
  className?: string;
  title?: string;
  subtitle?: string;
}) => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className={cn("py-20 lg:py-28", className)}>
      <div className="container max-w-5xl">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            {title ?? "Pricing"}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance font-serif">
            {subtitle ?? "Start for free. Upgrade when you need more power."}
          </p>
        </div>

        {/* Toggle */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <span className={cn("text-sm font-medium", !isAnnual && "text-foreground", isAnnual && "text-muted-foreground")}>Monthly</span>
          <Switch
            checked={isAnnual}
            onCheckedChange={() => setIsAnnual(!isAnnual)}
            aria-label="Toggle annual billing"
          />
          <span className={cn("text-sm font-medium", isAnnual && "text-foreground", !isAnnual && "text-muted-foreground")}>
            Annual
          </span>
          <span className={cn("rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium transition-opacity", isAnnual ? "opacity-100" : "opacity-0")} style={{ color: "oklch(0.65 0.18 86.47)" }}>
            Save up to 59%
          </span>
        </div>

        <div className="mt-8 grid items-start gap-5 text-start md:mt-12 md:grid-cols-3 lg:mt-10">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                plan.name === "Pro" ? "scale-[1.02] border-[oklch(0.65_0.18_86.47)] ring-3 ring-[oklch(0.65_0.18_86.47)] dark:border-[oklch(0.65_0.18_86.47)/50] dark:ring-[oklch(0.65_0.18_86.47)/30]" : ""
              )}
            >
              <CardContent className="flex flex-col gap-6 px-6 py-5">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-foreground font-semibold">{plan.name}</h3>
                    {isAnnual && plan.badge && (
                      <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium" style={{ color: "oklch(0.65 0.18 86.47)" }}>
                        {plan.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-foreground">
                      {isAnnual ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {isAnnual ? plan.yearlyLabel : plan.monthlyLabel}
                    </span>
                    {isAnnual && plan.name !== "Free" && (
                      <span className="text-muted-foreground text-xs line-through ml-1">
                        {plan.monthlyPrice}/mo
                      </span>
                    )}
                  </div>
                  {plan.name === "Free" && (
                    <p className="text-muted-foreground text-sm">{plan.description}</p>
                  )}
                </div>

                <Button
                  className="w-full dark:border-border"
                  variant={plan.name === "Pro" ? "default" : "outline"}
                  style={plan.name === "Pro" ? { backgroundColor: "oklch(0.65 0.18 86.47)", color: "white", borderColor: "oklch(0.55 0.20 86.47)" } : undefined}
                >
                  Get started
                </Button>

                <div className="space-y-2.5">
                  {plan.features.map((feature, i) => (
                    <div
                      key={i}
                      className={cn(
                        "flex items-start gap-1.5",
                        i === 0 && plan.name !== "Free"
                          ? "text-foreground font-medium text-sm"
                          : "text-muted-foreground"
                      )}
                    >
                      {(i > 0 || plan.name === "Free") && (
                        <Check className="size-4 mt-0.5 shrink-0 dark:opacity-60" style={{ color: "oklch(0.65 0.18 86.47)" }} />
                      )}
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
