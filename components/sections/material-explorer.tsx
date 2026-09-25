"use client";

import { useState } from "react";
import Image from "next/image";
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

type MaterialPath = {
  id: string;
  part: string;
  scientificPart: string;
  materialName: string;
  destination: string;
  image: string;
  imageAlt: string;
  badge: string;
  description: string;
  properties: string[];
  ecologicalGain: string;
  href: string;
};

const paths: MaterialPath[] = [
  {
    id: "husk",
    part: "Outer Husk",
    scientificPart: "Exocarp & Mesocarp",
    materialName: "Coir Fiber",
    destination: "PANDA COCOfiber & Bio-Tekstil",
    image: "/images/coir-pot.jpg",
    imageAlt: "Natural coconut coir plant pots on wooden surface",
    badge: "Fibrous Biomass",
    description:
      "The fibrous outer layer that shields the coconut fruit contains resilient, naturally lignin-rich fibers. Once extracted without harsh chemicals, it provides the structural backbone for 100% biodegradable vessels and nursery pots.",
    properties: [
      "High lignin content resists rot",
      "Natural air-pruning for plant roots",
      "Complete biological decomposition",
    ],
    ecologicalGain:
      "Direct replacement for single-use polypropylene plastic nursery containers.",
    href: "/products#living",
  },
  {
    id: "pith",
    part: "Husk Residue",
    scientificPart: "Cellular Mesocarp Pith",
    materialName: "Organic Cocopeat",
    destination: "PANDA COCOpeat Substrat Semai",
    image: "/images/cocopeat-tray.jpg",
    imageAlt: "Rich organic cocopeat growing medium with seedlings",
    badge: "Cellular Pith",
    description:
      "Between the long fibers lies a spongy cellular dust that holds water like a sponge. Triple-washed with natural rainwater and pH-neutralized, it serves as the ultimate peat-free growing medium.",
    properties: [
      "Absorbs up to 8x dry weight in water",
      "Optimal air-filled porosity for roots",
      "Stable neutral pH (5.8 – 6.5)",
    ],
    ecologicalGain:
      "Saves fragile peat bog ecosystems from industrial mining while reducing irrigation frequency.",
    href: "/products#grow",
  },
  {
    id: "shell",
    part: "Dense Shell",
    scientificPart: "Hard Endocarp",
    materialName: "Bio-Carbon & Polished Shell",
    destination: "PANDA COCO Bio-Briket & Green Panel",
    image: "/images/energy-concept.webp",
    imageAlt: "Coconut shell charcoal briquettes beside polished shell",
    badge: "Dense Carbon Matrix",
    description:
      "The hard stone-like shell protecting the coconut meat contains high carbon density. In low-emission pyrolysis kilns, it produces clean, long-burning briquettes; hand-carved, it becomes timeless tabletop ware.",
    properties: [
      "High calorific value (~7,200 kcal/kg)",
      "Low ash content (< 3%) and odorless combustion",
      "Polished with pure virgin coconut oil",
    ],
    ecologicalGain:
      "Eliminates open-air agricultural burning and halts wood-based charcoal deforestation.",
    href: "/products#energy",
  },
];

