import { useMemo, useState } from "react";

import workContent from "@/content/work.json";
import type { WorkContent, WorkPageViewModel } from "@/features/work/types";
import { useSiteShell } from "@/shared/hooks/useSiteShell";

export function useWorkPage(): WorkPageViewModel {
  const shell = useSiteShell();
  const content = workContent as WorkContent;
  const defaultFilter = content.filters[0]?.key ?? "all";
  const [activeFilterKey, setActiveFilterKey] = useState(defaultFilter);

  const filteredProjects = useMemo(
    () =>
      activeFilterKey === "all"
        ? content.projects
        : content.projects.filter((project) => project.categories.includes(activeFilterKey)),
    [activeFilterKey, content.projects],
  );

  return {
    content,
    ...shell,
    activeFilterKey,
    setActiveFilterKey,
    filteredProjects,
  };
}
