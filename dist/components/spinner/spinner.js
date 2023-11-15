class r extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
      <style>:host{--track-width: 2px;--track-color: #adaba8;--indicator-color: #6d4aff;--speed: 1s;--size: 1em;display:inline-block}[part=spinner]{height:var(--size);width:var(--size);border-width:var(--track-width);border-style:solid;border-color:var(--indicator-color) var(--track-color) var(--track-color) var(--track-color);border-radius:50%;animation:spin var(--speed) linear infinite}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
</style>
      <div part="spinner" role="progressbar" aria-label="Loading"></div>
    `}}customElements.get("cc-spinner")||customElements.define("cc-spinner",r);export{r as default};
