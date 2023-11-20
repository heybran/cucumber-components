import{F as i}from"../assets/form-element-caaf4a05.js";import"../icon/icon.js";import"../assets/base-element-b7991dcc.js";customElements.get("cc-checkbox")||customElements.define("cc-checkbox",class extends i{set checked(t){this.input.checked=t,this.input.ariaChecked=t?"true":"false"}set disabled(t){this.input.disabled=t}set required(t){this.input.required=t}set value(t){this.input.value=t}get value(){return this.input.value}set name(t){this.input.name=t}set label(t){this.shadowRoot.querySelector('[part="label"] slot').textContent=t}connectedCallback(){super.render(`<label part="base">
  <input
		class="sr-only"
		type="checkbox"
		aria-busy="false"
		onchange="this.getRootNode().host.onInputChange(event)" 
  />
	<span part="checkbox" aria-hidden="true">
    <svg
			role="presentation"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			fill="currentColor"
			class="bi bi-check-lg"
			viewBox="0 0 16 16"
		>
			<path
				d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
			/>
		</svg>
    </span><span part="label">
      <slot></slot>
    </span>
    <slot name="tooltip"></slot>
  </label>
`,`*{box-sizing:border-box}:host{--border-color: #adaba8;--background-color: #e0e0e0;--background-color-hover: #6d4aff;--checkbox-size: 1.25em;--border-radius: .25em;display:inline-block}:host([size="small"]){font-size:.875rem}:host([size="large"]){font-size:1.5rem}.sr-only,:host([label-sr-only]) [part=label]{clip:rect(0 0 0 0);border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;top:0;width:1px}label{cursor:pointer;display:inline-flex;align-items:center;gap:.5em;position:relative}:host([disabled]) label{opacity:.5;cursor:not-allowed}:host([layout="reverse"]) [part=checkbox]{order:2}[part=checkbox]{width:var(--checkbox-size);height:var(--checkbox-size);position:relative;display:inline-flex;align-items:center;background-color:var(--background-color);border-radius:var(--border-radius);transition:filter .15s ease,background-color .15s ease;color:#fff;flex-shrink:0}:host(:not([checked],[disabled])) label:hover [part=checkbox]{filter:brightness(.9)}[part=checkbox] svg{left:5%;position:absolute;width:90%;height:100%;transform:scale(0);transition:.15s}:host([checked]) [part=checkbox]{background-color:var(--background-color-hover)}:host([checked]) [part=checkbox] svg{transform:scale(1)}input:focus-visible+[part=checkbox]{outline:var(--background-color-hover) auto 1px;outline-offset:3px}
`),this._connected=!0,this.checked=this.hasAttribute("checked"),this.disabled=this.hasAttribute("disabled"),this.hasAttribute("value")&&(this.value=this.getAttribute("value")),this.hasAttribute("name")&&(this.name=this.getAttribute("name")),this.hasAttribute("label")&&(this.label=this.getAttribute("label")),this._initialChecked=this.hasAttribute("checked"),this.required=this.hasAttribute("required"),this.defer(()=>{const t=this.getForm();t&&(Array.isArray(t.__cucumberElements)||(t.__cucumberElements=[],t.__cucumberElements.push(this)))}),this.getForm()?.addEventListener("formdata",this.setFormData),this.getForm()?.addEventListener("reset",t=>{this._initialChecked!==this.hasAttribute("checked")&&(this._initialChecked?this.setAttribute("checked",""):this.removeAttribute("checked"))})}static get observedAttributes(){return["checked","disabled"]}attributeChangedCallback(t,e,s){e!==null&&(t==="checked"?this.checked=this.hasAttribute("checked"):t==="disabled"&&(this.disabled=this.hasAttribute("disabled")))}isValid(){return!this.hasAttribute("required")||this.checkValidity()}checkValidity(){return this.input.checkValidity()}onInputChange(){this.toggleAttribute("checked",this.input.checked),this.input.ariaChecked=this.input.checked?"true":"false",this.dispatchEvent(new Event("change"))}});
