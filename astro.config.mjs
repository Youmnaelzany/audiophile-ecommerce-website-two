import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

import { defineConfig } from "astro/config";
import prettier from "prettier";
import tailwindcss from "tailwindcss";
import astroPrettier from "prettier-plugin-astro";
import tailwindPrettier from "prettier-plugin-tailwindcss";

// https://astro.build/config
export default defineConfig({
  buildOptions: {
    // ... other options
    format: "esm",
    ssr: true,
    viteOptions: {
      plugins: [
        // ... other plugins
        astroPrettier({
          // ... other options
          plugins: [
            tailwindcss,
            tailwindPrettier({
              // ... other options
              tailwindConfig: "./tailwind.config.mjs",
            }),
          ],
        }),
      ],
    },
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
