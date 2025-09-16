import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import devtoolsJson from 'vite-plugin-devtools-json';

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths(), devtoolsJson() ],
  server: {
    host: '0.0.0.0', // Expose to network
    port: 3000,
    strictPort: true, // Exit if port is already in use
    // Optional: enable HTTPS
    // https: true
  }
});
