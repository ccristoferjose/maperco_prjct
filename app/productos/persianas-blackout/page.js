import ProductDetail from "@/components/ProductDetail";
import { getProduct } from "@/data/products";
import { buildMetadata } from "@/lib/seo";

const product = getProduct("persianas-blackout");

export const metadata = buildMetadata({
  title: product.metaTitle,
  description: product.metaDescription,
  path: "/productos/persianas-blackout",
  image: product.image,
});

export default function Page() {
  return <ProductDetail product={product} />;
}
