export type NavItem = {
  label: string;
  to: string;
  active?: boolean;
};

export type FooterGroup = {
  title: string;
  links: NavItem[];
};

export type FooterNewsletter = {
  title: string;
  placeholder: string;
  buttonLabel: string;
};

export type FooterContent = {
  navigationGroups: FooterGroup[];
  newsletter?: FooterNewsletter;
  legalLinks: NavItem[];
};
