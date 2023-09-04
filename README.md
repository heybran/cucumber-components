<div align="center"><img align="center" src="./docs/public/cucumber-components.png" alt="Cucumber Components Logo"></div>
<br />
<p align="center">A collection of native web components built on top of web standards with a focus on:</p>
<ul align="center" style="display: flex;"><span role="listitem">🚹 Accessibility  </span role="listitem"><span>🏗 Easy to use  </span role="listitem"><span>🎨 Easy to style</span></ul>
<p align="center">Inspired by <a href="https://github.com/thepassle/generic-components" target="_blank">https://github.com/thepassle/generic-components</a></p>

> This project started out as `Breeze Components`, then it was renamed to `Cucumber Components` on Sep 4, 2023. Logo was designed based on icons I found on https://www.flaticon.com/free-icons/cucumber, logo font is `Input Mono`. Reason for renaming components is writing `cc-button` is a bit easier than `breeze-button`.


## Why Build A Web Components Collection When There Are Many Battle-tested Web Components Collections Already?

- A proejct to dive deep into web accessibility.
- Help develop mindset from both components author and componenst consumer.
- A learning experience and opportunities to gain a deeper understanding of web components best practices.
- It's fun!

## Why Go With Vanilla Web Components?
- Vanilla Web Components can take you all the way if you're just building components collection to be consumed by other projects.
- A better way to play around web components specs and trying out new ideas.
- Minimize the bundled size of each component.
- "The beauty of zero-dependencies!" (#UseThePlatform).

## How To Contribute
#### 1. Fork and Clone This Repo.
```bash
git clone https://github.com/heybran/breeze-components.git
```
#### 2. Install Dev Dependencies
Web Components dev dependencies
```bash
npm install
```

Docs dependencies
```bash
cd docs && npm install
```

#### 3. Creat A Component Folder at `./src/components`.
Structure:
```
── password-field
   ├── password-field.css
   ├── password-field.html
   └── password-field.js
```
#### 4. Export New Component at `./index.js`.
e.g.
```javascript
import CucumberFormLayout from "./src/components/form-layout/form-layout.js";
import CucumberPasswordField from "./src/components/password-field/password-field.js";

export {
  CucumberFormLayout,
  CucumberPasswordField,
  // new component class here
};
```
#### 5. Add New Component to DOCS `./docs/src/components/demo/ComponentPreview.svelte`. This is to import the components codes to render them on the documentation.
```javascript
const components = [
  'button',
  'icon',
  'option',
  'select',
  'spinner',
  'switch',
  'text-field',
  'textarea',
  'tooltip',
  'form-layout',
  'password-field',
  // new component folder name here
];
```
#### 6. Create New Component Documentation Page at `./docs/src/pages/components/new-component.mdx`. (If new component folder name is 'new-component').
#### 7. Add Sidebar Link at `./docs/src/config.ts`. 
e.g.
```javascript
export const SIDEBAR = [
  { text: "Alert", link: "/components/alert" },
  { text: "Button", link: "/components/button" },
  { text: "Tooltip", link: "/components/tooltip" },
  { text: "Text Field", link: "/components/text-field" },
  { text: "Select", link: "/components/select" },
  { text: "Switch", link: "/components/switch" },
  { text: "Textarea", link: "/components/textarea" },
  { text: "Spinner", link: "/components/spinner" },
  // new component item here
];
```
#### 8. Run DOCS dev server
```bash
cd docs && npm run dev
```
