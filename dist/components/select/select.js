import{s as a}from"../assets/shared-69ba54c1.js";import"../icon/icon.js";import{F as l}from"../assets/form-element-1a56e9b6.js";import{a as s}from"../assets/form-field-properties-584fd27e.js";import"../assets/base-element-f411db3f.js";customElements.get("cc-select")||customElements.define("cc-select",class extends l{constructor(){super(),this.render(`<div part="container">
  <label part="label" id="combo-label">
    <slot name="label"></slot>
  </label>
  <div part="input-container">
    <slot name="prefix"></slot>
    <input 
      type="text"
      autocomplete="off"
      spellcheck="false"
      autocapitalize="off"
      readonly
      role="combobox"
      aria-expanded="false"
      aria-disabled="false"
      aria-haspopup="listbox"
      aria-labelledby="combo-label"
      aria-controls="listbox"
      part="input"
    >
    <slot name="suffix">
      <cc-icon icon="chevron-down"></cc-icon>
    </slot>
  </div>
  <div part="helper-text">
    <slot name="helper-text"></slot>
  </div>
  <div id="listbox" role="listbox" tabindex="-1" part="dropdown" aria-expanded="false" aria-labelledby="combo-label">
    <button part="close">
      <span class="sr-only">Close</span>
    </button>
    <div part="dropdown-content">
      <slot></slot>
    </div>
  </div>
</div>
`,`:host{display:inline-block}[part=container]{position:relative}[part=input-container]{padding-inline-end:1ch}[part=input]{width:100%;height:auto;background:none;border-radius:var(--border-radius);min-height:0;min-width:0;color:inherit;outline:none;padding:1ch 1.5ch;-webkit-appearance:none;font:inherit;margin:0;border:0}[part=close]{display:none}[part=dropdown]{background-color:#fff;border-radius:var(--_border-radius-md);max-height:calc(min(var(--available-height, var(--max-height)),var(--max-height)) - 2px);max-height:300px;min-height:min(var(--min-height,1em),100vh);overflow:auto;width:100%;box-shadow:#23233433 0 7px 29px;position:absolute;z-index:999;visibility:hidden;pointer-events:none;display:gird}[part=dropdown]::backdrop{background-color:transparent;pointer-events:none}[aria-expanded=true][part=dropdown]{left:0;top:calc(100% + 10px);visibility:visible;pointer-events:all;transition:.15s cubic-bezier(.22,1,.36,1),visibility 0s;animation:scale .15s cubic-bezier(.33,1,.68,1) both}[part=dropdown-content]{display:flex;flex-direction:column;gap:2px;padding-block:4px}[part=suffix],[part=prefix]{line-height:0}@keyframes scale{0%{opacity:0;transform:scale(.75)}to{opacity:1;transform:scale(1)}}::slotted([slot="suffix"]){flex:none;width:1em;height:1em;line-height:1;transition:.2s color;pointer-events:none}[part=input][aria-expanded=true] ::slotted([slot="suffix"]),[part=input][aria-expanded=true] [part=suffix]{transform:rotate(180deg)}label{font-weight:var(--label-font-weight, 600);padding-block-end:.5em;display:inline-block}label:not(:empty)+[part=input]{margin-top:.25em}slot[name=suffix]>*{pointer-events:none}
`,a)}onLabelChange(t){this.shadowRoot.querySelector('slot[name="label"]').textContent=t}onHelperTextChange(t){this.shadowRoot.querySelector('slot[name="helper-text"]').textContent=t}get value(){return this.selectedOption.value}get text(){return this.selectedOption.text}get selectedOption(){const t=this.querySelector('[role="option"]');if(!t)throw new Error("Missing 'cc-option' inside 'cc-select'");return this.querySelector('[role="option"][aria-selected="true"]')||(console.info(`
        No 'selected' attribute found on 'cc-option',
        default to first 'cc-option'.
      `),t)}get options(){return this.querySelectorAll("cc-option")}static get observedAttributes(){return[...Object.keys(s)]}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i,s)}connectedCallback(){setTimeout(()=>{this.reflectTarget.setAttribute("value",this.selectedOption.text),this.trigger.setAttribute("aria-activedescendant",this.selectedOption.id)},0),this.addEventListener("cc-option-selected",this.handleSelect.bind(this)),this.addEventListener("keydown",this.onKeyDown),this.shadowRoot.querySelector('[part="input-container"]').addEventListener("click",this.toggleDropdown.bind(this)),this.dropdown?.addEventListener("close",this.onDropdownClose.bind(this));const t=this.querySelectorAll('[role="option"]'),e=this.uuid();Array.from(t).forEach((o,r)=>{o.id=`combo-${e}-${r}`});const i=this.getForm();i&&(Array.isArray(i.__cucumberElements)||(i.__cucumberElements=[]),i.__cucumberElements.push(this),i.addEventListener("formdata",this.setFormData))}isValid(){return!this.hasAttribute("required")||this.selectedOption.value!==""}onDropdownClose(t){this.trigger?.setAttribute("aria-expanded","false"),this.dropdown?.removeEventListener("keydown",this.selectOptionWhenTyping)}onKeyDown=t=>{if(this.isSelfFocused)if(this.isListboxOpen){if(t.key==="Escape"||t.key==="Tab")return this.closeDropdown();if(t.key==="Enter"||t.key===" "){const n=this.querySelector(".current");return!n||n===this.selectedOption?void 0:(this.selectOption(n),this.closeDropdown(),void t.preventDefault())}if(!["ArrowDown","ArrowUp"].includes(t.key))return;t.preventDefault();const e=Array.from(this.options);this.previousOption=this.querySelector(".current"),this.previousOption||(this.previousOption=this.selectedOption);let i=e.indexOf(this.previousOption),o=i+1===e.length?0:i+1,r=i===0?e.length-1:i-1;t.key==="ArrowDown"?(this.previousOption.classList.remove("current"),e[o]?.classList.add("current")):t.key==="ArrowUp"&&(this.previousOption.classList.remove("current"),e[r]?.classList.add("current"))}else t.key==="ArrowDown"&&(t.preventDefault(),this.openDropdown()),t.key==="ArrowUp"&&(t.preventDefault(),this.openDropdown()),t.key==="Home"&&(t.preventDefault(),this.openDropdown()),t.key==="End"&&(t.preventDefault(),this.openDropdown())};selectOption(t){this.selectedOption.setAttribute("aria-selected","false"),t.setAttribute("aria-selected","true"),this.reflectTarget.setAttribute("value",t.text)}handleSelect(t){const{value:e}=t.detail;this.value!==e?(this.selectOption(t.target),this.closeDropdown(t),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,cancelable:!0,detail:{value:e}}))):this.closeDropdown()}updatePosition(){const{left:t,top:e,width:i,height:o}=this.getBoundingClientRect(),r=window.innerHeight-o-e;let n;this.style.setProperty("--left",`${t}px`),r+10>this.dropdown.clientHeight?(this.dropdown.style.setProperty("transform-origin","top center"),n=e+o+6):(this.dropdown.style.setProperty("transform-origin","bottom center"),n=e-this.dropdown.clientHeight-6),this.style.setProperty("--top",`${n}px`),this.style.setProperty("--width",`${i}px`)}closeDropdown(t){this.removeEventListener("focusout",this.constructor.onFocusOutByTabKey),this.trigger.setAttribute("aria-expanded","false"),this.reflectTarget.focus(),this.listbox.setAttribute("aria-expanded","false"),this.trigger.setAttribute("aria-activedescendant",this.selectedOption.id),this.querySelector(".current")?.classList.remove("current"),this.currentOption=null}static onFocusOutByTabKey(t){console.log(t),this.isListboxOpen&&this.closeDropdown(t)}toggleDropdown(t){if(this.isListboxOpen)return this.closeDropdown(t);this.openDropdown(t)}openDropdown(t){this.disabled||(this.updatePosition(),this.trigger.setAttribute("aria-expanded","true"),this.listbox?.setAttribute("aria-expanded","true"),this.listbox.addEventListener("keydown",this.selectOptionWhenTyping),document.addEventListener("click",this.closeDropdownWhenClickOutside.bind(this)))}selectOptionWhenTyping=t=>{console.log(this);var e=t.key.toLowerCase();const i=Array.from(this.options).find(o=>o.text.toLowerCase().startsWith(e));i&&this.selectOption(i)};get dropdown(){return this.shadowRoot?.querySelector('[part="dropdown"]')}get trigger(){return this.shadowRoot?.querySelector('[aria-haspopup="listbox"]')}get listbox(){return this.shadowRoot?.querySelector('[role="listbox"]')}get isSelfFocused(){return document.activeElement===this}get isListboxOpen(){return this.trigger.getAttribute("aria-expanded")==="true"}closeDropdownWhenClickOutside(t){this.isListboxOpen&&(t.composedPath().includes(this)||this.closeDropdown())}});
