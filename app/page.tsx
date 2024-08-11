"use client";

import React from "react";
import { Suspense } from "react";

import Main from "@/components/main/Main";

export default function Home() {
  return (
    <Suspense>
      <Main />
    </Suspense>
  );
}
