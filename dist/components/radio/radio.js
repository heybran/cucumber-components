import{F as r}from"../assets/form-element-1a56e9b6.js";import"../icon/icon.js";import"../assets/base-element-f411db3f.js";customElements.get("cc-radio")||customElements.define("cc-radio",class extends r{set checked(t){this.input.checked=t,this.input.ariaChecked=t?"true":"false",this.input.setAttribute("tabindex",t?"0":"-1")}set disabled(t){this.input.disabled=t}set required(t){this.input.required=t}set value(t){this.input.value=t}get value(){return this.input.value}set name(t){this.input.name=t}set label(t){this.shadowRoot.querySelector('[part="label"] slot').textContent=t}connectedCallback(){super.render(`<label part="base">
  <input
		class="sr-only"
		type="radio"
		aria-busy="false"
		onchange="this.getRootNode().host.onInputChange(event)" 
  />
	<span part="radio" aria-hidden="true"></span>
	<span part="label">
    <slot></slot>
  </span>
  <slot name="tooltip"></slot>
</label>
`,`*{box-sizing:border-box}:host{--border-color: #adaba8;--background-color: #e0e0e0;--background-color-hover: #6d4aff;--checkbox-size: 1.25em;--border-radius: .25em;user-select:none;display:inline-block}:host([size="small"]){font-size:.875rem}:host([size="large"]){font-size:1.5rem}.sr-only,:host([label-sr-only]) [part=label]{clip:rect(0 0 0 0);border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;top:0;width:1px}label{display:inline-flex;align-items:center;gap:.5em}:host([disabled]){opacity:.5;cursor:not-allowed;pointer-events:none}:host([layout="reverse"]) [part=radio]{order:2}[part=radio]{width:var(--checkbox-size);height:var(--checkbox-size);display:inline-flex;align-items:center;background-color:var(--background-color);border-radius:50%;transition:transform .2s cubic-bezier(.12,.32,.54,2),background-color .15s;will-change:transform;color:#fff;position:relative}[part=radio]:before{display:block;content:" ";contain:paint;pointer-events:none;color:transparent;width:100%;height:100%;border-radius:inherit;background-color:inherit;opacity:0;transition:transform .1s,opacity .8s;will-change:transform,opacity}[part=radio]:after{content:"";pointer-events:none;width:0;height:0;border:.3em solid #fff;border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) scale(0);transition:.25s transform;will-change:transform;background-clip:content-box}:host([checked]){pointer-events:none}:host([checked]) [part=radio]:after{transform:translate(-50%,-50%) scale(1)}:host(:not([checked],[disabled])) label:hover [part=radio]{filter:brightness(.9)}:host([checked]) [part=radio]{background-color:var(--background-color-hover)}input:focus-visible+[part=radio]{outline:var(--background-color-hover) auto 1px;outline-offset:3px}
`),this._connected=!0,this.checked=this.hasAttribute("checked"),this.disabled=this.hasAttribute("disabled"),this.hasAttribute("value")&&(this.value=this.getAttribute("value")),this.hasAttribute("name")&&(this.name=this.getAttribute("name")),this.hasAttribute("label")&&(this.label=this.getAttribute("label")),this._initialChecked=this.hasAttribute("checked"),this.required=this.hasAttribute("required"),this.defer(()=>{this.addEventListener("keydown",t=>{if(t.key===" "&&this.hasAttribute("checked")&&t.preventDefault(),document.activeElement===this){if(["ArrowRight","ArrowDown"].includes(t.key)){t.preventDefault();let e=this.nextElementSibling;e||(e=Array.from(this.parentElement.children).find(i=>i.localName===this.localName)),e.input.focus(),e.input.click()}if(["ArrowLeft","ArrowUp"].includes(t.key)){t.preventDefault();let e=this.previousElementSibling;e||(e=Array.from(this.parentElement.children).findLast(i=>i.localName===this.localName)),e.input.focus(),e.input.click()}}})})}static get observedAttributes(){return["checked","disabled"]}attributeChangedCallback(t,e,i){e!==null&&(t==="checked"?this.checked=this.hasAttribute("checked"):t==="disabled"&&(this.disabled=this.hasAttribute("disabled")))}onInputChange(t){this.toggleAttribute("checked",this.input.checked),this.input.ariaChecked=this.input.checked?"true":"false",this.input.setAttribute("tabindex",this.input.checked?"0":"-1"),this.dispatchEvent(new Event("change",{bubbles:!0}))}});