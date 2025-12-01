import siteContentEn from "./en";
import siteContentZh from "./zh";

export type Language = "en" | "zh";
export type SiteContent = typeof siteContentEn;

const contentMap: Record<Language, SiteContent> = {
  en: siteContentEn,
  zh: siteContentZh,
};

export function getSiteContent(language: Language): SiteContent {
  return contentMap[language] ?? siteContentEn;
}

