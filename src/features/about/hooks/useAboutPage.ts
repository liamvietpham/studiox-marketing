import aboutContent from "@/content/about.json";
import type { AboutContent, AboutPageViewModel } from "@/features/about/types";
import { useSiteShell } from "@/shared/hooks/useSiteShell";

export function useAboutPage(): AboutPageViewModel {
  const shell = useSiteShell();
  const content = aboutContent as AboutContent;

  return {
    content,
    ...shell,
  };
}
