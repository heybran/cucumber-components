import{F as i}from"../assets/form-element-1a56e9b6.js";import"../icon/icon.js";import"../assets/base-element-f411db3f.js";customElements.get("cc-switch")||customElements.define("cc-switch",class extends i{set checked(t){this.input.checked=t,this.input.ariaChecked=t?"true":"false"}set disabled(t){this.input.disabled=t}set required(t){this.input.required=t}set value(t){this.input.value=t}get value(){return this.input.value}set name(t){this.input.name=t}connectedCallback(){super.render(`<label part="base">
  <input
		class="sr-only"
		type="checkbox"
		role="switch"
		aria-busy="false"
		onchange="this.getRootNode().host.onInputChange(event)" 
  />
	<span part="control">
    <span part="thumb" aria-hidden="true">
      <cc-icon icon="cross"></cc-icon>
    </span>
    <span part="thumb" aria-hidden="true">
      <cc-icon icon="check"></cc-icon>
    </span>
  </span>
	<div part="label">
    <slot part="label"></slot>
    </div>
  </label>
<div part="helper-text">
  <slot name="helper-text"></slot>
</div>
`,`*{box-sizing:border-box}:host{--border-color: #adaba8;--background-color: #adaba8;--primary-color: #6d4aff;--size: 1.5em;--gap: .5em;--helper-text-color: #667085;display:block}:host([size="small"]){font-size:.875rem}:host([size="large"]){font-size:1.25rem}.sr-only{clip:rect(0 0 0 0);border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;top:0;width:1px}label{cursor:pointer;display:inline-flex;align-items:center;gap:var(--gap)}:host([disabled]) label{opacity:.5;cursor:not-allowed}:host([layout="reverse"]) [part=control]{order:2}[part=helper-text]{margin-left:calc(var(--size) * 2 + var(--gap));color:var(--helper-text-color);line-height:1.2;margin-top:-2px}slot[name=helper-text]{font-size:.8em}[part=control]{position:relative;display:inline-flex;align-items:center;justify-content:space-between;border:1px solid var(--border-color);border-radius:var(--size);width:calc(var(--size) * 2)}[part=control]:before{bottom:1px;content:"";left:1px;position:absolute;top:1px;background-color:var(--background-color);border-radius:1.7142857143em;transform:translate(0);transition:transform .25s cubic-bezier(.34,1.56,.64,1),background-color .25s cubic-bezier(.33,1,.68,1);width:calc(var(--size) - 2px);height:calc(var(--size) - 2px)}:host([checked]) [part=control]:before{transform:translate(calc(var(--size) - 2px));background-color:var(--primary-color)}[part=thumb]{width:var(--size);height:var(--size);border-radius:100%;display:inline-flex;align-items:center;justify-content:center;opacity:0;transition:none}:host([checked]) [part=thumb]:last-of-type{opacity:1;z-index:1;transition:opacity .25s ease;color:#fff}:host([theme~="label-top"]) label{flex-direction:column}:host([theme~="label-top"]) [part=label]{order:-1}
`),this._connected=!0,this.checked=this.hasAttribute("checked"),this.disabled=this.hasAttribute("disabled"),this.hasAttribute("value")&&(this.value=this.getAttribute("value")),this.hasAttribute("name")&&(this.name=this.getAttribute("name")),this.hasAttribute("helper-text")&&(this.shadowRoot.querySelector('slot[name="helper-text"]').textContent=this.getAttribute("helper-text")),this._initialChecked=this.hasAttribute("checked"),this.required=this.hasAttribute("required"),this.defer(()=>{const t=this.getForm();t&&(Array.isArray(t.__cucumberElements)||(t.__cucumberElements=[],t.__cucumberElements.push(this)))}),this.getForm()?.addEventListener("formdata",this.setFormData),this.getForm()?.addEventListener("reset",t=>{this._initialChecked!==this.hasAttribute("checked")&&(this._initialChecked?this.setAttribute("checked",""):this.removeAttribute("checked"))})}static get observedAttributes(){return["checked","disabled"]}attributeChangedCallback(t,e,r){e!==null&&(t==="checked"?this.checked=this.hasAttribute("checked"):t==="disabled"&&(this.disabled=this.hasAttribute("disabled")))}isValid(){return!this.hasAttribute("required")||this.checkValidity()}checkValidity(){return this.input.checkValidity()}onInputChange(){this.toggleAttribute("checked",this.input.checked),this.input.ariaChecked=this.input.checked?"true":"false"}});
