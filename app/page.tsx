"use client";

import { useRouter } from "next/navigation";

//Note: Only using default export for root page
export default function Page() {
  const router = useRouter();
  if (typeof window !== "undefined") {
    router.push("/pension-estimator");
  }

  return null;
}
