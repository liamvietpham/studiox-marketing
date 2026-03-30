import pricingContent from "@/content/pricing.json";
import type { PricingContent, PricingPageViewModel } from "@/features/pricing/types";
import { useSiteShell } from "@/shared/hooks/useSiteShell";

export function usePricingPage(): PricingPageViewModel {
  const shell = useSiteShell();
  const content = pricingContent as PricingContent;

  return {
    content,
    ...shell,
  };
}
