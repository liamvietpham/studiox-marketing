import type { FormEventHandler } from "react";

import type { NavItem } from "@/shared/types/site";
import type { SiteShellProps } from "@/shared/types/shell";

export type ContactContent = {
  site: {
    name: string;
    copyright: string;
  };
  header: {
    cta: NavItem;
    navItems: NavItem[];
  };
  hero: {
    kicker: string;
    title: string;
  };
  form: {
    fields: {
      name: {
        label: string;
        placeholder: string;
      };
      email: {
        label: string;
        placeholder: string;
      };
      subject: {
        label: string;
        options: string[];
      };
      message: {
        label: string;
        placeholder: string;
      };
    };
    submitLabel: string;
    submitIcon: string;
  };
  office: {
    title: string;
    addressLines: string[];
    scheduleIcon: string;
    scheduleLabel: string;
  };
  map: {
    location: string;
    imageUrl: string;
    imageAlt: string;
  };
  channels: {
    digital: {
      kicker: string;
      email: string;
      phone: string;
    };
    follow: {
      kicker: string;
      links: NavItem[];
    };
  };
  footer: {
    links: NavItem[];
  };
};

export type ContactPageViewModel = SiteShellProps & {
  content: ContactContent;
  handleSubmit: FormEventHandler<HTMLFormElement>;
};
