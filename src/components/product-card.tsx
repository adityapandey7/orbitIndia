import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getCategory, type Product } from "@/data/products";
import { InstrumentArt } from "@/components/instrument-art";

export function ProductCard({ product }: { product: Product }) {
  const category = getCategory(product.category);

  return (
    <Link
      href={`/products/${product.category}/${product.slug}`}
      className="surface surface-hover group flex flex-col overflow-hidden"
    >
      <div className="relative border-b border-slate-100 bg-[#f5f5f5]">
        <InstrumentArt
          seed={product.slug}
          view={0}
          className="w-full transition duration-300 group-hover:scale-[1.02]"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#da1515] ring-1 ring-slate-200">
          {product.brand}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        {category && (
          <p className="text-xs font-semibold uppercase tracking-wide text-[#da1515]">
            {category.name}
          </p>
        )}
        <h3 className="mt-1 font-bold leading-snug text-[#161616] group-hover:text-[#da1515]">
          {product.name}
        </h3>
        <p className="mt-1 text-xs font-semibold text-slate-500">
          {product.tagline}
        </p>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-slate-600">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-100 pt-3.5">
          <span className="text-xs font-semibold text-slate-500">
            Origin: {product.origin}
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#da1515]">
            View details{" "}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
