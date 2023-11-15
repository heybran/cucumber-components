import{s as a}from"../assets/shared-267037b7.js";import{B as n}from"../assets/base-element-be430c97.js";class i extends n{static __localName="cc-side-nav-item";constructor(){super(),this.render(`<div part="container">
  <a id="link" part="link" aria-current="false">
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="suffix"></slot>
  </a>
  <slot name="actions"></slot>
  <ul part="children" role="list" aria-hidden="true" hidden>
    <slot name="children"></slot>
  </ul>
  <div class="sr-only" id="i18n">Toggle child items</div>
</div>`,`:host{position:relative;display:block;min-width:10em;--border-radius-base: 8px;--border-radius-sm: calc(var(--border-radius-base) * .5);--border-radius-md: calc(var(--border-radius-base) * 1);--border-radius-lg: calc(var(--border-radius-base) * 1.5);--border-radius-xl: calc(var(--border-radius-base) * 2)}[part=container]{display:flex;align-items:center}[part=link]{flex:1 1 auto;min-width:0px;display:grid;grid-template-columns:auto 1fr auto;align-items:center;text-decoration:none;color:inherit;font:inherit;width:100%;padding:var(--cc-side-nav-item-padding-block) var(--cc-side-nav-item-padding-inline);gap:.5rem;border-radius:var(--border-radius-sm);&:hover,&[aria-current=true]{background-color:var(--cc-gray-1);color:var(--link-hover-color)}}[part=link][href]{cursor:pointer}
`,a)}connectedCallback(){this.setAttribute("role","listitem"),this.toggleActiveState(),document.addEventListener("click",this.handleAnchorClick.bind(this))}handleAnchorClick(t){const e=t.composedPath().find(r=>r.tagName==="A");e&&t.defaultPrevented&&e.getAttribute("href")&&this.toggleActiveState()}toggleActiveState(){const t=window.location.pathname;this.getAttribute("path")===t?this.link.setAttribute("aria-current","true"):this.link.setAttribute("aria-current","false")}static get observedAttributes(){return["path"]}get link(){return this.shadowRoot.querySelector("a")}attributeChangedCallback(t,e,r){t==="path"&&this.link.setAttribute("href",r)}}customElements.get(i.__localName)||customElements.define(i.__localName,i);
