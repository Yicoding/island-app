import { defineConfig } from "islandjs";

export default defineConfig({
  themeConfig: {
    nav: [
      {
        text: "首页",
        link: "/",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "Guide",
          items: [
            {
              text: "Getting Started",
              link: "/guide/getting-started",
            },
          ],
        },
      ],
    },
  },
});
