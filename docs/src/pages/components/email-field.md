---
layout: ../../layouts/MainLayout.astro
title: 'Email Field'
---

# Email Field

Email Field is a wrapper around `<input type="email">` element which accepts only email addresss as input.

<div class="preview">
  <cc-email-field label="Email" name="email"></cc-email-field>
</div>

```html
<cc-email-field label="Email" name="email"></cc-email-field>
```

## Placeholder

<div class="preview">
<cc-email-field label="Email" name="email" placeholder="mail@example.com"></cc-email-field>
</div>

```html
<cc-email-field label="Email" name="email" placeholder="mail@example.com"></cc-email-field>
```

## Initial Value

<div class="preview">
<cc-email-field label="Email" name="email" value="hello@example.com"></cc-email-field>
</div>

```html
<cc-email-field label="Email" name="email" value="hello@example.com"></cc-email-field>
```

## Helper Text

<div class="preview">
  <cc-email-field label="Email" name="email" helper-text="Please enter your email address."></cc-email-field>
</div>

```html
<cc-email-field label="Email" name="email" helper-text="Please enter your email address."></cc-email-field>
```

Add a `helper-text-position-top` to move helper text above the email input field.

<div class="preview">
<cc-email-field 
  style="max-width: 20em;"
  label="Email" 
  name="email" 
  pattern=".+@beststartupever\.com"
  helper-text="Please provide only a Best Startup Ever corporate email address."
  helper-text-position-top
></cc-email-field>
</div>

```html
<cc-email-field 
  style="max-width: 20em;"
  label="Email" 
  name="email" 
  pattern=".+@beststartupever\.com"
  helper-text="Please provide only a Best Startup Ever corporate email address."
  helper-text-position-top
></cc-email-field>
```

## Required

<div class="preview">
  <form method="POST">
    <cc-email-field label="Email" name="email" helper-text="Please enter your email address." required></cc-email-field>
    <cc-button type="submit">Subscribe</cc-button>
  </form>
</div>

```html
<form method="POST">
  <cc-email-field 
    label="Email" 
    name="email" 
    helper-text="Please enter your email address." 
    required
  ></cc-email-field>
  <cc-button type="submit">Subscribe</cc-button>
</form>
```

## Readonly

If the readonly attribute is specified on an input element, because the user can not edit the input, the element does not participate in constraint validation.

When an input has the readonly attribute, the :read-only pseudo-class also applies to it. Conversely, inputs that support the readonly attribute but don't have the attribute set match the :read-write pseudo-class.

The difference between disabled and readonly is that read-only controls can still function and are still focusable, whereas disabled controls can not receive focus and are not submitted with the form and generally do not function as controls until they are enabled. 

Because a read-only field cannot have its value changed by a user interaction, required does not have any effect on inputs with the readonly attribute also specified.

TODO: for readonly component, adding a copy button.

<div class="preview">
  <cc-email-field label="Email" value="hello@example.com" readonly></cc-email-field>
</div>

```html
<cc-email-field label="Email" value="hello@example.com" readonly></cc-email-field>
```

## Disabled

The Boolean `disabled` attribute, when present, makes the element not mutable, focusable, or even submitted with the form. The user can neither edit nor focus on the control, nor its form control descendants.

If the `disabled` attribute is specified on a form control, the element and its form control descendants do not participate in constraint validation. Often browsers grey out such controls and it won't receive any browsing events, like mouse clicks or focus-related ones.

<div class="preview">
  <cc-email-field label="Email" disabled></cc-email-field>
</div>

```html
<cc-email-field label="Email" disabled></cc-email-field>
```

## Accept Multiple Email Addresses

Add a `multiple` attribute to accept a list of properly-formed comma-separated email addresses.Any trailing and leading whitespace is removed from each address in the list.

When `multiple` is set on the email field, the user can include zero (if not also required), one or more comma-separated email addresses.

