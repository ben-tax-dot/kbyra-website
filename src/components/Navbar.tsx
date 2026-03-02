"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { navigation, brand } from "@/content/site";
import { Menu, X } from "lucide-react";

function clsx(...arr: Array<string | false | undefined | null>) {
  return arr.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = useMemo(() => navigation.filter((n) => n.href !== "/"), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div
        className={clsx(
          "transition-all duration-300",
          scrolled
            ? "backdrop-blur-xl border-b border-white/10 bg-black/50"
            : "bg-transparent"
        )}
      >
        <div className="container-pad h-16 flex items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-bold transition-colors group-hover:bg-white/10">
              {brand.name.slice(0, 2).toUpperCase()}
            </span>
            <span className="font-bold tracking-tight">
              {brand.name}
              <span className="font-normal text-white/45"> Technologies</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {links.slice(0, 6).map((l) => {
              const isActive = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={clsx(
                    "relative pb-0.5 text-sm transition-colors",
                    isActive ? "text-white" : "text-white/60 hover:text-white/90"
                  )}
                >
                  {l.label}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-px rounded-full bg-gradient-to-r from-violet-400 to-sky-400" />
                  )}
                </Link>
              );
            })}

            <Link
              href="/contact"
              className={clsx(
                "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                pathname === "/contact"
                  ? "border-white/25 bg-white text-black"
                  : "border-white/10 bg-white/5 text-white hover:bg-white/10"
              )}
            >
              Book a Call
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <div
        className={clsx(
          "md:hidden fixed inset-0 z-50 transition-all",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        {/* Backdrop */}
        <div
          className={clsx(
            "absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity",
            open ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setOpen(false)}
        />

        {/* Drawer */}
        <div
          className={clsx(
            "absolute right-0 top-0 h-full w-[86%] max-w-sm border-l border-white/10 bg-black/95 backdrop-blur-xl",
            "transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="p-5 flex items-center justify-between border-b border-white/10">
            <div className="font-bold tracking-tight">{brand.name}</div>
            <button
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-5">
            <div className="text-xs tracking-[0.22em] text-white/45 mb-3">NAVIGATION</div>

            <div className="space-y-1.5">
              {navigation.map((l) => {
                const isActive = pathname === l.href;
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={clsx(
                      "flex items-center justify-between rounded-2xl border px-4 py-3 text-sm transition-colors",
                      isActive
                        ? "border-violet-500/30 bg-violet-500/10 text-white"
                        : "border-white/10 bg-white/5 text-white/75 hover:bg-white/10"
                    )}
                  >
                    {l.label}
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-2 mb-1">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <div className="text-sm font-semibold">Let's talk</div>
              </div>
              <p className="mt-2 text-sm text-white/55">
                Share your goal — we'll respond with a clear action plan within 24 hours.
              </p>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-black hover:opacity-90"
              >
                Book a Free Call →
              </Link>
            </div>

            <div className="mt-5 text-xs text-white/35 space-y-1">
              <div>{brand.location}</div>
              <div>{brand.email}</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
