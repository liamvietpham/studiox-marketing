import type { FormEventHandler } from "react";

import contactContent from "@/content/contact.json";
import type { ContactContent, ContactPageViewModel } from "@/features/contact/types";
import { useSiteShell } from "@/shared/hooks/useSiteShell";

export function useContactPage(): ContactPageViewModel {
  const shell = useSiteShell();
  const content = contactContent as ContactContent;

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  };

  return {
    content,
    ...shell,
    handleSubmit,
  };
}
