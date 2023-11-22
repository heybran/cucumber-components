import{F as n}from"../assets/form-element-1a56e9b6.js";import{s as a}from"../assets/shared-69ba54c1.js";import{D as o}from"../assets/form-field-properties-584fd27e.js";import"../assets/base-element-f411db3f.js";class i extends n{constructor(){super(),this.render(`<div part="container">
  <label part="label" for="input">
    <slot name="label"></slot>
  </label>
  <div part="input-container">
    <slot name="prefix"></slot>
    <input id="input" part="input" type="date" aria-describedby="helper-text">
    <slot name="suffix">
      <cc-button 
        slot="suffix" 
        theme="square borderless"
        onclick="this.getRootNode().host.showPicker();"
      >
        <cc-icon label="Show date picker" icon="calendar"></cc-icon>
      </cc-button>
    </slot>
  </div>
  <div part="helper-text" id="helper-text">
  </div>
  <div part="error-message" id="error-message"></div>
  <slot name="datalist"></slot>
</div>`,`:host{--border-radius: 8px;--border-color-normal: #adaba8;--border-color-focus: hsl(252, 100%, 65%);--box-shadow-color: rgba(109, 74, 255, .2);--label-font-weight: 600;display:block}input{width:100%;height:auto;background:none;border-radius:var(--border-radius);min-height:0;min-width:0;color:inherit;outline:none;padding:1ch 1.5ch;-webkit-appearance:none;font:inherit;margin:0;border:0}input[type=date]::-webkit-inner-spin-button,input[type=date]::-webkit-calendar-picker-indicator{display:none;-webkit-appearance:none}:host([has-prefix-slot]) input{padding-inline:1ch}label{font-weight:var(--label-font-weight);padding-block:var(--form-control-label-top-padding) .5em;display:inline-block}:host([label-position-side]) label{padding-block:.25em}[part=input-container]{border:1px solid var(--border-color-normal);border-radius:var(--border-radius);display:flex;align-items:center;position:relative;transition:.15s cubic-bezier(.22,1,.36,1),visibility 0s;overflow:hidden}[part=input-container]:focus-within{border-color:var(--border-color-focus);box-shadow:0 0 0 .1875rem var(--box-shadow-color)}::slotted([slot="prefix"]){margin-inline-start:1ch;--size: 1.5em;color:var(--cc-gray-7)}::slotted([slot="suffix"]){margin-inline-end:1ch;--size: 1.5em;color:var(--cc-gray-7)}::slotted(cc-button[slot="suffix"]){margin-inline-end:0}:host([label-position-side]) [part=container]{display:flex;align-items:center;gap:1em;justify-content:space-between}:host([label-position-side]) [part=input-container]{margin-top:0}:host([readonly]) [part=input-container]{border-style:dashed}:host([readonly]) slot[name=suffix]>*{opacity:.5}:host([disabled]) slot[name=suffix]>*{pointer-events:none}:host([disabled]){opacity:.5}:host([helper-text-position-top]) [part=container]{display:flex;flex-direction:column}:host([helper-text-position-top]) [part=label]{padding-block:.25em}:host([helper-text-position-top]) [part=input-container]{order:1;margin-top:.25em}:host([helper-text-position-top]) [part=helper-text]:not(:empty){order:0;margin-top:0}
`,a)}static __localName="cc-date-picker";get valueAsNumber(){this.reflectTarget.valueAsNumber}get valueAsDate(){return this.reflectTarget.valueAsDate}showPicker(){return this.reflectTarget.showPicker()}onLabelChange(t){this.shadowRoot.querySelector('slot[name="label"]').textContent=t}onHelperTextChange(t){this.shadowRoot.querySelector('slot[name="helper-text"]').textContent=t}connectedCallback(){const t=this.getForm();t&&(Array.isArray(t.__cucumberElements)||(t.__cucumberElements=[]),t.__cucumberElements.push(this)),this._initialValue=this.value,this.getForm()?.addEventListener("formdata",this.setFormData),this.getForm()?.addEventListener("reset",e=>{this.value=this._initialValue}),this.input.addEventListener("input",e=>{this.dispatchEvent(new Event("input"))}),this.input.addEventListener("change",e=>{this.input.setCustomValidity(""),this.dispatchEvent(new Event("change"))}),this.prefixSlot=this.shadowRoot?.querySelector('slot[name="prefix"]'),this.prefixSlot.assignedElements().length&&(this.setAttribute("has-prefix-slot",""),this.prefixSlot.addEventListener("click",()=>{this.input.focus()})),this.querySelector('[slot="datalist"]')&&this.shadowRoot.append(this.querySelector('[slot="datalist"]'))}isValid(){return this.input.checkValidity()}reportValidity(){this.input.reportValidity()}disconnectedCallback(){this.getForm()?.removeEventListener("formdata",this.setFormData)}static get observedAttributes(){return[...Object.keys(o)]}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r,o)}}customElements.get(i.__localName)||customElements.define(i.__localName,i);
