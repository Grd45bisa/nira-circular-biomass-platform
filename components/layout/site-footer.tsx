import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { ArrowUpRight, MapPin, Mail, Clock, ShieldCheck, Zap } from "lucide-react";

import { Container } from "@/components/layout/container";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Link } from "@/i18n/navigation";
import { navigationItems } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";

export async function SiteFooter() {
  const t = await getTranslations("footer");
  const nav = await getTranslations("nav");

  return (
    <footer
      className="border-t border-coconut/20 bg-forest-active text-cream"
      data-surface="dark"
    >
      <Container>
        {/* Main Footer Grid */}
        <div className="grid gap-10 py-12 sm:py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Col 1: Brand & Strategic Identity (5 cols on lg) */}
          <div className="flex flex-col gap-4 lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-full overflow-hidden shadow-xs shrink-0 bg-cream">
                <Image
                  src="/images/panda-logo-badge.webp"
                  alt="PANDA COCO logo mark"
                  width={36}
                  height={36}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <span className="font-display text-lg font-bold tracking-wide text-cream block leading-tight">
                  PANDA COCO
                </span>
                <span className="text-[0.625rem] font-bold tracking-[0.14em] text-amber-accent uppercase block">
                  Agro-Biomassa Sirkular
                </span>
              </div>
            </div>

            <p className="text-xs italic text-cream/80 leading-relaxed">
              &ldquo;{t("tagline")}&rdquo;
            </p>

            <p className="text-xs text-cream/65 leading-relaxed">
              PANdeglang Domestic Agro COCOnut adalah platform agro-biomassa sirkular dan hub teknologi bersih di Kampung Keboncau, Pandeglang. Kami mentransformasi sabut kelapa menjadi biomaterial industri bermutu ekspor dengan lini mesin listrik modern.
            </p>

            {/* Strategic Badges */}
            <div className="mt-2 flex flex-col gap-2 text-[0.6875rem] text-cream/75">
              <div className="flex items-center gap-2">
                <Zap size={13} className="text-amber-accent shrink-0" />
                <span>{t("hubSupport")}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={13} className="text-amber-accent shrink-0" />
                <span>{t("hubOperatedBy")}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Hub Location & Address (3 cols on lg) */}
          <div className="flex flex-col gap-3 lg:col-span-3">
            <h2 className="text-[0.6875rem] font-bold tracking-[0.18em] text-amber-accent uppercase flex items-center gap-1.5">
              <MapPin size={13} className="text-amber-accent" />
              <span>{t("hubTitle")}</span>
            </h2>

            <address className="not-italic text-xs text-cream/80 leading-relaxed flex flex-col gap-2">
              <p className="font-medium text-cream">
                {siteConfig.contact.facility}
              </p>
              <p>
                {t("hubAddress")}
              </p>
              <p className="text-[0.6875rem] text-cream/55">
                Koordinat: 6°18&apos;31.7&quot;S 106°06&apos;23.8&quot;E (Pandeglang)
              </p>
            </address>

            <div className="mt-2 text-xs text-cream/70 flex items-center gap-2">
              <Clock size={13} className="text-amber-accent shrink-0" />
              <span>{t("contactHours")}</span>
            </div>

            <a
              href="https://maps.google.com/?q=-6.3088,106.1066"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1 text-[0.6875rem] font-semibold text-amber-accent hover:text-cream transition-colors w-fit underline underline-offset-4"
            >
              <span>Buka di Google Maps</span>
              <ArrowUpRight size={11} />
            </a>
          </div>

          {/* Col 3: Direct Contact & Coordination (3 cols on lg) */}
          <div className="flex flex-col gap-3 lg:col-span-3">
            <h2 className="text-[0.6875rem] font-bold tracking-[0.18em] text-amber-accent uppercase flex items-center gap-1.5">
              <Mail size={13} className="text-amber-accent" />
              <span>{t("contactTitle")}</span>
            </h2>

            <div className="flex flex-col gap-3 text-xs text-cream/80">
              <div>
                <span className="block text-[0.6875rem] text-cream/50 uppercase tracking-wider">
                  {t("contactEmailLabel")}
                </span>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="font-medium text-cream hover:text-amber-accent transition-colors flex items-center gap-1.5 mt-0.5"
                >
                  <Mail size={12} className="text-cream/60 shrink-0" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </div>

              <div className="pt-2">
                <Link
                  href="/partnership"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-forest-600 hover:bg-forest-500 text-cream px-4 py-2 text-xs font-semibold shadow-xs transition-colors w-full sm:w-auto"
                >
                  <span>{t("inquire")}</span>
                  <ArrowUpRight size={13} className="text-amber-accent" />
                </Link>
              </div>
            </div>
          </div>

          {/* Col 4: Platform Navigation (2 cols on lg) */}
          <div className="flex flex-col gap-3 lg:col-span-2">
            <h2 className="text-[0.6875rem] font-bold tracking-[0.18em] text-amber-accent uppercase">
              {t("explore")}
            </h2>
            <nav aria-label={t("explore")} className="flex flex-col gap-2 text-xs text-cream/80">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-cream hover:underline underline-offset-4 transition-colors py-0.5"
                >
                  {nav(item.key)}
                </Link>
              ))}
              <Link
                href="/partnership"
                className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-amber-accent hover:text-cream transition-colors"
              >
                <span>{t("inquire")}</span>
                <ArrowUpRight size={12} />
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-4 border-t border-cream/15 py-6 text-[0.6875rem] text-cream/60 sm:flex-row sm:justify-between">
          <LanguageSwitcher />
          <p className="text-center text-[0.6875rem] text-cream/60 sm:text-xs">
            © {new Date().getFullYear()} PANDA COCO (PANdeglang Domestic Agro COCOnut). {t("copyright")}
          </p>
          <div className="flex items-center gap-5 text-xs text-cream/70">
            <Link
              href="/image-credits"
              className="underline underline-offset-4 hover:text-cream transition-colors"
            >
              {t("credits")}
            </Link>
            <Link
              href="/about"
              className="hover:text-cream transition-colors"
            >
              {t("ethos")}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}