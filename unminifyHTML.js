import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentsDir = path.resolve(__dirname, 'src/components');
const componentsNames = fs.readdirSync(componentsDir);

componentsNames.forEach((component, index) => {
  const htmlFilePath = path.resolve(componentsDir, `${component}/${component}.html`);
  if (!fs.existsSync(htmlFilePath)) {
    return;
  }

  // Delete the minified HTML file.
  fs.unlinkSync(htmlFilePath);

  // Rename component-copy.html to component.html
  const htmlFileDir = path.dirname(htmlFilePath);
  const backupHTMLFilePath = path.join(htmlFileDir, `${component}-copy.html`);

  fs.renameSync(backupHTMLFilePath, htmlFilePath);
});





