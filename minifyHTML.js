import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import { minify } from "html-minifier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentsDir = path.resolve(__dirname, 'src/components');
const componentsNames = fs.readdirSync(componentsDir);

componentsNames.forEach((component, index) => {
  const htmlFilePath = path.resolve(componentsDir, `${component}/${component}.html`);
  if (!fs.existsSync(htmlFilePath)) {
    return;
  }

  const htmlContent = fs.readFileSync(htmlFilePath, "utf-8");
  /**
   * Before minifying HTML codes, make a copy of this HTML file
   */
  // Get the directory path of the source file we need to copy
  const htmlFileDir = path.dirname(htmlFilePath);
  // Copy HTML file
  fs.copyFileSync(htmlFilePath, path.join(htmlFileDir, `${component}-copy.html`));

  const minifiedHtml = minify(htmlContent, {
    collapseWhitespace: true,
    removeComments: true,
  });
  const outputFilePath = path.resolve(componentsDir, `${component}/${component}.html`);
  fs.writeFileSync(outputFilePath, minifiedHtml, "utf-8");
});





