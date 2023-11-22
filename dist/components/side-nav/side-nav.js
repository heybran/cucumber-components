import{s as t}from"../assets/shared-69ba54c1.js";import{B as r}from"../assets/base-element-f411db3f.js";class a extends r{static __localName="cc-side-nav";constructor(){super(),this.render(`<button part="label" aria-controls="children">
  <slot name="label"></slot>
  <span part="toggle-icon" aria-hidden="true">
    <cc-icon icon="chevron-down"></cc-icon>
  </span>
</button>
<ul part="children" id="children" role="list" aria-hidden="false">
  <slot></slot>
</ul>
`,`:host{position:relative;display:block;--border-radius-base: 8px;--border-radius-sm: calc(var(--border-radius-base) * .5);--border-radius-md: calc(var(--border-radius-base) * 1);--border-radius-lg: calc(var(--border-radius-base) * 1.5);--border-radius-xl: calc(var(--border-radius-base) * 2)}ul{padding:0;margin:0;list-style-type:none;display:flex;flex-direction:column;gap:var(--gap, .5rem);:host([horizontal]) &{flex-direction:row}}[part=label]{margin:0;font:inherit;color:inherit;display:flex;align-items:center;width:100%;background-color:initial;border:initial;padding:0}::slotted([slot="label"]){margin:var(--cc-side-nav-item-padding-block) var(--cc-side-nav-item-padding-inline)}[part=toggle-icon]{display:none;:host([collapsible]) &{display:initial}}
`,t)}connectedCallback(){if(this.setAttribute("role","navigation"),(this.shadowRoot?.querySelector('slot[name="label"]')).assignedElements().length>0){const e=`side-nav-label-${this.uuid()}`;this.setAttribute("aria-labelledby",e),this.querySelector('[slot="label"]').id=e}}static get observedAttributes(){return[""]}attributeChangedCallback(i,e,n){}}customElements.get(a.__localName)||customElements.define(a.__localName,a);
