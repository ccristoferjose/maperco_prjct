import ServiceDetail from "@/components/ServiceDetail";
import { getService } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

const service = getService("reparacion-de-persianas");

export const metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/servicios/reparacion-de-persianas",
  image: service.image,
});

export default function Page() {
  return <ServiceDetail service={service} />;
}
