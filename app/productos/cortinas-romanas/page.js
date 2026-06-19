import ProductDetail from "@/components/ProductDetail";
import { getProduct } from "@/data/products";
import { buildMetadata } from "@/lib/seo";

const product = getProduct("cortinas-romanas");

export const metadata = buildMetadata({
  title: product.metaTitle,
  description: product.metaDescription,
  path: "/productos/cortinas-romanas",
  image: product.image,
});

export default function Page() {
  return <ProductDetail product={product} />;
}
