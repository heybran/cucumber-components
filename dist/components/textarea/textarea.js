import{s as o}from"../assets/shared-69ba54c1.js";import{F as i}from"../assets/form-element-1a56e9b6.js";import{b as r}from"../assets/form-field-properties-584fd27e.js";import"../assets/base-element-f411db3f.js";class t extends i{constructor(){super(),this.render(`<div class="container">
  <label for="textarea">
    <slot name="label"></slot>
  </label>
  <textarea id="textarea" part="textarea" spellcheck="true" aria-describedby="helper-text"></textarea>
  <div part="helper-text" id="helper-text">
    <slot name="helper-text"></slot>
  </div>
</div>`,`textarea{width:100%;border-radius:var(--_border-radius-md);border:1px solid var(--_border-color-normal);padding:1em;margin-top:.25rem;resize:vertical;font-family:inherit;font-size:inherit;font-weight:inherit}textarea:focus-visible{outline-color:var(--_primary-color);box-shadow:var(--_box-shadow)}textarea[disabled]{cursor:not-allowed;opacity:.5}label{font-weight:var(--label-font-weight, 600)}[part=helper-text]{color:#5c5958;font-size:80%}
`,o)}static __localName="cc-textarea";set value(e){this.reflectTarget.value=e}get value(){return this.reflectTarget.value}onLabelChange(e){this.shadowRoot.querySelector('slot[name="label"]').textContent=e}onHelperTextChange(e){this.shadowRoot.querySelector('slot[name="helper-text"]').textContent=e}connectedCallback(){const e=this.getForm();e&&(Array.isArray(e.__cucumberElements)||(e.__cucumberElements=[]),e.__cucumberElements.push(this)),this.getForm()?.addEventListener("formdata",this.setFormData)}isValid(){return this.reflectTarget.checkValidity()}reportValidity(){this.reflectTarget.reportValidity()}static get observedAttributes(){return[...Object.keys(r)]}attributeChangedCallback(e,a,l){super.attributeChangedCallback(e,a,l,r)}}customElements.get(t.__localName)||customElements.define(t.__localName,t);
