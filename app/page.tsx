"use client";

import React from "react";
import { Suspense } from "react";

import Main from "@/components/main/Main";
import Head from "next/head";

export default function Home() {
  return (
    <Suspense>
      <Head>
        <title>Shivam Gulia</title>
      </Head>
      <Main />
    </Suspense>
  );
}