> Accessibility cencerns: Provide instructions to help users understand how to complete the form and use individual form controls. Indicate any required and optional input, data formats, and other relevant information. When using the multiple attribute, inform the user that multiple values are allowed and provide directions on how to provide multiple values, such as "separate email addresses with a comma."

<div class="preview">
  <form method="post" onsubmit="handleMultipleEmailsSubmit(event);">
    <cc-email-field 
      style="max-width: 20em;"
      label="Emails" 
      name="emails" 
      helper-text="Separate email addresses with a comma, e.g.: james@example.com, jane@example.com"
      multiple
    ></cc-email-field>
    <cc-button type="submit">Submit</cc-button>
  </form>
  <script>
    function handleMultipleEmailsSubmit(event) {
      event.preventDefault();
      alert((new FormData(event.target)).get('emails'));
    }
  </script>
</div>

```html
<form method="post" onsubmit="handleMultipleEmailsSubmit(event);">
  <cc-email-field 
    style="max-width: 20em;"
    label="Emails" 
    name="emails" 
    helper-text="Separate email addresses with a comma, e.g.: james@example.com, jane@example.com"
    multiple
  ></cc-email-field>
  <cc-button type="submit">Submit</cc-button>
</form>
<script>
  function handleMultipleEmailsSubmit(event) {
    event.preventDefault();
    alert((new FormData(event.target)).get('emails'));
  }
</script>
```

## Pattern Validation

If you need the entered email address to be restricted further than just "any string that looks like an email address," you can use the pattern `attribute` to specify a regular expression the value must match for it to be valid. If the `multiple` attribute is specified, each individual item in the comma-delineated list of values must match the regular expression.

<div class="preview">
<form method="post" onsubmit="handlePatternEmailSubmit(event);">
  <cc-email-field 
    style="max-width: 20em;"
    label="Email" 
    name="email" 
    required
    pattern=".+@beststartupever\.com"
    helper-text="Please provide only a Best Startup Ever corporate email address."
  ></cc-email-field>
  <cc-button type="submit">Submit</cc-button>
</form>
<script>
  function handlePatternEmailSubmit(event) {
    event.preventDefault();
    alert('Email is valid.');
  }
</script>
</div>

```html
<form method="post" onsubmit="handlePatternEmailSubmit(event);">
  <cc-email-field 
    style="max-width: 20em;"
    label="Email" 
    name="email" 
    required
    pattern=".+@beststartupever\.com"
    helper-text="Please provide only a Best Startup Ever corporate email address."
  ></cc-email-field>
  <cc-button type="submit">Submit</cc-button>
</form>
<script>
  function handlePatternEmailSubmit(event) {
    event.preventDefault();
    alert('Email is valid.');
  }
</script>
```

## Label Position

Side-aligned labels are beneficial in reducing the overall height of a form, particularly when vertical space is constrained or dealing with longer forms.

<div class="preview">
  <cc-email-field label="Email" label-position-side></cc-email-field>
</div>

```html
<cc-email-field label="Email" label-position-side></cc-email-field>
```

## Prefix & Suffix

<div class="preview">
  <cc-email-field label="Email">
    <cc-icon slot="prefix" icon="email"></cc-icon>
  </cc-email-field>
</div>

```html
<cc-email-field label="Email">
  <cc-icon slot="prefix" icon="email"></cc-icon>
</cc-email-field>
```

<div class="preview">
  <cc-email-field label="Email" readonly value="hello@example.com">
    <cc-button slot="suffix" theme="square borderless">
      <cc-icon label="Copy email address" icon="copy"></cc-icon>
    </cc-button>
  </cc-email-field>
</div>

```html
<cc-email-field label="Email" readonly value="hello@example.com">
  <cc-button slot="suffix" theme="square borderless">
    <cc-icon label="Copy email address" icon="copy"></cc-icon>
  </cc-button>
</cc-email-field>
```