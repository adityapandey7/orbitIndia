"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone, Mail, ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import { cn, withBasePath } from "@/lib/utils";

const nav = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* top bar */}
      <div className="hidden bg-[#0d0d0d] text-slate-300 md:block">
        <div className="container-x flex items-center justify-between py-1.5 text-xs">
          <div className="flex items-center gap-5">
            <a href={`tel:${site.phones.office.replace(/[^+\d]/g, "")}`} className="flex items-center gap-1.5 transition hover:text-white">
              <Phone className="h-3.5 w-3.5 text-[#ff4d42]" /> {site.phones.office}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-1.5 transition hover:text-white">
              <Mail className="h-3.5 w-3.5 text-[#ff4d42]" /> {site.email}
            </a>
          </div>
          <p className="text-slate-400">
            Mon–Fri 9:30 AM – 5:30 PM · Sat 9:30 AM – 1:00 PM
          </p>
        </div>
      </div>

      {/* logo row */}
      <div className="border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="container-x flex h-20 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={withBasePath("/logo-orbit.png")}
              alt="Orbit"
              width={132}
              height={94}
              className="h-12 w-auto"
              priority
            />
            <span className="hidden leading-none sm:block">
              <span className="block text-sm font-extrabold tracking-tight text-[#161616]">
                Orbit Technologies Pvt. Ltd.
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                ISO 9001:2015 Certified
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <Link href="/contact#quote" className="btn btn-accent hidden sm:inline-flex">
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="rounded-md border border-slate-200 p-2 text-[#161616] transition hover:bg-slate-100 lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* mobile menu */}
        <div className={cn("border-b border-slate-200 bg-white lg:hidden", open ? "block" : "hidden")}>
          <nav className="container-x flex flex-col py-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-[#da1515]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact#quote"
              onClick={() => setOpen(false)}
              className="btn btn-accent my-2"
            >
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      </div>

      {/* black nav bar */}
      <div className="hidden bg-[#161616] lg:block">
        <div className="container-x flex items-center justify-between">
          <nav className="flex items-center gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:text-[#ff4d42]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <span className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-400">
            Analytical instruments · Manufacturing &amp; Distribution
          </span>
        </div>
      </div>
    </header>
  );
}
