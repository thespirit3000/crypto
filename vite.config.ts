import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";

// https://vitejs.dev/config/
/* export default defineConfig({
  plugins: [react()],
  //base: "/",
  base: "/crypto/",
});
 */
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "src"),
    },
  },
  base: process.env.NODE_ENV === "production" ? "/crypto/" : "",
});
