import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Check,
  Clock,
  Info,
  Mail,
  MapPin,
  Phone,
  Quote,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";
import {
  getCategory,
  getProduct,
  productCode,
  products,
} from "@/data/products";
import { site } from "@/data/site";
import { ProductCard } from "@/components/product-card";
import { ProductGallery } from "@/components/product-gallery";
import { InstrumentArt } from "@/components/instrument-art";
import { SectionHeading } from "@/components/section-heading";
import { Breadcrumb } from "@/components/breadcrumb";
import { FaqAccordion } from "@/components/faq-accordion";
import { QuoteForm } from "@/components/quote-form";

export function generateStaticParams() {
  return products.map((p) => ({ category: p.category, slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product not found" };
  return { title: product.name, description: product.tagline };
}

function list(items: string[]) {
  if (items.length <= 1) return items.join("");
  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}

/** Bolds the term before a colon, mirroring the reference feature lists. */
function featureLead(f: string) {
  const i = f.indexOf(":");
  if (i === -1) return <>{f}</>;
  return (
    <>
      <strong className="font-bold text-[#161616]">{f.slice(0, i)}</strong>
      {f.slice(i)}
    </>
  );
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category: catSlug, slug } = await params;
  const category = getCategory(catSlug);
  const product = getProduct(slug);
  if (!category || !product || product.category !== catSlug) notFound();

  const related = products
    .filter((p) => p.category === catSlug && p.slug !== product.slug)
    .slice(0, 3);

  const faqs = [
    {
      q: `What is the ${product.name} used for?`,
      a: `${product.tagline}. It is widely used for ${list(
        product.applications.map((a) => a.toLowerCase()),
      )}.`,
    },
    {
      q: `Who supplies the ${product.name}?`,
      a: `The ${product.name} is supplied by ${product.brand} (${product.origin}) and backed in India by Orbit Technologies — your single point of contact for supply, installation and after-sales service.`,
    },
    {
      q: "Do you supply, install and train operators?",
      a: "Yes. Orbit handles the complete cycle — product selection, installation, commissioning and operator training — followed by after-sales service and spares through 14 sales & service locations across India.",
    },
    {
      q: "How do I get pricing and lead time?",
      a: `Share your requirement through the form below or call our sales team. We respond within one working day with pricing, lead time and application guidance for the ${product.name}.`,
    },
    {
      q: "Do you provide service, spares and AMC?",
      a: "Our highly skilled engineers advise on the right spares and consumables and provide prompt after-sales service, including annual maintenance contracts where required.",
    },
  ];

  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Products", href: "/products" },
          { label: category.name, href: `/products/${category.slug}` },
          { label: product.name },
        ]}
      />

      {/* ------------------------------ product header ------------------------------ */}
      <section className="container-x grid gap-8 py-8 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-12 lg:py-10">
        <ProductGallery seed={product.slug} />

        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="chip chip-accent !px-3 !py-1.5">
              <span className="h-2 w-2 rounded-full bg-[#ff8d0a]" />
              {product.brand}
            </span>
            <Link href={`/products/${category.slug}`} className="chip !px-3 !py-1.5">
              {category.name}
            </Link>
          </div>

          <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight text-[#161616] sm:text-4xl">
            {product.name}
          </h1>

          <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
            Product code{" "}
            <span className="text-[#161616]">{productCode(product)}</span>
          </p>

          <div className="callout mt-5 text-sm font-semibold leading-relaxed text-[#161616] sm:text-base">
            {product.tagline}
          </div>

          <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
            {product.description}
          </p>

          <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="spec-cell">
              <dt>Brand</dt>
              <dd>{product.brand}</dd>
            </div>
            <div className="spec-cell">
              <dt>Origin</dt>
              <dd>{product.origin}</dd>
            </div>
            <div className="spec-cell">
              <dt>Category</dt>
              <dd>{category.name}</dd>
            </div>
            <div className="spec-cell">
              <dt>Availability</dt>
              <dd>Across India</dd>
            </div>
            <div className="spec-cell">
              <dt>Service</dt>
              <dd>Install · AMC</dd>
            </div>
            <div className="spec-cell">
              <dt>Lead time</dt>
              <dd>On request</dd>
            </div>
          </dl>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#quote" className="btn btn-accent">
              <Phone className="h-4 w-4" /> Enquire now
            </a>
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent(`Enquiry: ${product.name}`)}`}
              className="btn btn-outline"
            >
              <Mail className="h-4 w-4" /> Email enquiry
            </a>
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-slate-200 pt-5 text-xs font-semibold text-slate-600">
            <li className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-[#15803d]" /> Genuine
              products from principals
            </li>
            <li className="flex items-center gap-1.5">
              <Truck className="h-4 w-4 text-[#da1515]" /> Pan-India supply
              &amp; service
            </li>
            <li className="flex items-center gap-1.5">
              <Wrench className="h-4 w-4 text-[#da1515]" /> Installation
              &amp; training
            </li>
          </ul>
        </div>
      </section>

      {/* --------------------------- features & benefits --------------------------- */}
      <section className="band mt-6 border-y border-slate-200 py-14">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Features & benefits"
            title={`Key features of the ${product.name}`}
            subtitle={`Built for ${list(
              product.applications.slice(0, 3).map((a) => a.toLowerCase()),
            )}.`}
          />
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#f5f5f5]">
              <InstrumentArt
                seed={product.slug}
                view={1}
                className="w-full"
                label={`${product.name} control panel`}
              />
            </div>
            <div>
              <h3 className="text-lg font-extrabold tracking-tight text-[#161616]">
                Key features
              </h3>
              <ul className="mt-4 grid gap-2.5">
                {product.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600"
                  >
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#dcfce7] text-[#15803d]">
                      <Check className="h-3 w-3" />
                    </span>
                    <span>{featureLead(f)}</span>
                  </li>
                ))}
              </ul>
              <h4 className="mt-7 text-sm font-extrabold uppercase tracking-wider text-[#161616]">
                Key applications
              </h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {product.applications.map((a) => (
                  <li key={a} className="chip chip-accent !px-3 !py-1.5">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------- about block ------------------------------- */}
      <section className="container-x mt-14">
        <SectionHeading
          align="center"
          eyebrow="About this product"
          title={`About the ${product.name}`}
        />
        <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              {product.description}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              Whether it&apos;s a power-plant fuel laboratory, a cement or
              steel plant quality-control lab, or a university research group,
              the {product.name} is backed by Orbit&apos;s own application
              engineers — from product selection and purchase through
              installation, training and after-sales support, anywhere in
              India.
            </p>
          </div>
          <div className="order-1 overflow-hidden rounded-2xl border border-slate-200 bg-[#f5f5f5] lg:order-2">
            <InstrumentArt
              seed={product.slug}
              view={2}
              className="w-full"
              label={`${product.name} detail`}
            />
          </div>
        </div>
      </section>

      {/* ------------------------------ quote band ------------------------------ */}
      <section className="quote-band relative mt-14 overflow-hidden py-14 text-white">
        <div className="container-x relative text-center">
          <Quote className="mx-auto h-8 w-8 text-[#ff4d42]" />
          <p className="mx-auto mt-5 max-w-3xl text-lg font-bold leading-relaxed sm:text-2xl">
            &ldquo;Every {category.name.replace(/s$/, "")} we supply arrives
            with Orbit&apos;s own engineers — selection, installation, training
            and after-sales service, anywhere in India.&rdquo;
          </p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
            Orbit Technologies · 35 years · 7,000+ customers
          </p>
        </div>
      </section>

      {/* ---------------------------------- FAQ ---------------------------------- */}
      <section className="band border-b border-slate-200 py-14">
        <div className="container-x">
          <div className="mb-8 flex flex-col items-center text-center">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#da1515] text-[#da1515]">
              <Info className="h-6 w-6" />
            </span>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-[#161616] sm:text-3xl">
              Product FAQs
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600">
              Everything you need to know about sourcing the {product.name}{" "}
              through Orbit Technologies.
            </p>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* ------------------------------ contact / quote ------------------------------ */}
      <section id="quote" className="container-x scroll-mt-32 py-14">
        <SectionHeading
          align="center"
          eyebrow="Contact us today"
          title={`Request a quote for the ${product.name}`}
          subtitle="Share your requirement and our team will get back to you within one working day with pricing, lead time and application guidance."
        />
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`tel:${site.phones.sales1.replace(/[^+\d]/g, "")}`}
            className="btn btn-primary"
          >
            <Phone className="h-4 w-4" /> Call sales: {site.phones.sales1}
          </a>
          <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
            <Clock className="h-4 w-4 text-[#da1515]" /> Mon–Fri 9:30 AM – 5:30
            PM · Sat 9:30 AM – 1:00 PM
          </span>
        </div>
        <div className="mx-auto mt-8 max-w-3xl">
          <QuoteForm context={product.name} initialCategory={category.name} />
        </div>
        <p className="mx-auto mt-5 flex max-w-3xl items-center justify-center gap-2 text-xs text-slate-500">
          <MapPin className="h-3.5 w-3.5 text-[#da1515]" />
          {site.address.line1}, {site.address.city} – {site.address.pin},{" "}
          {site.address.state}
        </p>
      </section>

      {/* -------------------------------- related -------------------------------- */}
      {related.length > 0 && (
        <section className="band border-t border-slate-200 py-12">
          <div className="container-x">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <SectionHeading
                eyebrow={`More in ${category.name}`}
                title="Related products"
              />
              <Link
                href={`/products/${category.slug}`}
                className="btn btn-outline shrink-0"
              >
                See all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
