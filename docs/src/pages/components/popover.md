---
layout: ../../layouts/MainLayout.astro
title: 'cc-popover'
---

## Trigger Mode

`cc-popover-wrapper` supports three trigger modes: `hover`, `focus`, and `click`. You can use the `trigger` attribute to
specify
the trigger mode. The default trigger mode is `click`.

<div class="preview">
  <cc-space>
    <cc-popover-wrapper trigger="click">
      <cc-button theme="primary" slot="trigger">Click me(default)</cc-button>
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
    <cc-popover-wrapper trigger="focus">
      <cc-button theme="primary" slot="trigger">Focus me</cc-button>
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
    <cc-popover-wrapper trigger="hover">
      <cc-button theme="primary" slot="trigger">Hover me</cc-button>
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
  </cc-space>
</div>

## Placement

`cc-popover` supports 12 placement options. You can use the `placement` attribute to specify the placement. The default
placement is `bottom-center`. The placement options are `bottom-center`, `bottom-start`, `bottom-end`, `top-center`,
`top-start`, `top-end`, `left-center`, `left-start`, `left-end`, `right-center`, `right-start`, and `right-end`.

<div class="preview">
     <div className="demo">
      <div style="margin-inline-start: 84px; white-space: nowrap">
        <cc-popover-wrapper trigger="hover">
           <cc-button style="width: 80px; margin: 5px" slot="trigger">TL</cc-button>
          <cc-popover placement="top-start"> 
            <h1>Top Start!</h1>
          </cc-popover>
        </cc-popover-wrapper>
        <cc-popover-wrapper trigger="hover">
           <cc-button style="width: 80px; margin: 5px" slot="trigger">Top</cc-button>
          <cc-popover placement="top-center"> 
            <h1>Top Enter!</h1>
          </cc-popover>
        </cc-popover-wrapper>
        <cc-popover-wrapper trigger="hover">
           <cc-button style="width: 80px; margin: 5px" slot="trigger">TR</cc-button>
          <cc-popover placement="top-end"> 
            <h1>Top End!</h1>
          </cc-popover>
        </cc-popover-wrapper>
      </div>
      <div style="width: 80px;float: inline-start">
        <cc-popover-wrapper trigger="hover">
           <cc-button style="width: 80px; margin: 5px" slot="trigger">LT</cc-button>
          <cc-popover placement="left-start"> 
            <h1>Left Start!</h1>
          </cc-popover>
        </cc-popover-wrapper>
        <cc-popover-wrapper trigger="click">
           <cc-button style="width: 80px; margin: 5px" slot="trigger">Left</cc-button>
          <cc-popover placement="left-center"> 
            <h1>Left Enter!</h1>
          </cc-popover>
        </cc-popover-wrapper>
        <cc-popover-wrapper trigger="hover">
           <cc-button style="width: 80px; margin: 5px" slot="trigger">LB</cc-button>
          <cc-popover placement="left-end"> 
            <h1>Left End!</h1>
          </cc-popover>
        </cc-popover-wrapper>
      </div>
      <div style="width: 80px; margin-inline-start: 354px">
        <cc-popover-wrapper trigger="hover">
           <cc-button style="width: 80px; margin: 5px" slot="trigger">RT</cc-button>
          <cc-popover placement="right-start"> 
            <h1>Right Start!</h1>
          </cc-popover>
        </cc-popover-wrapper>
        <cc-popover-wrapper trigger="hover">
           <cc-button style="width: 80px; margin: 5px" slot="trigger">Right</cc-button>
          <cc-popover placement="right-center"> 
            <h1>Right Enter!</h1>
          </cc-popover>
        </cc-popover-wrapper>
        <cc-popover-wrapper trigger="hover">
           <cc-button style="width: 80px; margin: 5px" slot="trigger">RB</cc-button>
          <cc-popover placement="right-end"> 
            <h1>Right End!</h1>
          </cc-popover>
        </cc-popover-wrapper>
      </div>
      <div style="margin-inline-start: 80px; clear: both; white-space: nowrap">
        <cc-popover-wrapper trigger="hover">
           <cc-button style="width: 80px; margin: 5px" slot="trigger">BL</cc-button>
          <cc-popover placement="bottom-start"> 
            <h1>Bottom Start!</h1>
          </cc-popover>
        </cc-popover-wrapper>
        <cc-popover-wrapper trigger="hover">
           <cc-button style="width: 80px; margin: 5px" slot="trigger">Bottom</cc-button>
          <cc-popover placement="bottom-center"> 
            <h1>Bottom Center!</h1>
          </cc-popover>
        </cc-popover-wrapper>
        <cc-popover-wrapper trigger="hover">
           <cc-button style="width: 80px; margin: 5px" slot="trigger">BR</cc-button>
          <cc-popover placement="bottom-end"> 
            <h1>Bottom End!</h1>
          </cc-popover>
        </cc-popover-wrapper>
      </div>
    </div>

