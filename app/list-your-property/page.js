import React from 'react'
import ListYourProperty from "@/components/pages/ListYourProperty/ListYourProperty";
import { getCombinedMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  return await getCombinedMetadata("/list-your-property");
}

function page() {
  return (
    <div>
      <ListYourProperty />
    </div>
  )
}

export default page
