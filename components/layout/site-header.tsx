"use client";

import { Menu, X, ArrowUpRight, Globe } from "lucide-react";
import {useTranslations} from 'next-intl';
import {Link, usePathname} from '@/i18n/navigation';
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/layout/container";
import {LanguageSwitcher} from '@/components/layout/language-switcher';
import { navigationItems } from "@/lib/navigation";
import { cn } from "@/lib/utils";

function isCurrent(pathname: string, href: string) {
  return href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const t = useTranslations('header');
  const nav = useTranslations('nav');
  const common = useTranslations('common');
  const [menuOpen, setMenuOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    if (!menuOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        triggerRef.current?.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <>
      <header
        className="sticky top-0 z-40 border-b border-cream/10 bg-forest/95 backdrop-blur-md text-cream transition-all duration-300"
        data-surface="dark"
      >
        <Container className="flex items-center justify-between gap-4 sm:gap-6 py-3 sm:py-3.5">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 sm:gap-3 shrink-0"
            aria-label={t('homeLabel')}
            onClick={() => setMenuOpen(false)}
          >
            <div className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full overflow-hidden border border-cream/25 shadow-xs shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/nira-logo-mark.webp"
                alt="NIRA logo mark"
                width={40}
                height={40}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl font-medium tracking-[0.04em] text-white leading-none">
                NIRA
              </span>
              <span className="text-[0.5625rem] sm:text-[0.625rem] tracking-[0.22em] text-cream/70 uppercase mt-1">
                Nature Into Assets
              </span>
            </div>
          </Link>

          {/* Desktop Navigation (lg+) */}
          <nav
            aria-label={t('primaryNav')}
            className="nira-desktop-nav hidden lg:flex items-center shrink-0"
          >
            <ul className="flex items-center gap-5 xl:gap-7">
              {navigationItems.map((item) => {
                const current = isCurrent(pathname, item.href);
                const label = nav(item.key);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={current ? "page" : undefined}
                      className={cn(
                        "relative inline-flex items-center py-1.5 text-xs xl:text-sm font-medium tracking-wide whitespace-nowrap shrink-0 transition-colors duration-200",
                        current
                          ? "text-white font-semibold"
                          : "text-cream/70 hover:text-white",
                      )}
                    >
                      <span>{label}</span>
                      <span
                        className={cn(
                          "absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full bg-amber-accent transition-opacity duration-200",
                          current ? "opacity-100" : "opacity-0",
                        )}
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right CTA for Desktop (lg+) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <LanguageSwitcher />
            <Link
              href="/partnership"
              className="inline-flex items-center gap-1.5 rounded-pill bg-cream text-forest hover:bg-sand px-3.5 xl:px-4 py-1.5 xl:py-2 text-xs font-semibold tracking-wider uppercase transition-all duration-200 shadow-sm hover:scale-102 active:scale-98 whitespace-nowrap shrink-0"
            >
              <span className="hidden xl:inline">{t('partnerLong')}</span>
              <span className="xl:hidden">{t('partner')}</span>
              <ArrowUpRight size={13} className="text-forest shrink-0" />
            </Link>
          </div>

          {/* Hamburger Menu Trigger for Mobile & Tablet (< lg) */}
          <button
            ref={triggerRef}
            type="button"
            aria-controls="compact-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? t('closeMenu') : t('openMenu')}
            className="nira-menu-trigger inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-cream/25 bg-cream/10 px-3.5 py-1.5 text-xs font-semibold text-cream hover:bg-cream/20 hover:border-cream/40 transition-all duration-200 active:scale-95 shadow-xs lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <X aria-hidden="true" size={18} />
            ) : (
              <Menu aria-hidden="true" size={18} />
            )}
            <span className="hidden sm:inline">
              {menuOpen ? t('closeMenu') : t('menu')}
            </span>
          </button>
        </Container>
      </header>

      {/* Backdrop overlay for Mobile & Tablet drawer */}
      <div
        aria-hidden="true"
        className={cn(
          "fixed inset-0 z-50 bg-black/65 backdrop-blur-xs transition-opacity duration-300 lg:hidden",
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
        onClick={() => setMenuOpen(false)}
      />

      {/* Slide-over Drawer from the right for Mobile & Tablet Portrait (< lg) */}
      <aside
        id="compact-navigation"
        aria-label={t('mobileNav')}
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-sm sm:max-w-md bg-cream text-ink border-l border-coconut/15 shadow-2xl flex flex-col justify-between p-6 sm:p-7 transition-transform duration-300 ease-out lg:hidden overflow-y-auto",
          menuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div>
          {/* Drawer Header with Brand & Close Button */}
          <div className="flex items-center justify-between pb-4 border-b border-coconut/15">
            <Link
              href="/"
              className="flex items-center gap-2.5"
              onClick={() => setMenuOpen(false)}
            >
              <div className="relative flex h-9 w-9 items-center justify-center rounded-full overflow-hidden border border-forest/20 shadow-xs shrink-0">
                <Image
                  src="/images/nira-logo-mark.webp"
                  alt="NIRA logo mark"
                  width={36}
                  height={36}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold tracking-[0.03em] text-forest leading-none">
                  NIRA
                </span>
                <span className="text-[0.625rem] font-semibold tracking-[0.2em] text-coconut uppercase mt-0.5">
                  ROOM TO GROW
                </span>
              </div>
            </Link>

            <button
              type="button"
              aria-label={t('closeMenu')}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-sand/60 hover:bg-sand text-ink transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              <X size={18} />
            </button>
          </div>

          {/* Section 1: MENU NAVIGASI */}
          <div className="mt-6">
            <h2 className="text-[0.6875rem] font-bold tracking-[0.16em] uppercase text-coconut mb-2.5">
              {t('navigationHeading')}
            </h2>
            <ul className="space-y-1">
              {navigationItems.map((item) => {
                const current = isCurrent(pathname, item.href);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={current ? "page" : undefined}
                      className={cn(
                        "flex min-h-11 items-center justify-between rounded-lg px-3 py-2 text-base transition-colors",
                        current
                          ? "bg-sand/70 font-semibold text-forest"
                          : "text-forest/90 hover:bg-sand/40 hover:text-forest",
                      )}
                      onClick={() => setMenuOpen(false)}
                    >
                      <span>{nav(item.key)}</span>
                      {current ? (
                        <span className="h-1.5 w-1.5 rounded-full bg-forest" />
                      ) : (
                        <ArrowUpRight size={15} className="text-forest/30" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom CTA Area */}
        <div className="mt-8 pt-5 border-t border-coconut/15 space-y-3">
          <div className="flex items-center justify-between rounded-xl bg-sand/50 border border-coconut/15 px-3.5 py-2">
            <div className="flex items-center gap-2">
              <Globe size={14} className="text-coconut shrink-0" />
              <span className="text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-coconut">
                {common('language')}
              </span>
            </div>
            <LanguageSwitcher light />
          </div>
          <Link
            href="/partnership"
            className="flex min-h-12 w-full items-center justify-center gap-2 rounded-pill bg-forest hover:bg-forest-light text-cream font-semibold py-3.5 px-6 shadow-md transition-all active:scale-98 text-sm"
            onClick={() => setMenuOpen(false)}
          >
            <span>{t('startCollaboration')}</span>
            <ArrowUpRight size={16} />
          </Link>
          <p className="text-[0.6875rem] text-ink-muted/80 text-center leading-relaxed pt-0.5">
            {t('drawerNote')}
          </p>
        </div>
      </aside>
    </>
  );
}
