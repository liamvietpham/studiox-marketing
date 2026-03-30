import type { Config } from "@react-router/dev/config";

export default {
  appDirectory: "src",
  ssr: false,
  prerender: [
    "/",
    "/about",
    "/services",
    "/work",
    "/pricing",
    "/blog",
    "/blog/the-architecture-of-silence",
    "/blog/curating-the-sensory-home",
    "/blog/within-the-walls-of-atelier-noir",
    "/blog/monochrome-the-power-of-a-single-palette",
    "/blog/morning-rituals-finding-stillness-in-the-city",
    "/blog/the-precision-of-timeless-objects",
    "/blog/nordic-shadows-designing-for-the-north",
    "/contact",
  ],
} satisfies Config;