export function MaterialExplorer() {
  const t = useTranslations('materials');
  const common = useTranslations('common');
  const [activeTab, setActiveTab] = useState<string>("husk");
  const activePath = paths.find((p) => p.id === activeTab) ?? paths[0];
  const activeId = activePath.id as 'husk' | 'pith' | 'shell';
  const activeMaterial = {
    ...activePath,
    part: t(`${activeId}.part`),
    materialName: t(`${activeId}.name`),
    destination: t(`${activeId}.destination`),
    imageAlt: t(`${activeId}.imageAlt`),
    badge: t(`${activeId}.badge`),
    description: t(`${activeId}.description`),
    properties: [t(`${activeId}.p1`), t(`${activeId}.p2`), t(`${activeId}.p3`)],
    ecologicalGain: t(`${activeId}.gain`)
  };

  return (
    <div className="mt-8 rounded-card border border-coconut/15 bg-cream shadow-natural overflow-hidden sm:mt-10 xl:mt-12">
      {/* Tab Switcher */}
      <div className="grid grid-cols-3 border-b border-coconut/15 bg-sand/40">
        {paths.map((p, idx) => {
          const isActive = p.id === activeTab;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => setActiveTab(p.id)}
              aria-pressed={isActive}
              className={cn(
                "group flex min-w-0 min-h-[4.5rem] items-center justify-center border-r border-coconut/15 p-2 text-center transition-all duration-200 last:border-r-0 sm:p-3 lg:justify-between lg:p-5 lg:text-left",
                isActive
                  ? "bg-cream text-forest font-semibold shadow-xs"
                  : "text-ink-muted hover:bg-sand/70 hover:text-forest",
              )}
            >
              <div className="min-w-0">
                <span className="text-[0.625rem] font-bold tracking-[0.1em] text-coconut uppercase sm:text-[0.6875rem] sm:tracking-[0.16em]">
                  {common('part')} 0{idx + 1}
                </span>
                <p className="font-display mt-0.5 text-sm leading-tight sm:text-base lg:text-lg">
                  {t(`${p.id as 'husk' | 'pith' | 'shell'}.part`)}
                </p>
              </div>
              <span
                className={cn(
                  "hidden h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs transition-colors lg:flex",
                  isActive
                    ? "bg-forest text-cream font-bold"
                    : "bg-coconut/10 text-coconut group-hover:bg-coconut/20",
                )}
              >
                →
              </span>
            </button>
          );
        })}
      </div>

      {/* Material Details Body */}
      <div className="grid gap-8 p-6 md:p-10 lg:grid-cols-12 lg:items-center">
        {/* Left Column: Image & Badge */}
        <div className="lg:col-span-5">
          <div className="group relative aspect-[4/3] overflow-hidden rounded-card border border-coconut/15 bg-sand/30 shadow-xs">
            <Image
              src={activeMaterial.image}
              alt={activeMaterial.imageAlt}
              fill
              sizes="(max-width: 1023px) 100vw, 40vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
            />
            <span className="absolute top-3 left-3 rounded-full bg-cream/90 px-3 py-1 text-xs font-semibold text-forest uppercase tracking-wider backdrop-blur-xs">
              {activeMaterial.badge}
            </span>
          </div>
          <div className="mt-4 flex items-center justify-between text-xs text-coconut px-1">
            <span className="italic">{activeMaterial.scientificPart}</span>
            <span>{common('outcome')}: {activeMaterial.materialName}</span>
          </div>
        </div>

        {/* Right Column: Narrative & Properties */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-forest/8 px-3 py-1 text-xs font-semibold text-forest">
              <span>{common('primaryApplication')}</span>
              <span>→</span>
              <span className="font-bold">{activeMaterial.destination}</span>
            </div>

            <h3 className="font-display text-lg sm:text-xl lg:text-2xl text-forest mt-3 font-medium leading-snug">
              {activeMaterial.part}: {activeMaterial.materialName}
            </h3>

            <p className="type-body text-ink-muted mt-3 text-sm md:text-base leading-relaxed">
              {activeMaterial.description}
            </p>

            <div className="mt-6 space-y-2.5">
              <p className="text-xs font-bold uppercase tracking-wider text-coconut">
                {common('keyAttributes')}
              </p>
              <ul className="grid gap-2 sm:grid-cols-1">
                {activeMaterial.properties.map((prop) => (
                  <li
                    key={prop}
                    className="flex items-start gap-2 text-sm text-ink/90"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-forest mt-0.5 shrink-0"
                    />
                    <span>{prop}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-field bg-sand/40 border border-coconut/15 p-4 text-xs text-forest">
              <span className="font-bold text-coconut block uppercase tracking-wider mb-1">
                {common('ecologicalGain')}
              </span>
              <p className="text-ink-muted leading-relaxed">
                {activeMaterial.ecologicalGain}
              </p>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-coconut/15">
            <Link
              href={activeMaterial.href as any}
              className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-forest-hover group"
            >
              <span>{common('exploreDerived', {part: activeMaterial.part})}</span>
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
