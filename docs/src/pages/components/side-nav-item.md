---
layout: ../../layouts/MainLayout.astro
title: 'Side Nav Item'
---

`cc-side-nav-item` component is to be used inside [`cc-side-nav`](/components/side-nav) component.

<div class="preview" style="flex-direction: column; align-items: flex-start; padding: 1rem;">
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

## Collapsible Nav Items

@todo

<div class="preview" style="flex-direction: column; align-items: flex-start; padding: 1rem;">
  <cc-side-nav-item path="#">
    <cc-icon icon="grid" slot="prefix"></cc-icon>
    Dashboard
    <cc-icon icon="chevron-down" slot="suffix"></cc-icon>
  </cc-side-nav-item>
  <cc-side-nav-item path="#">
    <cc-icon icon="people" slot="prefix"></cc-icon>
    Users
    <cc-icon icon="chevron-down" slot="suffix"></cc-icon>
  </cc-side-nav-item>
  <cc-side-nav-item path="#">
    <cc-icon icon="table" slot="prefix"></cc-icon>
    Companies
    <cc-icon icon="chevron-down" slot="suffix"></cc-icon>
  </cc-side-nav-item>
</div>

## Standalone SVG Icon

You can use standalone SVG icon to be used a prefix slot. Please keep in mind to add these three attributes to hide from screen readers.

- aria-hidden="true"
- role="img"
- focusable="false"

<div class="preview" style="flex-direction: column; align-items: flex-start; padding: 1rem;">
  <cc-side-nav-item path="#">
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="16" height="16" fill="currentColor" viewBox="0 0 16 16"
      slot="prefix"
      aria-hidden="true"
      role="img"
      focusable="false"
    >
      <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
      <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
    </svg>
    Settings
  </cc-side-nav-item>
</div>

```html
<cc-side-nav-item path="#">
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" height="16" fill="currentColor" viewBox="0 0 16 16"
    slot="prefix"
    aria-hidden="true"
    role="img"
    focusable="false"
  >
    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
  </svg>
  Settings
</cc-side-nav-item>
```