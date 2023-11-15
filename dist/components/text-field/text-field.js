import{F as r}from"../assets/form-element-ad540cf6.js";import{s as a}from"../assets/shared-267037b7.js";import{T as n}from"../assets/form-field-properties-584fd27e.js";import"../assets/base-element-be430c97.js";class e extends r{constructor(){super(),this.render(`<div part="container">
	<label part="label" for="input">
    <slot name="label"></slot>
  </label>
	<div part="input-container">
		<slot name="prefix"></slot>
    <input
			part="input"
			id="input"
			type="text"
			autocomplete="off"
			autocapitalize="off"
			autocorrect="off"
			spellcheck="false"
			aria-invalid="false"
			aria-describedby="helper-text"
		/>
    <slot name="suffix"></slot>
	</div>
	<div part="helper-text" id="helper-text">
		<slot name="helper-text"></slot>
	</div>
	<div part="error-message" id="error-message"></div>
</div>
`,`:host{--border-radius: 8px;--border-color-normal: #adaba8;--border-color-focus: hsl(252, 100%, 65%);--box-shadow-color: rgba(109, 74, 255, .2);--helper-text-color: #5c5958;--label-font-weight: 600;display:block}input{width:100%;height:auto;background:none;border-radius:var(--border-radius);min-height:0;min-width:0;color:inherit;outline:none;padding:1ch 1.5ch;-webkit-appearance:none;font:inherit;margin:0;border:0}label{font-weight:var(--label-font-weight);padding-block-end:.5em;display:inline-block}[part=input-container]{border:1px solid var(--border-color-normal);border-radius:var(--border-radius);display:flex;align-items:center;position:relative;transition:.15s cubic-bezier(.22,1,.36,1),visibility 0s}[part=input-container]:focus-within{border-color:var(--border-color-focus);box-shadow:0 0 0 .1875rem var(--box-shadow-color)}[part=helper-text]:not(:empty){color:var(--helper-text-color);font-size:.9em;margin-top:.25em}::slotted([slot="suffix"]),::slotted([slot="prefix"]){padding-inline:1ch}:host([label-position-side]) [part=container]{display:flex;align-items:center;gap:1em;justify-content:space-between}:host([label-position-side]) [part=input-container]{margin-top:0}
`,a)}static __localName="cc-text-field";onLabelChange(t){this.shadowRoot.querySelector('slot[name="label"]').textContent=t}onHelperTextChange(t){this.shadowRoot.querySelector('slot[name="helper-text"]').textContent=t}connectedCallback(){this.connectSelfToForm(),this._initialValue=this.value,this.getForm()?.addEventListener("reset",t=>{this.value=this._initialValue}),this.input.addEventListener("input",t=>{this.dispatchEvent(new Event("input"))}),this.input.addEventListener("change",t=>{this.dispatchEvent(new Event("change"))})}disconnectedCallback(){this.getForm()?.removeEventListener("formdata",this.setFormData)}static get observedAttributes(){return[...Object.keys(n)]}attributeChangedCallback(t,o,i){super.attributeChangedCallback(t,o,i,n)}}customElements.get(e.__localName)||customElements.define(e.__localName,e);
