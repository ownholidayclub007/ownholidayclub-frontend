import CookiesPolicy from "@/components/pages/Cookies/CookiesPage";
import React from "react";
import { getCombinedMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  return await getCombinedMetadata("/cookie-policy");
}

function page() {
  return (
    <div>
      <CookiesPolicy />
    </div>
  );
}

export default page;
