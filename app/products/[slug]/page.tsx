import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Suspense } from "react";
import ProductDetailClient from "@/components/ProductDetailClient";
import { getAllProductSlugs, getProductBySlug } from "@/lib/products-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | Durawin",
    };
  }

  return {
    title: `${product.title} | Durawin Kerala`,
    description: `${product.intro} Precision-manufactured by Durawin in Palakkad, Kerala.`,
    openGraph: {
      title: `${product.title} | Durawin`,
      description: product.intro,
      images: [{ url: product.mainImage, alt: product.imageAlt }],
    },
  };
}

async function ProductDetailContent({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}

export default function ProductDetailPage({ params }: Props) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8">
            <div className="h-6 w-48 animate-pulse rounded-lg bg-slate-100" />
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
              <div className="aspect-[4/3] animate-pulse rounded-2xl bg-slate-100 lg:col-span-5" />
              <div className="space-y-4 lg:col-span-7">
                <div className="h-5 w-32 animate-pulse rounded-full bg-slate-100" />
                <div className="h-10 w-3/4 animate-pulse rounded-xl bg-slate-100" />
                <div className="h-20 w-full animate-pulse rounded-xl bg-slate-100" />
              </div>
            </div>
          </div>
        </div>
      }
    >
      <ProductDetailContent params={params} />
    </Suspense>
  );
}

