const SITE_ORIGIN = "https://studiox.liamhub.io.vn";
const DEFAULT_SITE_NAME = "ATELIER NORTH";

type SeoMetaOptions = {
  title: string;
  description: string;
  pathname: string;
  imageUrl?: string;
  type?: "website" | "article";
  siteName?: string;
  keywords?: string;
};

function toAbsoluteUrl(pathOrUrl: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }

  const pathname = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${SITE_ORIGIN}${pathname}`;
}

export function buildSeoMeta({
  title,
  description,
  pathname,
  imageUrl,
  type = "website",
  siteName = DEFAULT_SITE_NAME,
  keywords,
}: SeoMetaOptions) {
  const absoluteUrl = toAbsoluteUrl(pathname);
  const absoluteImageUrl = imageUrl ? toAbsoluteUrl(imageUrl) : toAbsoluteUrl("/favicon.svg");

  const metaTags = [
    { title },
    { name: "description", content: description },
    { name: "robots", content: "index, follow" },
    { property: "og:type", content: type },
    { property: "og:site_name", content: siteName },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: absoluteUrl },
    { property: "og:image", content: absoluteImageUrl },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: absoluteImageUrl },
  ];

  if (keywords) {
    metaTags.push({ name: "keywords", content: keywords });
  }

  return metaTags;
}

export function buildCanonicalLinks(pathname: string) {
  return [{ rel: "canonical", href: toAbsoluteUrl(pathname) }];
}

export { SITE_ORIGIN };
