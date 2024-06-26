"use client";

import React from "react";
import { Provider } from "react-redux";

import { reduxStore } from "@/app/store/redux";

export function Providers({ children }: React.PropsWithChildren) {
  return <Provider store={reduxStore}>{children}</Provider>;
}
