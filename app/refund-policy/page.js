import RefundPolicy from "@/components/pages/Refund/Refund";
import React from "react";
import { getCombinedMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  return await getCombinedMetadata("/refund-policy");
}

function page() {
  return (
    <div>
      <RefundPolicy />
    </div>
  );
}

export default page;
