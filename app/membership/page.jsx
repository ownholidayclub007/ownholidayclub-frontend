import MembershipPage from "@/components/pages/Membership/MembershipPage";
import { getCombinedMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  return await getCombinedMetadata("/membership");
}

export default function Page() {
  return <MembershipPage />;
}
