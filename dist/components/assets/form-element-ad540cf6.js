import{B as l}from"./base-element-be430c97.js";class g extends l{constructor(){super(),this.attributesDefined=[]}connectSelfToForm(){const t=this.getForm();t&&(Array.isArray(t.__cucumberElements)||(t.__cucumberElements=[]),t.__cucumberElements.includes(this)||(t.__cucumberElements.push(this),t.addEventListener("formdata",this.setFormData)))}get input(){return this.shadowRoot.querySelector("input")}get textarea(){return this.shadowRoot.querySelector("textarea")}get reflectTarget(){return this.textarea?this.textarea:this.input}isValid(){return this.reflectTarget.checkValidity()}focus(){this.reflectTarget?.focus()}setCustomValidity(t){this.reflectTarget.setCustomValidity(t)}reportValidity(){this.reflectTarget.reportValidity()}get value(){return this.reflectTarget.value}getForm(){let t=this.closest("form");for(;t;){if(t instanceof HTMLFormElement)return t;t=t.getRootNode().host}return null}setFormData=t=>{const i=t.formData;if(!this.hasAttribute("name"))return console.warn(`No 'name' attribute found on ${this.localName}, so this form field will not particiate on form submit.`);(this.input?.type!=="checkbox"||this.hasAttribute("checked"))&&this.getForm()&&this.value&&i.set(this.getAttribute("name"),this.value)};attributeChangedCallback(t,i,s,n){const e=n[t];this.attributesDefined.includes(t)||(Object.defineProperty(this,t,{get(){return e.type===Boolean?this.hasAttribute(t):e.type===String?t==="value"?this.reflectTarget.value:this.getAttribute(t)??"":void 0},set(r){e.type===Boolean?this.toggleAttribute(t,!!r):e.type===String&&this.setAttribute(t,r)}}),this.attributesDefined.push(t)),e.reflect&&(e.type===String?this.reflectTarget.setAttribute(e.reflectAs??t,s):e.type===Boolean&&this.reflectTarget.toggleAttribute(t,this.hasAttribute(t)));let a=t.charAt(0).toUpperCase()+t.slice(1);if(t.includes("-")){const r=t.replace(/-(\w)/g,(h,u)=>u.toUpperCase());a=r.charAt(0).toUpperCase()+r.slice(1)}const o=`on${a}Change`;typeof this[o]=="function"&&this[o](s)}}export{g as F};
