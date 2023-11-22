import{F as i}from"../assets/form-element-1a56e9b6.js";import"../icon/icon.js";import"../assets/base-element-f411db3f.js";customElements.define("cc-password-field",class extends i{get input(){return this.shadowRoot.querySelector("input")}set label(t){this.shadowRoot.querySelector('[part="label"] span').textContent=t}set placeholder(t){this.input.placeholder=t}set helperText(t){this.shadowRoot.querySelector('[part="helper-text"]').textContent=t}set readyonly(t){this.input.readOnly=t}set disabled(t){this.input.disabled=t,this.setAttribute("aria-disabled","true"),this.shadowRoot.querySelector('slot[name="suffix"]').firstElementChild?.setAttribute("tabindex","-1")}set pattern(t){this.input.pattern=t}get value(){return this.input.value}set value(t){this.input.value=t}set required(t){this.input.required=t}connectedCallback(){super.render(`<div part="container">
	<label part="label">
    <span></span>
  </label>
	<div part="input-container">
		<slot name="prefix"></slot>
    <input
			part="input"
			type="password"
			autocomplete="off"
			autocapitalize="off"
			autocorrect="off"
			spellcheck="false"
			aria-invalid="false"
		/>
    <slot name="suffix">
      <cc-button
				theme="icon borderless"
				aria-label="Show password"
				aria-pressed="false"
				onclick="this.getRootNode().host.togglePasswordVisibility(this)"
				>
        <cc-icon icon="eye" style="--size: 1.5em"></cc-icon>
      </cc-button>
    </slot>
	</div>
	<div part="helper-text"></div>
	<div part="error-message"></div>
</div>
`,`:host{--border-radius: 8px;--border-color-normal: #adaba8;--border-color-focus: hsl(252, 100%, 65%);--box-shadow-color: rgba(109, 74, 255, .2);--helper-text-color: #5c5958;--label-font-weight: 600;display:block}input{width:100%;height:auto;background:none;border-radius:var(--border-radius);min-height:0;min-width:0;color:inherit;outline:none;padding:1ch 1.5ch;-webkit-appearance:none;font:inherit;margin:0;border:0}label{font-weight:var(--label-font-weight);padding-block:.25em .5em;display:inline-block}:host([label-position-side]) label{padding-block:.25em}[part=input-container]{border:1px solid var(--border-color-normal);border-radius:var(--border-radius);display:flex;align-items:center;position:relative;transition:.15s cubic-bezier(.22,1,.36,1),visibility 0s}:host([readonly]) [part=input-container]{border-style:dashed}[part=input-container]:focus-within{border-color:var(--border-color-focus);box-shadow:0 0 0 .1875rem var(--box-shadow-color)}[part=helper-text]:not(:empty){color:var(--helper-text-color);font-size:.8em;margin-top:.25em}::slotted([slot="suffix"]){padding-inline:1ch}:host([label-position-side]) [part=container]{display:flex;align-items:center;gap:1em;justify-content:space-between}:host([label-position-side]) [part=container]:has([part=helper-text]:not(:empty)){display:grid;grid-template-columns:auto auto;row-gap:0}:host([label-position-side]) [part=container]:has([part=helper-text]:not(:empty)) [part=helper-text]{grid-column:2 / 3}:host([label-position-side]) [part=input-container]{margin-top:0}slot[name=suffix]>*{margin-right:.5ch}:host([reveal-button-hidden]) slot[name=suffix]>*{display:none}[part=helper-text]:empty,[part=error-message]:empty{display:none}:host([readonly]) slot[name=suffix]>*{opacity:.5}:host([disabled]) slot[name=suffix]>*{pointer-events:none}:host([disabled]){opacity:.5}
`),requestAnimationFrame(()=>{const t=`input-${this.uuid()}`;this.shadowRoot.querySelector('[part="label"]').setAttribute("for",t),this.input.id=t;const e=this.getForm();e&&(Array.isArray(e.__cucumberElements)||(e.__cucumberElements=[]),e.__cucumberElements.push(this))}),this.hasAttribute("value")&&(this.value=this.getAttribute("value")??""),this._initialValue=this.value,this.hasAttribute("label")&&(this.label=this.getAttribute("label")??""),this.hasAttribute("placeholder")&&(this.placeholder=this.getAttribute("placeholder")??""),this.hasAttribute("helper-text")&&(this.helperText=this.getAttribute("helper-text")??""),this.hasAttribute("readonly")&&(this.readyonly=!0),this.hasAttribute("disabled")&&(this.disabled=!0),this.hasAttribute("pattern")&&(this.input.pattern=this.getAttribute("pattern")),this.hasAttribute("minlength")&&this.input.setAttribute("minlength",this.getAttribute("minlength")),this.hasAttribute("maxlength")&&this.input.setAttribute("maxlength",this.getAttribute("maxlength")),this.required=this.hasAttribute("required"),this.getForm()?.addEventListener("formdata",this.setFormData),this.getForm()?.addEventListener("reset",t=>{this.value=this._initialValue}),this.input.addEventListener("input",t=>{this.dispatchEvent(new Event("input"))}),this.input.addEventListener("change",t=>{this.input.setCustomValidity(""),this.dispatchEvent(new Event("change"))})}setCustomValidity(t){this.input.setCustomValidity(t)}reportValidity(){this.input.reportValidity()}isValid(){return this.input.checkValidity()}togglePasswordVisibility(t){this.input.type==="password"?(t.setAttribute("aria-label","Hide password"),t.setAttribute("aria-pressed","true"),t.firstElementChild?.setAttribute("icon","eye-slash"),this.input.type="text"):(t.setAttribute("aria-label","Show password"),t.setAttribute("aria-pressed","false"),t.firstElementChild?.setAttribute("icon","eye"),this.input.type="password")}setFormData=t=>{const e=t.formData;if(!this.hasAttribute("name"))return console.warn(`No 'name' attribute found on ${this.localName}, so this form field will not particiate on form submit.`);this.getForm()&&e.set(this.getAttribute("name"),this.value)};static get observedAttributes(){}attributeChangedCallback(t,e,s){}disconnectedCallback(){this.getForm()?.removeEventListener("formdata",this.setFormData)}});
