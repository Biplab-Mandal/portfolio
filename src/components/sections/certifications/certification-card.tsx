"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  icon: React.ElementType;
  url?: string;
  image?: string;
}

interface Props {
  certification: Certification;
  index: number;
}

export default function CertificationCard({
  certification,
  index,
}: Props) {
  const Icon = certification.icon;

  const cardProps = {
    initial: {
      opacity: 0,
      y: 25,
    },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once: true,
      amount: 0.15,
    },
    transition: {
      duration: 0.45,
      delay: index * 0.06,
    },
    whileHover: {
      y: -4,
    },
    className: `
        group
        relative
        flex
        min-h-[166px]
        w-full
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-[#0b101d]/75
        p-5
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-cyan-400/30
        hover:bg-[#0d1322]
        hover:shadow-[0_0_45px_rgba(34,211,238,0.06)]
      `,
  };

  const cardContent = (
    <>
      {/* Subtle top highlight */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-5
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-cyan-400/40
          to-transparent
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Header */}
      <div className="flex items-start justify-between">
        {/* Icon */}
        <div
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            border
            border-white/10
            bg-white/[0.03]
            text-slate-300
            transition-all
            duration-300
            group-hover:border-cyan-400/20
            group-hover:bg-cyan-400/[0.06]
            group-hover:text-cyan-300
          "
        >
          <Icon className="h-5 w-5" />
        </div>

        {certification.url && certification.image ? (
          <a
            href={certification.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Verify ${certification.title}`}
          >
            <ExternalLink
              className="
                h-4
                w-4
                text-cyan-400/70
                transition-all
                duration-300
                group-hover:text-cyan-300
                group-hover:scale-110
              "
            />
          </a>
        ) : certification.url ? (
          <ExternalLink
            className="
              h-4
              w-4
              text-cyan-400/70
              transition-all
              duration-300
              group-hover:text-cyan-300
              group-hover:scale-110
            "
          />
        ) : (
          <span className="text-right text-xs text-slate-500">
            {certification.image
              ? "Local preview · No online verification link"
              : "Verification link unavailable"}
          </span>
        )}
      </div>

      {certification.image && (
        <a
          href={certification.image}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View full ${certification.title} certificate (opens in a new tab)`}
          className="relative mt-5 block h-36 w-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-2"
        >
          <Image
            src={certification.image}
            alt={`${certification.title} certificate`}
            fill
            sizes="(min-width: 1280px) 30vw, (min-width: 768px) 50vw, 100vw"
            className="object-contain"
          />
        </a>
      )}

      {/* Content */}
      <div className={certification.image ? "mt-4" : "mt-5"}>
        <h3
          className="
            text-[17px]
            font-semibold
            leading-6
            tracking-tight
            text-white
            transition-colors
            duration-300
            group-hover:text-slate-100
          "
        >
          {certification.title}
        </h3>

        <p
          className="
            mt-1.5
            text-sm
            font-medium
            text-cyan-400
          "
        >
          {certification.issuer}
        </p>

        <p
          className="
            mt-2
            text-sm
            text-slate-500
          "
        >
          {certification.date}
        </p>
      </div>
    </>
  );

  return certification.url && !certification.image ? (
    <motion.a
      href={certification.url}
      target="_blank"
      rel="noopener noreferrer"
      {...cardProps}
    >
      {cardContent}
    </motion.a>
  ) : (
    <motion.article {...cardProps}>{cardContent}</motion.article>
  );
}