import{B as r}from"../assets/base-element-f411db3f.js";customElements.define("cc-horizontal-layout",class extends r{connectedCallback(){super.render("<slot></slot>",`:host{display:flex;gap:var(--gap);box-sizing:border-box;align-items:center;max-width:100%;--border-radius-base: 8px;--border-radius-small: calc(var(--border-radius-base) * .5);--border-radius-medum: calc(var(--border-radius-base) * 1);--border-radius-large: calc(var(--border-radius-base) * 1.5);--border-radius-xl: calc(var(--border-radius-base) * 2)}:host([spacing~="small"]){--gap: .25rem}:host([spacing~="medium"]){--gap: .5rem}:host,:host([spacing~="standard"]){--gap: 1rem}:host([spacing~="large"]){--gap: 1.5rem}:host([theme~="padding"]){padding:1rem;border-radius:var(--border-radius-medum)}:host([theme~="margin"]){margin:1rem}
`)}});
