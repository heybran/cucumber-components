import{s as t}from"../assets/shared-267037b7.js";import{B as e}from"../assets/base-element-b7991dcc.js";customElements.define("cc-divider",class extends e{connectedCallback(){super.render(`<div class="line line--start" part="line"></div>
<div class="text" part="text"></div>
<div class="line line--end" part="line"></div>
`,`*{box-sizing:border-box}:host{display:grid;grid-template-columns:1fr 1fr;align-items:center;width:var(--width, 100%);margin-block:var(--spacing, 1rem);margin-inline:auto}:host([theme~="vertical"]){justify-items:center;height:100%;grid-template-columns:1fr;grid-template-rows:1fr 1fr;margin-block:unset;margin-inline:var(--spacing, 1rem);width:auto}.line{height:var(--thickness, 1px);background-color:var(--color, var(--cc-gray-2, #e9ecef))}:host([theme~="vertical"]) .line{width:var(--thickness, 1px);height:var(--height, 100%)}.text{display:none}:host([text]){grid-template-columns:1fr max-content 1fr}:host([theme~="vertical"][text]){grid-template-columns:1fr;grid-template-rows:1fr max-content 1fr}:host([text]) .text{display:flex;align-items:center;justify-content:center;margin-inline:1rem}:host([theme~="vertical"][text]) .text{margin-inline:0;margin-block:1rem}
`,t),this.setAttribute("role","separator"),this.getAttribute("theme")?.includes("vertical")?this.setAttribute("aria-orientation","vertical"):this.setAttribute("aria-orientation","horizontal"),this.hasAttribute("text")&&(this.shadowRoot.querySelector(".text").textContent=this.getAttribute("text"))}});
