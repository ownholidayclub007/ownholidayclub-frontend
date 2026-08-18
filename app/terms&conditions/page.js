import TermsAndConditions from "@/components/pages/Terms/TermsPage";
import React from "react";
import { getCombinedMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  return await getCombinedMetadata("/terms&conditions");
}

function page() {
  return (
    <div>
      <TermsAndConditions />
    </div>
  );
}

export default page;
