import{B as o}from"../assets/base-element-b7991dcc.js";customElements.define("cc-form-layout",class extends o{connectedCallback(){super.render('<div part="container"><slot></slot></div>',`:host{display:block;max-width:100%;--cc-form-item-label-width: 8em;--cc-form-item-label-spacing: 1em;--cc-form-item-row-spacing: 1em;--cc-form-layout-column-spacing: 1.5em;--cc-form-layout-columns: 1;--cc-form-layout-column-gap: 1.5em;--cc-form-layout-row-gap: 1em}@media (min-width: 400px){:host{--cc-form-layout-columns: 2}}[part=container]{display:grid;align-items:end;column-gap:var(--cc-form-layout-column-gap);row-gap:var(--cc-form-layout-row-gap);grid-template-columns:repeat(var(--cc-form-layout-columns--global, var(--cc-form-layout-columns)),1fr)}::slotted([colspan="2"]){grid-column:span 2}::slotted([colspan="3"]){grid-column:span 3}
`)}});
