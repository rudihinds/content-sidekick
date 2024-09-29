"use client";

import { trpc } from "@/app/_trpc/client";
import { Icons } from "@/components/icons";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

export default function AuthCallback() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");
  
  // Comment out or remove the trpc query for now
  // trpc.authCallback.useQuery(undefined, {
  //   onSuccess: ({ success }) => {
  //     if (success) {
  //       router.push(origin ? `${origin}` : "/");
  //     }
  //   },
  //   onError: (err) => {
  //     toast.error("AuthCallBack: Something went wrong!");
  //     if (err.data?.code === "UNAUTHORIZED") {
  //       router.push("/signin");
  //     }
  //   },
  //   retry: false
  // });

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <Icons.configure className="h-9 w-9" aria-hidden="true" />
      <div className="text-center">
        <h3 className="text-xl font-semibold">
          You are almost done.
          <br /> Your account is being configured.
        </h3>
        <p className="mt-2 text-muted-foreground">
          {" "}
          You will be redirected shortly.
        </p>
      </div>
    </div>
  );
}
