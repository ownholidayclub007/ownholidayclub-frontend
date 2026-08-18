import ProfilePage from "@/components/pages/Profile/ProfilePage";
import React, { Suspense } from "react";
import { getCombinedMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  return await getCombinedMetadata("/profile");
}

function page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAFAFA] mt-20 p-4 md:p-8 lg:p-12 text-slate-600">Loading profile...</div>}>
      <div>
        <ProfilePage />
      </div>
    </Suspense>
  );
}

export default page;
