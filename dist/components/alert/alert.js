import{B as e}from"../assets/base-element-f411db3f.js";customElements.define("cc-alert",class extends e{constructor(){super(),this.alertsShown=[]}connectedCallback(){super.render(`<div part="container" role="alert" aria-hidden="true">
  <div part="icon">
    <slot name="icon"></slot>
  </div>
  <div part="message" aria-live="polite">
    <slot></slot>
  </div>
  <div part="close">
    <cc-button theme="icon" no-border onclick="this.getRootNode().host.hide();">
      <cc-icon icon="cross" size="medium"></cc-icon>
    </cc-button>
  </div>
</div>`,`*{box-sizing:border-box}:host{position:fixed;bottom:2rem;left:50%;transform:translate(-50%)}[part=container]{display:inline-flex;align-items:center;gap:.5em;border-radius:1ch;background-color:#000;color:#fff;padding:.5ch;transform:translateY(50%);opacity:0;pointer-events:none;transition:transform .2s ease-in,opacity .2s}:host([variant="danger"]) [part=container]{background-color:#dc3251}:host([open]) [part=container]{pointer-events:initial;opacity:1;transform:translateY(0)}
`)}show(){this.setAttribute("open",""),this.container.removeAttribute("hidden"),this.container.setAttribute("aria-hidden","false"),this.alertsShown.push(this);const t=setTimeout(()=>{this.hide(),this.alertsShown.pop(),clearTimeout(t)},5e3)}hide(){this.removeAttribute("open"),this.container.setAttribute("hidden",""),this.container.setAttribute("aria-hidden","true")}});
