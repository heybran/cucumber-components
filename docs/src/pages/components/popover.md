---
layout: ../../layouts/MainLayout.astro
title: 'Popover'
---

## Bottom Center (default)

`cc-popover` defaults to `bottom-center` placement. When there is no enough room to place the popover beneath the trigger element, popover will adjust itself to be placed on `top-center`.
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

Add an attribute `placement="bottom-center"` if you want the popover to left-aligned with trigger element underneath. When there is no enough room to place the popover beneath the trigger element, popover will adjust itself to be placed on `top-start`.

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
Add an attribute `placement="bottom-end"` if you want the popover to right-aligned with trigger element underneath. When there is no enough room to place the popover beneath the trigger element, popover will adjust itself to be placed on `top-end`.

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


## Top Center
Add an attribute `placement="top-center"` if you want the popover to center-aligned and above trigger element. When there is no enough room to place the popover above the trigger element, popover will adjust itself to be placed on `bottom-center`.

<div class="preview">
  <cc-popover-wrapper>
    <cc-button theme="primary" slot="trigger">Top center</cc-button>
    <cc-popover placement="top-center">
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
  <cc-popover placement="top-center">
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

## Top Start
Add an attribute `placement="top-start"` if you want the popover to left-aligned and above trigger element. When there is no enough room to place the popover above the trigger element, popover will adjust itself to be placed on `bottom-start`.

<div class="preview">
  <cc-popover-wrapper>
    <cc-button theme="primary" slot="trigger">Top start</cc-button>
    <cc-popover placement="top-start">
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
  <cc-button theme="primary" slot="trigger">Top start</cc-button>
  <cc-popover placement="top-start">
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

## Top End
Add an attribute `placement="top-end"` if you want the popover to right-aligned and above trigger element. When there is no enough room to place the popover above the trigger element, popover will adjust itself to be placed on `bottom-end`.

<div class="preview">
  <cc-popover-wrapper>
    <cc-button theme="primary" slot="trigger">Top end</cc-button>
    <cc-popover placement="top-end">
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
  <cc-button theme="primary" slot="trigger">Top end</cc-button>
  <cc-popover placement="top-end">
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