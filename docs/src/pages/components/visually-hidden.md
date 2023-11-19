---
layout: ../../layouts/MainLayout.astro
title: 'Visually Hidden'
---

<div class="preview">
  <cc-visually-hidden>
    <a href="#">Skip to main content</a>
  </cc-visually-hidden>
</div>

```html
<cc-visually-hidden>
  <a href="#">Skip to main content</a>
</cc-visually-hidden>
```

## Used as button text

<div class="preview">
<cc-button size="small">
  <cc-icon icon="chevron-right"></cc-icon>
  <cc-visually-hidden>Go to next page</cc-visually-hidden>
</cc-button>
</div>

```html
<cc-button size="small">
  <cc-icon icon="chevron-right"></cc-icon>
  <cc-visually-hidden>Go to next page</cc-visually-hidden>
</cc-button>
```