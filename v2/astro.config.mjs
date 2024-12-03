import { defineConfig } from "astro/config";
import fulldev from 'fulldev-ui/integration'

export default defineConfig({
  site: "https://vibekestolan.com/",
  integrations: [
    fulldev()
  ]
});
