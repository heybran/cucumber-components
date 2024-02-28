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
    return; // Skip processing if file doesn't exist
  }

  const htmlContent = fs.readFileSync(htmlFilePath, "utf-8");
  const minifiedHtml = minify(htmlContent, {
    collapseWhitespace: true,
    removeComments: true,
  });

  // Get file path of component-copy.html
  const htmlFileDir = path.dirname(htmlFilePath);
  const backupHTMLFilePath = path.join(htmlFileDir, `${component}-copy.html`);

  // Create the backup file only if it doesn't already exist
  if (!fs.existsSync(backupHTMLFilePath)) {
    fs.writeFileSync(backupHTMLFilePath, htmlContent, 'utf-8');
    console.log(`Created backup for component "${component}" as: ${backupHTMLFilePath}`);
  } else {
    console.log(`Backup for component "${component}" already exists: ${backupHTMLFilePath}`);
  }

  // Update original html with minimized content.
  fs.writeFileSync(htmlFilePath, minifiedHtml, "utf-8");
});





