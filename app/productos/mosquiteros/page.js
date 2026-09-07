import ProductDetail from "@/components/ProductDetail";
import { getProduct } from "@/data/products";
import { buildMetadata } from "@/lib/seo";

const product = getProduct("mosquiteros");

export const metadata = buildMetadata({
  title: product.metaTitle,
  description: product.metaDescription,
  path: "/productos/mosquiteros",
  image: product.image,
});

export default function Page() {
  return <ProductDetail product={product} />;
}
