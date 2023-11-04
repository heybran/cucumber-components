---
layout: ../../layouts/MainLayout.astro
title: 'Side Nav Item'
---

`cc-side-nav-item` component is to be used along with `cc-side-nav` component.

<div class="preview">
  <cc-side-nav-item path="#">
    <cc-icon icon="grid" slot="prefix"></cc-icon>
    Dashboard
  </cc-side-nav-item>
  <cc-side-nav-item path="#">
    <cc-icon icon="people" slot="prefix"></cc-icon>
    Users
  </cc-side-nav-item>
  <cc-side-nav-item path="#">
    <cc-icon icon="table" slot="prefix"></cc-icon>
    Companies
  </cc-side-nav-item>
</div>

```html
<cc-side-nav-item path="#">
  <cc-icon icon="grid" slot="prefix"></cc-icon>
  Dashboard
</cc-side-nav-item>
<cc-side-nav-item path="#">
  <cc-icon icon="people" slot="prefix"></cc-icon>
  Users
</cc-side-nav-item>
<cc-side-nav-item path="#">
  <cc-icon icon="table" slot="prefix"></cc-icon>
  Companies
</cc-side-nav-item>
```