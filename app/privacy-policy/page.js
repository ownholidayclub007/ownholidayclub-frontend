import PrivacyPolicy from "@/components/pages/Privacy/Privacypage";
import React from "react";
import { getCombinedMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  return await getCombinedMetadata("/privacy-policy");
}

function page() {
  return (
    <div>
      <PrivacyPolicy />
    </div>
  );
}

export default page;
