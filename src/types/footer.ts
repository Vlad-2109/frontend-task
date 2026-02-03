interface FooterLink {
  name: string;
  to: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterFeature {
  icon: string;
  alt: string;
  text: string;
}

export interface SocialLink {
  icon: string;
  alt: string;
  href: string;
}
