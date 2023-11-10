"use client";
import { redirect, useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import SettingLayout from "@/components/Layouts/SettingLayout";
import Loading from "@/components/Loading";
import Setting from "@/components/Setting";

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
      redirect("/login");
    }
  }, [loading, router, token]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Suspense fallback={<Loading />}>
          <SettingLayout title="Cài Đặt" back="/account">
            <Setting />
          </SettingLayout>
        </Suspense>
      )}
    </>
  );
}

export default SettingPage;
