import ForgotPassword from "@/components/Account/ForgotPassword";
import Loading from "@/components/Loading";

import React, { Suspense } from "react";

function ForgotPasswordPage() {
  return (
    <Suspense fallback={<Loading />}>
			<ForgotPassword />
		</Suspense>
  );
}

export default ForgotPasswordPage;
