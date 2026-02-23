// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Design Thinking: The Ultimate Guide",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/vhnam/design-thinking-the-ultimate-guide",
        },
      ],
      sidebar: [
        {
          label: "What is Design Thinking?",
          items: [
            {
              label: "Welcome to Design Thinking: The Ultimate Guide",
              slug: "what-is-design-thinking/welcome-to-design-thinking-the-ultimate-guide",
            },
          ],
        },
      ],
    }),
  ],
});
