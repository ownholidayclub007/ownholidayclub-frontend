import Sitemap from "@/components/pages/Sitemap/Sitemappage";
import React from "react";
import { getSitemapRoutes } from "@/lib/sitemap";
import { getCombinedMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  return await getCombinedMetadata("/sitemap");
}

async function page() {
  const routes = await getSitemapRoutes();

  return (
    <div>
      <Sitemap routes={routes} />
    </div>
  );
}

export default page;
