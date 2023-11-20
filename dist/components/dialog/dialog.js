import{s as i}from"../assets/shared-267037b7.js";import{B as a}from"../assets/base-element-b7991dcc.js";import"../button/button.js";import"../icon/icon.js";import"../tooltip/tooltip.js";import"../assets/form-element-caaf4a05.js";class o extends a{static __localName="cc-dialog";#e=[];constructor(){super(),this.render(`<dialog part="dialog" aria-labelledby="title">
  <form method="dialog" part="form">
    <header part="header">
      <h3 part="title" id="title">
        <slot name="title">Dialog default title.</slot>
      </h3>
      <cc-button part="close-button" theme="borderless icon round" onclick="this.closest('dialog').close('close');">
        <cc-icon icon="cross" label="Close dialog" style="--size: 2em;"></cc-icon>
        <cc-tooltip slot="tooltip" text="Close dialog"></cc-tooltip>
      </cc-button>
    </header>
    <article>
      <slot part="body"></slot>
    </article>
    <footer part="footer">
      <menu part="footer-menu">
        <slot name="footer-actions-left"></slot>
      </menu>
      <menu part="footer-menu">
        <slot name="footer-actions-right"></slot>
      </menu>
    </footer>
  </form>
</dialog>`,`:host{display:inline-block}dialog{padding:0;display:grid;border-width:0;overflow:hidden;margin:auto;position:fixed;inset:0;z-index:var(--layer-important);border-radius:var(--border-radius);box-shadow:#25262708 0 -1px 2px,#2526270a 0 3px 2px -2px,#2526270a 0 7px 5px -2px,#2526270d 0 12px 10px -2px,#2526270f 0 22px 18px -2px,#25262712 0 41px 33px -2px,#25262714 0 100px 80px -2px;inline-size:var(--width, 55ch)}dialog::backdrop{transition:backdrop-filter .5s ease}dialog:not([open]){pointer-events:none;opacity:0}dialog[open]{animation:slide-down .3s ease forwards;@media (prefers-reduced-motion){animation:none}}html:has(dialog[open]) .dashboard-main{overflow:hidden}form>:is(header,article,footer){padding:1em}form{display:flex;flex-direction:column;max-height:calc(100vh - 6px - 2em)}article{overflow-y:auto}header{display:flex;gap:var(--cc-size-3);justify-content:space-between;align-items:center;padding-block:var(--cc-size-3);padding-inline:var(--cc-size-5);border-bottom:1px solid var(--cc-border-color);& h3{margin:0}[part=close-button]{color:var(--cc-gray-7)}}footer{display:flex;flex-wrap:wrap;gap:var(--cc-size-3);justify-content:space-between;align-items:flex-start;padding-inline:var(--cc-size-5);padding-block:var(--cc-size-3);border-top:1px solid var(--cc-border-color);& menu{margin:0;padding:0}}@keyframes slide-down{0%{transform:translateY(-50px)}}
`,i)}get dialog(){return this.shadowRoot.querySelector("dialog")}show(){this.setupA11yDesc(),this.dialog.showModal(),this.setupInitialFocus()}close(){this.#e.length>0&&this.#e.forEach(e=>{e(),this.#e=this.#e.filter(t=>t!==e)}),this.dialog.close()}hide(){return this.dialog.close()}afterHide(e){this.#e.push(e)}setupInitialFocus(){const e=this.querySelector("[initial-focus]");e&&e?.focus()}setupA11yDesc(){const e=this.querySelector("[a11y-desc]");if(!e)return;const t=e.cloneNode(!0);t.id="dialog-desc",t.setAttribute("hidden",""),this.dialog.setAttribute("aria-describedby","dialog-desc"),this.shadowRoot?.appendChild(t),this.afterHide(()=>{t.remove(),this.dialog.removeAttribute("aria-describedby")})}connectedCallback(){}static get observedAttributes(){return["label"]}attributeChangedCallback(e,t,s){e==="label"&&(this.shadowRoot.querySelector('slot[name="title"]').textContent=this.getAttribute("label"))}}customElements.get(o.__localName)||customElements.define(o.__localName,o);
