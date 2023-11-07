---
layout: ../../layouts/MainLayout.astro
title: 'Badge'
---

<div class="preview">
  <cc-badge theme="primary">Primary</cc-badge>
  <cc-badge theme="success">Success</cc-badge>
  <cc-badge theme="warning">Warning</cc-badge>
  <cc-badge theme="danger">Danger</cc-badge>
  <cc-badge theme="neutral">Neutral</cc-badge>
</div>

```html
<cc-badge theme="primary">Primary</cc-badge>
<cc-badge theme="success">Success</cc-badge>
<cc-badge theme="warning">Warning</cc-badge>
<cc-badge theme="danger">Danger</cc-badge>
<cc-badge theme="neutral">Neutral</cc-badge>
```

## Rounded Corners

Add a `pill` theme variant to set a rounded corner. 

<div class="preview">
  <cc-badge theme="primary pill">Primary</cc-badge>
  <cc-badge theme="success pill">Success</cc-badge>
  <cc-badge theme="warning pill">Warning</cc-badge>
  <cc-badge theme="danger pill">Danger</cc-badge>
  <cc-badge theme="neutral pill">Neutral</cc-badge>
</div>

```html
<cc-badge theme="primary pill">Primary</cc-badge>
<cc-badge theme="success pill">Success</cc-badge>
<cc-badge theme="warning pill">Warning</cc-badge>
<cc-badge theme="danger pill">Danger</cc-badge>
<cc-badge theme="neutral pill">Neutral</cc-badge>
```

## With numbers only

<div class="preview">
  <cc-badge theme="primary pill">1</cc-badge>
  <cc-badge theme="success pill">2</cc-badge>
  <cc-badge theme="warning pill">3</cc-badge>
  <cc-badge theme="danger pill">4</cc-badge>
  <cc-badge theme="neutral pill">5</cc-badge>
</div>

```html
<div class="preview">
  <cc-badge theme="primary pill">1</cc-badge>
  <cc-badge theme="success pill">2</cc-badge>
  <cc-badge theme="warning pill">3</cc-badge>
  <cc-badge theme="danger pill">4</cc-badge>
  <cc-badge theme="neutral pill">5</cc-badge>
</div>
```

## Used with Buttons

<div class="preview">
  <cc-button>
    Comments
    <cc-badge theme="primary pill">12</cc-badge>
  </cc-button>
  <cc-button>
    Warnings
    <cc-badge theme="warning pill">20</cc-badge>
  </cc-button>
  <cc-button>
    Errors
    <cc-badge theme="danger pill">24</cc-badge>
  </cc-button>
</div>

```html
<cc-button>
  Comments
  <cc-badge theme="primary pill">12</cc-badge>
</cc-button>
<cc-button>
  Warnings
  <cc-badge theme="warning pill">20</cc-badge>
</cc-button>
<cc-button>
  Errors
  <cc-badge theme="danger pill">24</cc-badge>
</cc-button>
```

## Used with Side Nav Items

<div class="preview">
  <cc-side-nav>
    <cc-side-nav-item path="#">
      <cc-icon icon="grid" slot="prefix"></cc-icon>
      Dashboard
      <cc-badge theme="neutral pill" slot="suffix">12</cc-badge>
    </cc-side-nav-item>
    <cc-side-nav-item path="#">
      <cc-icon icon="people" slot="prefix"></cc-icon>
      Users
      <cc-badge theme="neutral pill" slot="suffix">4</cc-badge>
    </cc-side-nav-item>
  </cc-side-nav>
</div>

```html
<cc-side-nav>
  <cc-side-nav-item path="#">
    <cc-icon icon="grid" slot="prefix"></cc-icon>
    Dashboard
    <cc-badge theme="neutral pill" slot="suffix">12</cc-badge>
  </cc-side-nav-item>
  <cc-side-nav-item path="#">
    <cc-icon icon="people" slot="prefix"></cc-icon>
    Users
    <cc-badge theme="neutral pill" slot="suffix">4</cc-badge>
  </cc-side-nav-item>
</cc-side-nav>
```

## Used with Icon Buttons

<div class="preview">
  <cc-button theme="icon borderless no-padding">
    <cc-icon icon="bell" label="Notifications" style="--size: 1.5em;"></cc-icon>
    <cc-badge theme="primary pill">4</cc-badge>
  </cc-button>
  <cc-button theme="icon borderless no-padding">
    <cc-icon icon="chat-left-text" label="New messages" style="--size: 1.5em;"></cc-icon>
    <cc-badge theme="success pill">6</cc-badge>
  </cc-button>
</div>

```html
<cc-button theme="icon borderless no-padding">
  <cc-icon icon="bell" label="Notifications" style="--size: 1.5em;"></cc-icon>
  <cc-badge theme="primary pill">4</cc-badge>
</cc-button>
<cc-button theme="icon borderless no-padding">
  <cc-icon icon="chat-left-text" label="New messages" style="--size: 1.5em;"></cc-icon>
  <cc-badge theme="success pill">6</cc-badge>
</cc-button>
```