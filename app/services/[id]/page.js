import React from "react";
import ServiceDetail from "@/components/pages/Service/ServiceDetail/ServiceDetail";
import { fetchServiceById } from "@/lib/services";
import { SERVICES_OG_IMAGE, getCombinedMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }) {
  const slug = params?.id || "";
  const service = await fetchServiceById(slug);

  if (!service) {
    return await getCombinedMetadata(`/services/${slug}`, {
      title: "Service Not Found",
      description: "This service is not available right now.",
      image: SERVICES_OG_IMAGE,
    });
  }

  return await getCombinedMetadata(`/services/${slug}`, {
    title: service.title || service.serviceTitle || "Service",
    description: service.subtitle || service.description,
    image:
      service.heroImage ||
      service.image ||
      service.portfolio?.[0]?.image ||
      SERVICES_OG_IMAGE,
  });
}

function Page({ params }) {
  return (
    <div>
      <ServiceDetail serviceId={params?.id} />
    </div>
  );
}

export default Page;
