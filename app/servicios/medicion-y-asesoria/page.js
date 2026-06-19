import ServiceDetail from "@/components/ServiceDetail";
import { getService } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

const service = getService("medicion-y-asesoria");

export const metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/servicios/medicion-y-asesoria",
  image: service.image,
});

export default function Page() {
  return <ServiceDetail service={service} />;
}
