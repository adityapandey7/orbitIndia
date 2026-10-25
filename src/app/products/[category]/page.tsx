import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Phone } from "lucide-react";
import {
  categories,
  getCategory,
  productsByCategory,
} from "@/data/products";
import { site } from "@/data/site";
import { ProductCard } from "@/components/product-card";
import { CategoryIcon } from "@/components/icons";
import { Breadcrumb } from "@/components/breadcrumb";
import { Collapsible } from "@/components/collapsible";
import { FaqAccordion } from "@/components/faq-accordion";
import { SectionHeading } from "@/components/section-heading";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "Category not found" };
  return { title: category.name, description: category.blurb };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const items = productsByCategory(slug);

  // Descriptive H3 subheadings per brand when a category spans brands.
  const brandGroups = items.reduce<Record<string, typeof items>>(
    (acc, p) => {
      (acc[p.brand] ??= []).push(p);
      return acc;
    },
    {},
  );
  const multiBrand = Object.keys(brandGroups).length > 1;

  const related = categories.filter((c) => c.slug !== slug).slice(0, 4);

  return (
    <div>
      <Breadcrumb
        items={[{ label: "Products", href: "/products" }, { label: category.name }]}
      />

      {/* ------------- short top copy: micro-snippet + straight to grid ------------- */}
      <section className="hero-light border-b border-slate-200">
        <div className="container-x py-8 sm:py-10">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#161616] text-white">
              <CategoryIcon slug={category.slug} className="h-6 w-6" />
            </span>
            <div>
              <p className="eyebrow">Product category</p>
              <h1 className="text-2xl font-black leading-tight tracking-tight text-[#161616] sm:text-4xl">
                {category.name}
              </h1>
            </div>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            {category.blurb}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            <span className="font-semibold text-slate-500">
              {items.length} {items.length === 1 ? "product" : "products"} ·
              Supplied, installed &amp; serviced across India
            </span>
            <Link
              href="/contact#quote"
              className="inline-flex items-center gap-1.5 font-semibold text-[#da1515] hover:underline"
            >
              Request a quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* --------------------------- product grid (front & centre) --------------------------- */}
      <section className="container-x py-10">
        <h2 className="text-xl font-extrabold tracking-tight text-[#161616] sm:text-2xl">
          {multiBrand
            ? `All ${category.name.toLowerCase()}`
            : `Buy ${category.name.toLowerCase()} — supplied by Orbit`}
        </h2>

        {items.length > 0 ? (
          multiBrand ? (
            <div className="mt-6 space-y-10">
              {Object.entries(brandGroups).map(([brand, group]) => (
                <div key={brand}>
                  <h3 className="text-base font-bold text-[#161616] sm:text-lg">
                    {category.name} from {brand}
                  </h3>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {group.map((p) => (
                      <ProductCard key={p.slug} product={p} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {items.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          )
        ) : (
          <div className="surface mt-6 p-10 text-center">
            <p className="font-bold text-[#161616]">
              Detailed products coming soon.
            </p>
            <p className="mt-1 text-sm text-slate-600">
              We stock a much wider range than shown here — tell us what you
              need.
            </p>
            <Link href="/contact#quote" className="btn btn-accent mt-5">
              Request a quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </section>

      {/* ------------- long-form copy below the grid, in a Read more block ------------- */}
      <section className="band border-y border-slate-200 py-12">
        <div className="container-x max-w-4xl">
          <SectionHeading
            eyebrow="Buying guide"
            title={`Choosing ${category.name.toLowerCase()}: what buyers should know`}
          />
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            <Collapsible previewLines={5}>
              {category.guide.map((p) => (
                <p key={p.slice(0, 32)} className="mb-4 last:mb-0">
                  {p}
                </p>
              ))}
            </Collapsible>
          </div>

          {/* internal links, descriptive anchor text */}
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-sm font-bold uppercase tracking-wide text-[#161616]">
              Related product ranges
            </h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {related.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/products/${c.slug}`}
                    className="text-sm font-semibold text-[#da1515] hover:underline"
                  >
                    Browse our {c.name.toLowerCase()} range
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ------------------------------ FAQ toward footer ------------------------------ */}
      <section className="container-x py-12">
        <SectionHeading
          align="center"
          eyebrow="FAQ"
          title={`Frequently asked questions about ${category.name.toLowerCase()}`}
        />
        <div className="mt-6">
          <FaqAccordion items={category.faq} />
        </div>
      </section>

      {/* -------------------------------- CTA band -------------------------------- */}
      <section className="quote-band relative overflow-hidden py-12 text-white">
        <div className="container-x relative flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
          <div>
            <p className="text-xl font-extrabold tracking-tight sm:text-2xl">
              Can&apos;t find what you need?
            </p>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-slate-300 lg:mx-0">
              We stock a much wider range than shown here — tell us your
              requirement and we&apos;ll source it.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Link href="/contact#quote" className="btn btn-accent">
              Request a quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${site.phones.sales1.replace(/[^+\d]/g, "")}`}
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 transition hover:text-white"
            >
              <Phone className="h-3.5 w-3.5" /> {site.phones.sales1}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
