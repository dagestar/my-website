"use client";

import { useMemo } from "react";
import { useLanguage } from "@/contexts/language-context";
import { getSiteContent } from "@/data/content";

export function useSiteContent() {
  const { language } = useLanguage();
  return useMemo(() => getSiteContent(language), [language]);
}

