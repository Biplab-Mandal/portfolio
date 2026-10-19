import { Mail, Network, Phone } from "lucide-react";

import Container from "@/components/layout/container";

const contactLinks = [
  {
    label: "Phone",
    value: "+91-7077497680",
    href: "tel:+917077497680",
    icon: Phone,
  },
  {
    label: "Email",
    value: "biplabmandal7077@gmail.com",
    href: "mailto:biplabmandal7077@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/biplab-mandal/",
    href: "https://www.linkedin.com/in/biplab-mandal/",
    icon: Network,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 py-32">
      <Container>
        <div className="mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Contact
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {contactLinks.map(({ label, value, href, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              aria-label={
                external
                  ? `${label}: ${value} (opens in a new tab)`
                  : `${label}: ${value}`
              }
              className="group flex min-w-0 items-start gap-4 rounded-2xl border border-white/10 bg-[#0b101d]/75 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-[#0d1322] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-cyan-300 transition-colors group-hover:border-cyan-400/20 group-hover:bg-cyan-400/[0.06]">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-medium text-slate-400">
                  {label}
                </span>
                <span className="mt-1 block break-all text-base font-medium text-white transition-colors group-hover:text-cyan-300">
                  {value}
                </span>
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
