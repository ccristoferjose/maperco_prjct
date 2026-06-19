import ProductDetail from "@/components/ProductDetail";
import { getProduct } from "@/data/products";
import { buildMetadata } from "@/lib/seo";

const product = getProduct("persianas-enrollables");

export const metadata = buildMetadata({
  title: product.metaTitle,
  description: product.metaDescription,
  path: "/productos/persianas-enrollables",
  image: product.image,
});

export default function Page() {
  return <ProductDetail product={product} />;
}
