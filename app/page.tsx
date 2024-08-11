"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

import styles from "@/styles/pages/index.module.css";
import About from "@/components/main/About";
import Experience from "@/components/main/Experience";
import Resume from "@/components/main/Resume";
import Main from "@/components/main/Main";

export default function Home() {
  return (
    <Suspense>
      <Main />
    </Suspense>
  );
}
