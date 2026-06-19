import ProductDetail from "@/components/ProductDetail";
import { getProduct } from "@/data/products";
import { buildMetadata } from "@/lib/seo";

const product = getProduct("puertas-plegables");

export const metadata = buildMetadata({
  title: product.metaTitle,
  description: product.metaDescription,
  path: "/productos/puertas-plegables",
  image: product.image,
});

export default function Page() {
  return <ProductDetail product={product} />;
}
