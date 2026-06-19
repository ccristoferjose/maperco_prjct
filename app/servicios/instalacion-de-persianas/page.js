import ServiceDetail from "@/components/ServiceDetail";
import { getService } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

const service = getService("instalacion-de-persianas");

export const metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/servicios/instalacion-de-persianas",
  image: service.image,
});

export default function Page() {
  return <ServiceDetail service={service} />;
}
