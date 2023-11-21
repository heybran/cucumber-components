---
layout: ../../layouts/MainLayout.astro
title: 'Popover'
---

## Bottom Center (default)
<div class="preview">
  <cc-popover-wrapper>
    <cc-button theme="primary" slot="trigger">Bottom center (default)</cc-button>
    <!-- placement default to bottom center -->
    <cc-popover>
      <ul class="wrapper">
        <li>You're signed in as @heybran</li>
        <li>
          <cc-button style="width: 100%;">Settings</cc-button>
        </li>
        <li>
          <cc-button theme="primary" style="width: 100%;">Sign out</cc-button>
        </li>
      </ul>
    </cc-popover>
  </cc-popover-wrapper>
</div>

```html
<cc-popover-wrapper>
  <cc-button theme="primary" slot="trigger">Bottom center (default)</cc-button>
  <!-- placement default to bottom center -->
  <cc-popover>
    <ul class="wrapper">
      <li>You're signed in as @heybran</li>
      <li>
        <cc-button style="width: 100%;">Settings</cc-button>
      </li>
      <li>
        <cc-button theme="primary" style="width: 100%;">Sign out</cc-button>
      </li>
    </ul>
  </cc-popover>
</cc-popover-wrapper>
```

## Bottom Start

<div class="preview">
  <cc-popover-wrapper>
    <cc-button theme="primary" slot="trigger">Bottom start</cc-button>
    <cc-popover placement="bottom-start">
      <ul class="wrapper">
        <li>You're signed in as @heybran</li>
        <li>
          <cc-button style="width: 100%;">Settings</cc-button>
        </li>
        <li>
          <cc-button theme="primary" style="width: 100%;">Sign out</cc-button>
        </li>
      </ul>
    </cc-popover>
  </cc-popover-wrapper>
</div>

```html
<cc-popover-wrapper>
  <cc-button theme="primary" slot="trigger">Bottom start</cc-button>
  <cc-popover placement="bottom-start">
    <ul class="wrapper">
      <li>You're signed in as @heybran</li>
      <li>
        <cc-button style="width: 100%;">Settings</cc-button>
      </li>
      <li>
        <cc-button theme="primary" style="width: 100%;">Sign out</cc-button>
      </li>
    </ul>
  </cc-popover>
</cc-popover-wrapper>
```

## Bottom End
<div class="preview">
  <cc-popover-wrapper>
    <cc-button theme="primary" slot="trigger">Bottom end</cc-button>
    <cc-popover placement="bottom-end">
      <ul class="wrapper">
        <li>You're signed in as @heybran</li>
        <li>
          <cc-button style="width: 100%;">Settings</cc-button>
        </li>
        <li>
          <cc-button theme="primary" style="width: 100%;">Sign out</cc-button>
        </li>
      </ul>
    </cc-popover>
  </cc-popover-wrapper>
</div>

```html
<cc-popover-wrapper>
  <cc-button theme="primary" slot="trigger">Bottom end</cc-button>
  <cc-popover placement="bottom-end">
    <ul class="wrapper">
      <li>You're signed in as @heybran</li>
      <li>
        <cc-button style="width: 100%;">Settings</cc-button>
      </li>
      <li>
        <cc-button theme="primary" style="width: 100%;">Sign out</cc-button>
      </li>
    </ul>
  </cc-popover>
</cc-popover-wrapper>
```
<style>
  .wrapper {
    padding: 1rem !important;
    list-style: ' ' !important;
    margin: 0 !important;
    display: flex;
    gap: 1rem;
    justify-content: stretch;
    flex-direction: column;
  }
</style>