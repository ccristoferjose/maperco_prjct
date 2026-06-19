import ServiceDetail from "@/components/ServiceDetail";
import { getService } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

const service = getService("mantenimiento-de-persianas");

export const metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/servicios/mantenimiento-de-persianas",
  image: service.image,
});

export default function Page() {
  return <ServiceDetail service={service} />;
}
