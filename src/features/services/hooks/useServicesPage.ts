import servicesContent from "@/content/services.json";
import type { ServicesContent, ServicesPageViewModel } from "@/features/services/types";
import { useSiteShell } from "@/shared/hooks/useSiteShell";

export function useServicesPage(): ServicesPageViewModel {
  const shell = useSiteShell();
  const content = servicesContent as ServicesContent;

  return {
    content,
    ...shell,
  };
}
