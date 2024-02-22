import React from "react";
import { ClipLoader } from "react-spinners";

import "./IconLoading.scss";

interface IconLoadingProps {
  loading: boolean;
}

export function IconLoading({ loading }: IconLoadingProps) {
  return (
    <div className={`IconLoading ${loading ? "visible" : ""}`}>
      <ClipLoader color="#D0D0D8" loading={loading} size={50} />
    </div>
  );
}
