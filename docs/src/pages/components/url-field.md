---
layout: ../../layouts/MainLayout.astro
title: 'URL Field'
---

URL Field is a wrapper around `<input type="text">` element to let the user enter and edit a URL. By default, `cc-url-field` will have a prefix text of `https://`, use `prefix-text` attribute to add a custom url prefix.

<div class="preview" style="display: block;">
  <cc-url-field label="Website" name="website"></cc-url-field>
  <cc-url-field label="GitHub profile" name="github" prefix-text="https://github.com/"></cc-url-field>
</div>

```html
<cc-url-field label="Website" name="website"></cc-url-field>
<cc-url-field label="GitHub profile" name="github" prefix-text="https://github.com/"></cc-url-field>
```

## Placeholder

<div class="preview">
<cc-url-field label="Website" name="website" placeholder="example.com"></cc-url-field>
</div>

```html
<cc-url-field label="Website" name="website" placeholder="example.com"></cc-url-field>
```

## Initial Value

<div class="preview">
<cc-url-field label="Website" name="website" value="awesomestartup.com"></cc-url-field>
</div>

```html
<cc-url-field label="Website" name="website" value="awesomestartup.com"></cc-url-field>
```

## Helper Text

<div class="preview">
  <cc-url-field label="GitHub profile" name="github" prefix-text="https://github.com/" helper-text="Please enter your GitHub profile."></cc-url-field>
</div>

```html
<cc-url-field label="GitHub profile" name="github" prefix-text="https://github.com/" helper-text="Please enter your GitHub profile."></cc-url-field>
```

Add a `helper-text-position-top` to move helper text above the email input field.

<div class="preview">
<cc-url-field 
  label="GitHub profile" 
  name="github" 
  prefix-text="https://github.com/" 
  helper-text="Please enter your GitHub profile."
  helper-text-position-top
></cc-url-field>
</div>

```html
<cc-url-field 
  label="GitHub profile" 
  name="github" 
  prefix-text="https://github.com/" 
  helper-text="Please enter your GitHub profile."
  helper-text-position-top
></cc-url-field>
```

## Required

<div class="preview">
  <form method="POST">
    <cc-url-field 
      label="Website" 
      name="website" 
      pattern=".+\..+"
      required
    ></cc-url-field>
    <cc-button type="submit">Submit</cc-button>
  </form>
</div>

```html
<form method="POST">
  <cc-url-field 
    label="Website" 
    name="website" 
    pattern=".+\..+"
    required
  ></cc-url-field>
  <cc-button type="submit">Submit</cc-button>
</form>
```

## Readonly

If the readonly attribute is specified on an input element, because the user can not edit the input, the element does not participate in constraint validation.

When an input has the readonly attribute, the :read-only pseudo-class also applies to it. Conversely, inputs that support the readonly attribute but don't have the attribute set match the :read-write pseudo-class.

The difference between disabled and readonly is that read-only controls can still function and are still focusable, whereas disabled controls can not receive focus and are not submitted with the form and generally do not function as controls until they are enabled. 

Because a read-only field cannot have its value changed by a user interaction, required does not have any effect on inputs with the readonly attribute also specified.

<div class="preview">
  <cc-url-field label="Website" value="example.com" readonly></cc-url-field>
</div>

```html
<cc-url-field label="Website" value="example.com" readonly></cc-url-field>
```

## Disabled

The Boolean `disabled` attribute, when present, makes the element not mutable, focusable, or even submitted with the form. The user can neither edit nor focus on the control, nor its form control descendants.

If the `disabled` attribute is specified on a form control, the element and its form control descendants do not participate in constraint validation. Often browsers grey out such controls and it won't receive any browsing events, like mouse clicks or focus-related ones.

<div class="preview">
  <cc-url-field label="Website" disabled></cc-url-field>
</div>

```html
<cc-url-field label="Website" disabled></cc-url-field>
```

## Pattern Validation

Use the pattern `attribute` to specify a regular expression the value must match for it to be valid. 

<div class="preview">
<form method="post" onsubmit="handlePatternEmailSubmit(event);">
  <cc-url-field 
    style="max-width: 20em;"
    label="Best Startup Ever corporate website" 
    name="website" 
    required
    pattern=".+\.beststartupever\.com"
    helper-text="Please provide only a Best Startup Ever corporate website address."
  ></cc-url-field>
  <cc-button type="submit">Submit</cc-button>
</form>
<script>
  function handlePatternEmailSubmit(event) {
    event.preventDefault();
    alert('Website is valid.');
  }
</script>
</div>

```html
<form method="post" onsubmit="handlePatternEmailSubmit(event);">
  <cc-url-field 
    style="max-width: 20em;"
    label="Best Startup Ever corporate website" 
    name="website" 
    required
    pattern=".+\.beststartupever\.com"
    helper-text="Please provide only a Best Startup Ever corporate website address."
  ></cc-url-field>
  <cc-button type="submit">Submit</cc-button>
</form>
<script>
  function handlePatternEmailSubmit(event) {
    event.preventDefault();
    alert('Website is valid.');
  }
</script>
```

## Label Position

Side-aligned labels are beneficial in reducing the overall height of a form, particularly when vertical space is constrained or dealing with longer forms.

<div class="preview">
  <cc-url-field label="Website" label-position-side></cc-url-field>
</div>

```html
<cc-url-field label="Website" label-position-side></cc-url-field>
```

## Suffix

A `cc-button` can be added as `suffix` slot to act as copy email button.

<div class="preview">
  <cc-url-field label="Website" readonly value="example.com">
    <cc-button 
      slot="suffix" 
      theme="square borderless"
      onclick="navigator.clipboard.writeText(this.parentElement.value);"
    >
      <cc-icon label="Copy website address" icon="copy"></cc-icon>
    </cc-button>
  </cc-url-field>
</div>

```html
<cc-url-field label="Website" readonly value="example.com">
  <cc-button 
    slot="suffix" 
    theme="square borderless"
    onclick="navigator.clipboard.writeText(this.parentElement.value);"
  >
    <cc-icon label="Copy website address" icon="copy"></cc-icon>
  </cc-button>
</cc-url-field>
```

## List

From MDN: The value given to the list attribute should be the id of a `<datalist>` element located in the same document. The `<datalist>` provides a list of predefined values to suggest to the user for this input. Any values in the list that are not compatible with the type are not included in the suggested options. The values provided are suggestions, not requirements: users can select from this predefined list or provide a different value.

You need to add a `<datalist>` element and set its slot to `datalist`. Although keep in mind that browser support for `<datalist>` is not great.

<div class="preview">
  <cc-url-field label="Website" list="website-options">
    <datalist id="website-options" slot="datalist">
      <option value="example1.com"></option>
      <option value="example2.com"></option>
      <option value="example3.com"></option>
    </datalist>
  </cc-url-field>
</div>

```html
<cc-url-field label="Website" list="website-options">
  <datalist id="website-options" slot="datalist">
    <option value="example1.com"></option>
    <option value="example2.com"></option>
    <option value="example3.com"></option>
  </datalist>
</cc-url-field>
```

## Dirname

The `dirname` attribute enables the submission of the directionality of the element. When included, the form control will submit with two `name/value` pairs: the first being the `name` and `value`, and the second being the value of the `dirname` attribute as the name, with a value of `ltr` or `rtl` as set by the browser.

@todo: Not quite sure how these works yet.