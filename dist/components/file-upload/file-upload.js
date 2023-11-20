import{F as a}from"../assets/form-element-caaf4a05.js";import{s as n}from"../assets/shared-267037b7.js";import{F as o}from"../assets/form-field-properties-584fd27e.js";import"../icon/icon.js";import"../assets/base-element-b7991dcc.js";class i extends a{constructor(){super(),this.render(`<div part="container">
  <label part="label" for="input">
    <slot name="label"></slot>
  </label>
  <div part="input-container">
    <slot name="upload-icon"></slot>
    <input id="input" part="input" type="file" aria-describedby="helper-text">
    <div class="content" part="content">
      <slot></slot>
    </div>
  </div>
  <div part="helper-text" id="helper-text">
    <slot name="helper-text"></slot>
  </div>
  <div part="error-message" id="error-message"></div>
</div>`,`:host{--border-radius: 8px;--border-color-normal: #adaba8;--border-color-focus: hsl(252, 100%, 65%);--box-shadow-color: rgba(109, 74, 255, .2);--label-font-weight: 600;display:block}input{opacity:0;position:absolute;inset:0;cursor:pointer}label{font-weight:var(--label-font-weight);padding-block:var(--form-control-label-top-padding) .5em;display:inline-block}::slotted([slot="upload-icon"]){color:var(--cc-gray-6)}[part=content]{text-align:center}:host([label-position-side]) label{padding-block:.25em}[part=input-container]{border:1px dashed var(--border-color-normal);border-radius:var(--border-radius);display:flex;align-items:center;position:relative;transition:.15s cubic-bezier(.22,1,.36,1),visibility 0s;overflow:hidden;padding:2.5rem 1.5rem;flex-direction:column}[part=input-container]:focus-within,[part=input-container]:hover{border-color:var(--border-color-focus);box-shadow:0 0 0 .1875rem var(--box-shadow-color)}:host([label-position-side]) [part=container]{display:flex;align-items:center;gap:1em;justify-content:space-between}:host([label-position-side]) [part=input-container]{margin-top:0}:host([disabled]){opacity:.5}:host([helper-text-position-top]) [part=container]{display:flex;flex-direction:column}:host([helper-text-position-top]) [part=label]{padding-block:.25em}:host([helper-text-position-top]) [part=input-container]{order:1;margin-top:.25em}:host([helper-text-position-top]) [part=helper-text]:not(:empty){order:0;margin-top:0}
`,n)}static __localName="cc-file-upload";onLabelChange(t){this.shadowRoot.querySelector('slot[name="label"]').textContent=t}onHelperTextChange(t){this.shadowRoot.querySelector('slot[name="helper-text"]').textContent=t}connectedCallback(){const t=this.getForm();t&&(Array.isArray(t.__cucumberElements)||(t.__cucumberElements=[]),t.__cucumberElements.push(this)),this._initialValue=this.value,this.getForm()?.addEventListener("formdata",this.setFormData),this.getForm()?.addEventListener("reset",e=>{this.value=this._initialValue}),this.input.addEventListener("input",e=>{this.dispatchEvent(new Event("input"))}),this.input.addEventListener("change",e=>{this.input.setCustomValidity(""),this.dispatchEvent(new Event("change"))})}get files(){return this.reflectTarget.files}isValid(){return this.input.checkValidity()}reportValidity(){this.input.reportValidity()}disconnectedCallback(){this.getForm()?.removeEventListener("formdata",this.setFormData)}static get observedAttributes(){return[...Object.keys(o)]}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r,o)}}customElements.get(i.__localName)||customElements.define(i.__localName,i);
