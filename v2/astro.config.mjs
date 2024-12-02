import { defineConfig } from "astro/config";
import fulldev from 'fulldev-ui/integration'

export default defineConfig({
  site: "https://astro-naut.netlify.app/",
  integrations: [
    fulldev()
  ]
});
