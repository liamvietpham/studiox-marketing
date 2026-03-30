import homeContent from "@/content/home.json";
import type { HomeContent, HomePageViewModel } from "@/features/home/types";
import { useSiteShell } from "@/shared/hooks/useSiteShell";

export function useHomePage(): HomePageViewModel {
  const shell = useSiteShell();
  const content = homeContent as HomeContent;

  return {
    content,
    ...shell,
  };
}