</div>

[//]: # (## Bottom Center &#40;default&#41;)

[//]: # ()
[//]: # (`cc-popover` defaults to `bottom-center` placement. When there is no enough room to place the popover beneath the)

[//]: # (trigger element, popover will adjust itself to be placed on `top-center`.)

[//]: # (<div class="preview">)

[//]: # (  <cc-popover-wrapper>)

[//]: # (    <cc-button theme="primary" slot="trigger">Bottom center &#40;default&#41;</cc-button>)

[//]: # (    <!-- placement default to bottom center -->)

[//]: # (    <cc-popover>)

[//]: # (      <ul class="wrapper">)

[//]: # (        <li>You're signed in as @heybran</li>)

[//]: # (        <li>)

[//]: # (          <cc-button style="width: 100%;">Settings</cc-button>)

[//]: # (        </li>)

[//]: # (        <li>)

[//]: # (          <cc-button theme="primary" style="width: 100%;">Sign out</cc-button>)

[//]: # (        </li>)

[//]: # (      </ul>)

[//]: # (    </cc-popover>)

[//]: # (  </cc-popover-wrapper>)

[//]: # (</div>)

[//]: # ()
[//]: # (```html)

[//]: # ()
[//]: # (<cc-popover-wrapper>)

[//]: # (  <cc-button theme="primary" slot="trigger">Bottom center &#40;default&#41;</cc-button>)

[//]: # (  <!-- placement default to bottom center -->)

[//]: # (  <cc-popover>)

[//]: # (    <ul class="wrapper">)

[//]: # (      <li>You're signed in as @heybran</li>)

[//]: # (      <li>)

[//]: # (        <cc-button style="width: 100%;">Settings</cc-button>)

[//]: # (      </li>)

[//]: # (      <li>)

[//]: # (        <cc-button theme="primary" style="width: 100%;">Sign out</cc-button>)

[//]: # (      </li>)

[//]: # (    </ul>)

[//]: # (  </cc-popover>)

[//]: # (</cc-popover-wrapper>)

[//]: # (```)

[//]: # ()
[//]: # (## Bottom Start)

[//]: # ()
[//]: # (Add an attribute `placement="bottom-center"` if you want the popover to left-aligned with trigger element underneath.)

[//]: # (When there is no enough room to place the popover beneath the trigger element, popover will adjust itself to be placed)

[//]: # (on `top-start`.)

[//]: # ()
[//]: # (<div class="preview">)

[//]: # (  <cc-popover-wrapper>)

[//]: # (    <cc-button theme="primary" slot="trigger">Bottom start</cc-button>)

[//]: # (    <cc-popover placement="bottom-start">)

[//]: # (      <ul class="wrapper">)

[//]: # (        <li>You're signed in as @heybran</li>)

[//]: # (        <li>)

[//]: # (          <cc-button style="width: 100%;">Settings</cc-button>)

[//]: # (        </li>)

[//]: # (        <li>)

[//]: # (          <cc-button theme="primary" style="width: 100%;">Sign out</cc-button>)

[//]: # (        </li>)

[//]: # (      </ul>)

[//]: # (    </cc-popover>)

[//]: # (  </cc-popover-wrapper>)

[//]: # (</div>)

[//]: # ()
[//]: # (```html)

[//]: # ()
[//]: # (<cc-popover-wrapper>)

[//]: # (  <cc-button theme="primary" slot="trigger">Bottom start</cc-button>)

[//]: # (  <cc-popover placement="bottom-start">)

[//]: # (    <ul class="wrapper">)

[//]: # (      <li>You're signed in as @heybran</li>)

[//]: # (      <li>)

[//]: # (        <cc-button style="width: 100%;">Settings</cc-button>)

[//]: # (      </li>)

[//]: # (      <li>)

[//]: # (        <cc-button theme="primary" style="width: 100%;">Sign out</cc-button>)

[//]: # (      </li>)

[//]: # (    </ul>)

[//]: # (  </cc-popover>)

[//]: # (</cc-popover-wrapper>)

[//]: # (```)

[//]: # ()
[//]: # (## Bottom End)

[//]: # ()
[//]: # (Add an attribute `placement="bottom-end"` if you want the popover to right-aligned with trigger element underneath. When)

[//]: # (there is no enough room to place the popover beneath the trigger element, popover will adjust itself to be placed)

[//]: # (on `top-end`.)

[//]: # ()
[//]: # (<div class="preview">)

[//]: # (  <cc-popover-wrapper>)

[//]: # (    <cc-button theme="primary" slot="trigger">Bottom end</cc-button>)

[//]: # (    <cc-popover placement="bottom-end">)

[//]: # (      <ul class="wrapper">)

[//]: # (        <li>You're signed in as @heybran</li>)

[//]: # (        <li>)

[//]: # (          <cc-button style="width: 100%;">Settings</cc-button>)

[//]: # (        </li>)

[//]: # (        <li>)

[//]: # (          <cc-button theme="primary" style="width: 100%;">Sign out</cc-button>)

[//]: # (        </li>)

[//]: # (      </ul>)

[//]: # (    </cc-popover>)

[//]: # (  </cc-popover-wrapper>)

[//]: # (</div>)

[//]: # ()
[//]: # (```html)

[//]: # ()
[//]: # (<cc-popover-wrapper>)

[//]: # (  <cc-button theme="primary" slot="trigger">Bottom end</cc-button>)

[//]: # (  <cc-popover placement="bottom-end">)

[//]: # (    <ul class="wrapper">)

[//]: # (      <li>You're signed in as @heybran</li>)

[//]: # (      <li>)

[//]: # (        <cc-button style="width: 100%;">Settings</cc-button>)

[//]: # (      </li>)

[//]: # (      <li>)

[//]: # (        <cc-button theme="primary" style="width: 100%;">Sign out</cc-button>)

[//]: # (      </li>)

[//]: # (    </ul>)

[//]: # (  </cc-popover>)

[//]: # (</cc-popover-wrapper>)

[//]: # (```)

[//]: # ()
[//]: # (## Top Center)

[//]: # ()
[//]: # (Add an attribute `placement="top-center"` if you want the popover to center-aligned and above trigger element. When)

[//]: # (there is no enough room to place the popover above the trigger element, popover will adjust itself to be placed)

[//]: # (on `bottom-center`.)

[//]: # ()
[//]: # (<div class="preview">)

[//]: # (  <cc-popover-wrapper>)

[//]: # (    <cc-button theme="primary" slot="trigger">Top center</cc-button>)

[//]: # (    <cc-popover placement="top-center">)

[//]: # (      <ul class="wrapper">)

[//]: # (        <li>You're signed in as @heybran</li>)

[//]: # (        <li>)

[//]: # (          <cc-button style="width: 100%;">Settings</cc-button>)

[//]: # (        </li>)

[//]: # (        <li>)

[//]: # (          <cc-button theme="primary" style="width: 100%;">Sign out</cc-button>)

[//]: # (        </li>)

[//]: # (      </ul>)

[//]: # (    </cc-popover>)

[//]: # (  </cc-popover-wrapper>)

[//]: # (</div>)

[//]: # ()
[//]: # (```html)

[//]: # ()
[//]: # (<cc-popover-wrapper>)

[//]: # (  <cc-button theme="primary" slot="trigger">Bottom end</cc-button>)

[//]: # (  <cc-popover placement="top-center">)

[//]: # (    <ul class="wrapper">)

[//]: # (      <li>You're signed in as @heybran</li>)

[//]: # (      <li>)

[//]: # (        <cc-button style="width: 100%;">Settings</cc-button>)

[//]: # (      </li>)

[//]: # (      <li>)

[//]: # (        <cc-button theme="primary" style="width: 100%;">Sign out</cc-button>)

[//]: # (      </li>)

[//]: # (    </ul>)

[//]: # (  </cc-popover>)

[//]: # (</cc-popover-wrapper>)

[//]: # (```)

[//]: # ()
[//]: # (## Top Start)

[//]: # ()
[//]: # (Add an attribute `placement="top-start"` if you want the popover to left-aligned and above trigger element. When there)

[//]: # (is no enough room to place the popover above the trigger element, popover will adjust itself to be placed)

[//]: # (on `bottom-start`.)

[//]: # ()
[//]: # (<div class="preview">)

[//]: # (  <cc-popover-wrapper>)

[//]: # (    <cc-button theme="primary" slot="trigger">Top start</cc-button>)

[//]: # (    <cc-popover placement="top-start">)

[//]: # (      <ul class="wrapper">)

[//]: # (        <li>You're signed in as @heybran</li>)

[//]: # (        <li>)

[//]: # (          <cc-button style="width: 100%;">Settings</cc-button>)

[//]: # (        </li>)

[//]: # (        <li>)

[//]: # (          <cc-button theme="primary" style="width: 100%;">Sign out</cc-button>)

[//]: # (        </li>)

[//]: # (      </ul>)

[//]: # (    </cc-popover>)

[//]: # (  </cc-popover-wrapper>)

[//]: # (</div>)

[//]: # ()
[//]: # (```html)

[//]: # ()
[//]: # (<cc-popover-wrapper>)

[//]: # (  <cc-button theme="primary" slot="trigger">Top start</cc-button>)

[//]: # (  <cc-popover placement="top-start">)

[//]: # (    <ul class="wrapper">)

[//]: # (      <li>You're signed in as @heybran</li>)

[//]: # (      <li>)

[//]: # (        <cc-button style="width: 100%;">Settings</cc-button>)

[//]: # (      </li>)

[//]: # (      <li>)

[//]: # (        <cc-button theme="primary" style="width: 100%;">Sign out</cc-button>)

[//]: # (      </li>)

[//]: # (    </ul>)

[//]: # (  </cc-popover>)

[//]: # (</cc-popover-wrapper>)

[//]: # (```)

[//]: # ()
[//]: # (## Top End)

[//]: # ()
[//]: # (Add an attribute `placement="top-end"` if you want the popover to right-aligned and above trigger element. When there is)

[//]: # (no enough room to place the popover above the trigger element, popover will adjust itself to be placed on `bottom-end`.)

[//]: # ()
[//]: # (<div class="preview">)

[//]: # (  <cc-popover-wrapper>)

[//]: # (    <cc-button theme="primary" slot="trigger">Top end</cc-button>)

[//]: # (    <cc-popover placement="top-end">)

[//]: # (      <ul class="wrapper">)

[//]: # (        <li>You're signed in as @heybran</li>)

[//]: # (        <li>)

[//]: # (          <cc-button style="width: 100%;">Settings</cc-button>)

[//]: # (        </li>)

[//]: # (        <li>)

[//]: # (          <cc-button theme="primary" style="width: 100%;">Sign out</cc-button>)

[//]: # (        </li>)

[//]: # (      </ul>)

[//]: # (    </cc-popover>)

[//]: # (  </cc-popover-wrapper>)

[//]: # (</div>)

[//]: # ()
[//]: # (```html)

[//]: # ()
[//]: # (<cc-popover-wrapper>)

[//]: # (  <cc-button theme="primary" slot="trigger">Top end</cc-button>)

[//]: # (  <cc-popover placement="top-end">)

[//]: # (    <ul class="wrapper">)

[//]: # (      <li>You're signed in as @heybran</li>)

[//]: # (      <li>)

[//]: # (        <cc-button style="width: 100%;">Settings</cc-button>)

[//]: # (      </li>)

[//]: # (      <li>)

[//]: # (        <cc-button theme="primary" style="width: 100%;">Sign out</cc-button>)

[//]: # (      </li>)

[//]: # (    </ul>)

[//]: # (  </cc-popover>)

[//]: # (</cc-popover-wrapper>)

[//]: # (```)

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
