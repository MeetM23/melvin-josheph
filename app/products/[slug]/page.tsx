import { notFound } from "next/navigation";
import { Metadata } from "next";
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

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}

