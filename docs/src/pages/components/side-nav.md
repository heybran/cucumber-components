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

## Nav Item Active State

The side item which path matches the current URL will have a different background color indicating its active state. (Not able to show this on this docs).

<div class="preview" style="justify-content: flex-start; padding: 1rem;">
  <cc-side-nav>
    <cc-side-nav-item path="/components/side-nav">
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
  <!-- set a temporary path attribute to demonstrate the active state -->
  <cc-side-nav-item path="/components/side-nav">
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

## Navigation Label

Add a `span` element with slot set to `label` to describe the side nav. Side nav component will populate the `aria-labellby` attribute to connect the `span` with side nav.

<div class="preview" style="align-items: flex-start; flex-direction: column; padding: 1rem;">
  <cc-side-nav>
    <span slot="label">Admin</span>
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
  <cc-side-nav>
    <span slot="label">Messages</span>
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
  <span slot="label">Admin</span>
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

<cc-side-nav>
  <span slot="label">Messages</span>
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

## Navigation Orientation

Add a `horizontal` attirbute to make the side navigation items layed out horizontally.

<div class="preview" style="justify-content: flex-start; padding: 1rem;">
  <cc-side-nav horizontal>
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
<cc-side-nav horizontal>
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