import { defineConfig } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentsDir = path.resolve(__dirname, "src/components");

const getComponentName = (filePath) => {
  const matches = filePath.match(/src\/components\/([^/]+)\//);
  return matches ? matches[1] : "";
};

const componentsNames = fs.readdirSync(componentsDir);

export default defineConfig({
  build: {
    outDir: "dist",
    emptyOutDir: true,
    minify: false,
    target: "esnext",
    rollupOptions: {
      input: componentsNames.reduce((basket, name) => {
        const entryFile = fs
          .readdirSync(path.resolve(__dirname, "src/components", name))
          .find((file) => file.endsWith(".js"));
        if (entryFile) {
          const componentName = entryFile.replace(".js", "");
          basket[componentName] = path.resolve(componentsDir, name, entryFile);
        }
        return basket;
      }, {}),
      output: {
        dir: path.resolve(__dirname, "dist/"),
        entryFileNames: "[name]/index.js",
        format: "esm",
      },
      plugins: [],
    },
  },
  plugins: [],
});