"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Crown, X } from "lucide-react";

const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.ownholidayclub.app";
const APP_STORE_URL =
  "https://apps.apple.com/in/app/own-holiday-club/id6741328417";

function StoreBadge({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex min-h-12 flex-1 items-center justify-center rounded-xl bg-slate-950 px-3 py-2 text-center text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
      aria-label={label}
    >
      {children}
    </a>
  );
}

export default function AppDownloadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
    const timer = window.setTimeout(() => setIsOpen(true), 900);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/70 px-4 py-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="anniversary-offer-title"
    >
      <button
        type="button"   
        className="absolute inset-0 cursor-default" 
        onClick={() => setIsOpen(false)}
        aria-label="Close app download popup"
      />

      <div className="relative max-h-[calc(100svh-3rem)] w-full max-w-[460px] overflow-y-auto rounded-[2rem] bg-white shadow-[0_30px_100px_rgba(15,23,42,0.45)]">
        <div className="relative h-36 overflow-hidden bg-slate-900 sm:h-44">
          <Image
            src="/app.jpg"
            alt="A relaxing holiday destination"
            fill
            sizes="(max-width: 460px) 100vw, 460px"
            className="object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 rounded-full bg-black/30 p-2 text-white transition hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close offer popup"
          >
            <X size={19} />
          </button>
          <div className="absolute bottom-4 left-5 flex items-center gap-3 text-white sm:left-7">
            <div className="rounded-xl bg-white p-2 shadow-lg">
              <Image src="/logo.png" alt="" width={82} height={34} className="h-7 w-auto object-contain" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
              14th Anniversary
            </span>
          </div>
        </div>

        <div className="px-5 pb-6 pt-6 sm:px-7 sm:pb-7">
          <div className="mb-5">
            <div className="flex items-start gap-3">
              <div className="shrink-0 rounded-2xl bg-amber-100 p-3 text-amber-700">
                <Crown size={22} strokeWidth={2.5} />
              </div>
              <h2
                id="anniversary-offer-title"
                className="font-serif text-[25px] font-semibold leading-[1.16] tracking-[-0.025em] text-slate-900 sm:text-[29px]"
              >
                Unlock our{" "}
                <span className="text-amber-800">14th Anniversary</span>{" "}
                Special Offer
              </h2>
            </div>

            <div className="mt-4 rounded-2xl border border-amber-200/80 bg-amber-50/70 px-4 py-3.5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                OHC Privilege Membership
              </p>
              <div className="mt-1 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span>
                  <span className="sr-only">Normally </span>
                  <span className="text-lg font-bold text-slate-700 line-through decoration-red-600 decoration-[3px]">
                    ₹52,789
                  </span>
                </span>
                <span className="ml-auto flex items-baseline gap-2">
                  <span className="text-3xl font-bold leading-none tracking-tight text-amber-800">
                    ₹1
                  </span>
                  <span className="text-sm font-medium text-slate-700">
                    + Admin Fee
                  </span>
                </span>
              </div>
            </div>
            <p className="mt-2.5 text-xs font-medium text-slate-500">
              Limited-time anniversary offer
            </p>
          </div>

          <div className="flex gap-3">
            <StoreBadge href={GOOGLE_PLAY_URL} label="Get it on Google Play">
              <span>
                <span className="block text-[9px] font-normal uppercase tracking-wide text-slate-300">Get it on</span>
                Google Play
              </span>
            </StoreBadge>
            <StoreBadge href={APP_STORE_URL} label="Download on the App Store">
              <span>
                <span className="block text-[9px] font-normal uppercase tracking-wide text-slate-300">Download on the</span>
                App Store
              </span>
            </StoreBadge>
          </div>
          <Link
            href="/membership#tiers"
            onClick={() => setIsOpen(false)}
            className="mt-3 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-amber-300 bg-amber-50 px-3 py-2 text-center text-xs font-semibold text-amber-800 transition hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
          >
            Claim the offer
            <ArrowRight size={16} />
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="mt-4 w-full text-center text-xs font-semibold text-slate-500 underline-offset-4 transition hover:text-slate-800 hover:underline"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}
