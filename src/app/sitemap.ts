import { SITE_DOMAIN } from "@/configs";

interface ISitemap {
  url: string;
  lastModified: Date;
}

const sitemap = (): ISitemap[] => {
  return [
    {
      url: SITE_DOMAIN,
      lastModified: new Date(),
    },
  ];
};

export default sitemap;
