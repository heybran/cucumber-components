import{s}from"../assets/shared-267037b7.js";import"../icon/icon.js";import{F as a}from"../assets/form-element-ad540cf6.js";import"../assets/base-element-be430c97.js";customElements.get("cc-country-select")||customElements.define("cc-country-select",class extends a{constructor(){super().render('<div part="container"><label><slot name="label"></slot><span class="required-indicator" aria-hidden="true">*</span></label> <button type="button" aria-expanded="false" aria-live="assertive" aria-haspopup="listbox" onclick="this.getRootNode().host.openDropdown(event);"><slot name="prefix"></slot><span class="text">${this.text}</span> <span part="suffix"><slot name="suffix"><cc-icon icon="chevron-down"></cc-icon></slot></span></button><dialog role="listbox" tabindex="-1" part="dropdown" aria-labelledby=""><button part="close"><span class="sr-only">Close</span></button><div part="dropdown-content"><slot></slot></div></dialog></div>',`:host{display:inline-block}button{cursor:pointer;-webkit-appearance:none;background:transparent;font:inherit;margin:0;display:flex;flex-wrap:nowrap;align-items:center;justify-content:space-between;border:1px solid var(--_border-color-normal);transition:.15s cubic-bezier(.22,1,.36,1),visibility 0s;border-radius:var(--_border-radius-md);padding:1ch 1ch 1ch 1.5ch;width:100%;gap:.5em}button:is(:focus-visible,:focus),:host(:focus-within) button{outline:1px auto var(--_outline-color-focus);box-shadow:var(--_box-shadow)}button[part=close]{display:none}[part=dropdown]{background-color:#fff;border-radius:var(--_border-radius-md);max-height:calc(min(var(--available-height, var(--max-height)),var(--max-height)) - 2px);max-width:calc(min(var(--available-width, var(--max-width)),var(--max-width)) - 2px);min-height:min(var(--min-height,1em),100vh);min-width:min(var(--min-width,1.5em),100vw);overflow:auto;width:var(--width);box-shadow:#23233433 0 7px 29px;position:fixed;z-index:999;visibility:hidden;pointer-events:none;display:gird;inset:0;margin:0;border:0;padding:0}[part=dropdown]::backdrop{background-color:transparent;pointer-events:none}[part=dropdown][open]{left:var(--left);top:var(--top);visibility:visible;pointer-events:initial;transition:.15s cubic-bezier(.22,1,.36,1),visibility 0s;animation:scale .15s cubic-bezier(.33,1,.68,1) both}[part=dropdown-content]{display:flex;flex-direction:column;gap:2px;padding-block:4px}[part=suffix],[part=prefix]{line-height:0}@keyframes scale{0%{opacity:0;transform:scale(.75)}to{opacity:1;transform:scale(1)}}::slotted([slot="suffix"]){flex:none;width:1em;height:1em;line-height:1;transition:.2s color;pointer-events:none}button[aria-expanded=true] ::slotted([slot="suffix"]),button[aria-expanded=true] [part=suffix]{transform:rotate(180deg)}label{font-weight:var(--label-font-weight, 600)}label:not(:empty)+button{margin-top:.25em}
`,s)}get label(){return this.getAttribute("label")??""}get placeholder(){return this.getAttribute("placeholder")??""}get value(){return this.selectedOption.value}get text(){return this.selectedOption.text}static get observedAttributes(){}attributeChangedCallback(t,e,o){}async connectedCallback(){document.addEventListener("click",this.closeDropdownWhenClickOutside.bind(this)),window.addEventListener("scroll",this.updatePosition.bind(this)),this.addEventListener("cc-option-selected",this.handleSelect.bind(this)),this.addEventListener("keydown",this.onKeyDown),this.dropdown?.addEventListener("close",this.onDropdownClose.bind(this)),this.defer(()=>{const t=this.getForm();t&&(Array.isArray(t.__cucumberElements)||(t.__cucumberElements=[]),t.__cucumberElements.push(this))}),this.defer(()=>{this.getForm()?.addEventListener("formdata",this.setFormData)})}isValid(){return!this.hasAttribute("required")}onDropdownClose(t){console.log(this.dropdown.returnValue),this.trigger?.setAttribute("aria-expanded","false"),this.dropdown?.removeEventListener("keydown",this.selectOptionWhenTyping)}onKeyDown=t=>{this.isSelfFocused&&(t.key==="ArrowDown"&&this.openDropdown(),t.key==="ArrowUp"&&this.openDropdown(),t.key==="Home"&&this.openDropdown(),t.key==="End"&&this.openDropdown())};handleSelect(t){const{value:e}=t.detail;this.value!==e?(this.selectedOption.removeAttribute("selected"),t.target.setAttribute("selected",""),this.shadowRoot.querySelector(".text").textContent=t.target.text,this.dropdown.close(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,cancelable:!0,detail:{value:e}}))):this.dropdown.close()}handleUpAndDownArrows(t){if(!["ArrowDown","ArrowUp"].includes(t.key))return;const e=Array.from(this.options);let o=e.indexOf(document.activeElement),i=o+1===e.length?0:o+1,n=o===0?e.length-1:o-1;t.key==="ArrowDown"?e[i]?.focus():t.key==="ArrowUp"&&e[n]?.focus()}updatePosition(){const{left:t,top:e,width:o,height:i}=this.getBoundingClientRect(),n=window.innerHeight-i-e;let r;this.style.setProperty("--left",`${t}px`),n+10>this.dropdown.clientHeight?(this.dropdown.style.setProperty("transform-origin","top center"),r=e+i+6):(this.dropdown.style.setProperty("transform-origin","bottom center"),r=e-this.dropdown.clientHeight-6),this.style.setProperty("--top",`${r}px`),this.style.setProperty("--width",`${o}px`)}openDropdown(t){this.updatePosition(),this.selectedOption?.focus(),this.dropdown.showModal(),this.dropdown.addEventListener("keydown",this.handleUpAndDownArrows.bind(this)),this.dropdown?.addEventListener("animationend",()=>{this.trigger.setAttribute("aria-expanded","true")}),this.dropdown?.addEventListener("keydown",this.selectOptionWhenTyping)}get dropdown(){return this.shadowRoot?.querySelector('[part="dropdown"]')}get trigger(){return this.shadowRoot?.querySelector('button[type="button"]')}get isSelfFocused(){return document.activeElement===this}closeDropdownWhenClickOutside(t){t.composedPath().includes(this.dropdown)||this.trigger?.getAttribute("aria-expanded")!=="true"||this.dropdown.close("Click outside")}});
