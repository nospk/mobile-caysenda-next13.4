'use client';
import { useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

import Loading from "@/components/Loading";
import Setting from "@/components/Setting";
import ProductService from "@/services/Product.service";

function SettingPage() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const valueToken = localStorage.getItem("token");
    setToken(valueToken);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading && !token) {
      router.push("/login");
    }
  }, [loading, router, token]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Suspense fallback={<Loading />}>
          <Setting />
        </Suspense>
      )}
    </>
  );
}

export default SettingPage;
