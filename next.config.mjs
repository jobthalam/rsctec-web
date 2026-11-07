import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src", "styles", "scss")],
    additionalData: `
      @use "@/styles/scss/variables" as *;
      @use "@/styles/scss/mixins" as *;
      @use "@/styles/scss/media_queries" as *;
    `,
  },
};

export default nextConfig;
