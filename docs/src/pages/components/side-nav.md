---
layout: ../../layouts/MainLayout.astro
title: 'Side Nav'
---

`cc-side-nav` component provides a vertical list of `cc-side-nav-item` allowing users to switch between different pages.

<div class="preview" style="justify-content: flex-start; padding: 1rem;">
  <cc-side-nav>
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
  </cc-side-nav>
</div>

```html
<cc-side-nav>
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
</cc-side-nav>
```