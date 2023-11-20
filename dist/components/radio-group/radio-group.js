import{F as s}from"../assets/form-element-caaf4a05.js";import"../assets/base-element-b7991dcc.js";customElements.get("cc-radio-group")||customElements.define("cc-radio-group",class extends s{set checked(e){this.input.checked=e,this.input.ariaChecked=e?"true":"false"}set disabled(e){this.setAttribute("aria-disabled",e?"true":"false"),e?this.defaultSlot.assignedElements().forEach(t=>t.setAttribute("disabled","")):this.defaultSlot.assignedElements().forEach(t=>t.removeAttribute("disabled"))}get value(){const e=this.defaultSlot.assignedElements().find(t=>t.hasAttribute("checked"));return e?e.value:null}set label(e){this.shadowRoot.querySelector('slot[name="label"]').textContent=e}connectedCallback(){super.render(`<fieldset part="fieldset" role="radiogroup">
	<label part="label">
    <slot name="label"></slot>
    <span part="required-indicator" aria-hidden="true"></span>
  </label>
	<div part="group-field">
    <slot></slot>
  </div>
	<div part="helper-text">
    <slot name="helper-text"></slot>
  </div>
	<div part="error-message">
    <slot name="error-message"></slot>
  </div>
</fieldset>
<slot name="tooltip"></slot>
`,`*{box-sizing:border-box}:host{--border-color: #adaba8;--background-color: #e0e0e0;--background-color-hover: #6d4aff;--checkbox-size: 1.25em;--border-radius: .25em;--label-font-weight: 600}:host([size="small"]){font-size:.875rem}:host([size="large"]){font-size:1.5rem}fieldset{position:relative;border:none;padding:0;margin:0}.sr-only,:host([label-sr-only]) [part=label]{clip:rect(0 0 0 0);border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;top:0;width:1px}label{display:inline-flex;align-items:center;gap:.5em;font-weight:var(--label-font-weight)}:host([disabled]) label{opacity:.5;cursor:not-allowed}[part=group-field]{display:flex;flex-wrap:wrap;flex-direction:row;gap:.5em;margin-top:.5em}:host([theme~="horizontal"]) [part=group-field]{flex-direction:row}:host([theme~="vertical"]) [part=group-field]{flex-direction:column}
`),this._connected=!0,this.disabled=this.hasAttribute("disabled"),this.hasAttribute("label")&&(this.label=this.getAttribute("label")),this._initialChecked=this.defaultSlot.assignedElements().find(e=>e.hasAttribute("selected")),this.defer(()=>{const e=this.getForm();e&&(Array.isArray(e.__cucumberElements)||(e.__cucumberElements=[]),e.__cucumberElements.push(this),this.value||this.defaultSlot.assignedElements()[0].input.setAttribute("tabindex","0"))}),this.defaultSlot.assignedElements().forEach(e=>{e.addEventListener("change",t=>{this.defaultSlot.assignedElements().filter(i=>i!==t.target).forEach(i=>i.removeAttribute("checked"))})}),this.getForm()?.addEventListener("formdata",this.setFormData),this.getForm()?.addEventListener("reset",e=>{this._initialChecked!==this.hasAttribute("checked")&&(this._initialChecked?this.setAttribute("checked",""):this.removeAttribute("checked"))})}isValid(){return!this.hasAttribute("required")||!!this.value}static get observedAttributes(){return["checked","disabled"]}attributeChangedCallback(e,t,i){t!==null&&(e==="checked"?this.checked=this.hasAttribute("checked"):e==="disabled"&&(this.disabled=this.hasAttribute("disabled")))}onInputChange(){this.toggleAttribute("checked",this.input.checked),this.input.ariaChecked=this.input.checked?"true":"false"}});
