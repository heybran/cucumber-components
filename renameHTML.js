import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentsDir = path.resolve(__dirname, 'src/components');
const componentsNames = fs.readdirSync(componentsDir);

componentsNames.forEach((component, index) => {
  const htmlFilePath = path.resolve(componentsDir, `${component}/${component}.html`);
  // Get file path of component-copy.html
  const htmlFileDir = path.dirname(htmlFilePath);
  const backupHTMLFilePath = path.join(htmlFileDir, `${component}-copy.html`);

  if (!fs.existsSync(backupHTMLFilePath)) {
    return;
  }

  if (fs.existsSync(htmlFilePath)) {
    // Delete the minified HTML file.
    fs.unlinkSync(htmlFilePath);

    // Rename component-copy.html back to component.html
    fs.renameSync(backupHTMLFilePath, htmlFilePath);
  }
});





