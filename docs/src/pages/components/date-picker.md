---
layout: ../../layouts/MainLayout.astro
title: 'Date Picker'
---

Date Picker is just a wrapper around `<input>` elements of `type="date"` that let the user enter a date, either with a textbox that validates the input or a special date picker interface.

<div class="preview">
  <cc-date-picker label="Start date"></cc-date-picker>
</div>

```html
<cc-date-picker label="Start date"></cc-date-picker>
```

## Initial Value

<div class="preview">
  <cc-date-picker label="Start date" value="2023-10-31"></cc-date-picker>
</div>

```html
<cc-date-picker label="Start date" value="2023-10-31"></cc-date-picker>
```

## Max Value

Add a `max` attribute to set the latest date to accept.

<div class="preview">
  <cc-date-picker label="Start date" max="2023-12-31"></cc-date-picker>
</div>

```html
<cc-date-picker label="Start date" max="2023-12-31"></cc-date-picker>
```

## Min Value

Add a `min` attribute to set the earliest date to accept.

<div class="preview">
  <cc-date-picker label="Start date" min="2023-11-01"></cc-date-picker>
</div>

```html
<cc-date-picker label="Start date" min="2023-11-01"></cc-date-picker>
```

## Step

For `date` inputs, the value of `step` is given in days; and is treated as a number of milliseconds equal to 86,400,000 times the `step` value (the underlying numeric value is in milliseconds). The default value of `step` is 1, indicating 1 day.

Note: Specifying `any` as the value for `step` has the same effect as `1` for `date` inputs.

<div class="preview">
  <cc-date-picker label="Start date" step="5"></cc-date-picker>
</div>

```html
<cc-date-picker label="Start date" step="5"></cc-date-picker>
```

## Helper Text

<div class="preview">
  <cc-date-picker 
    label="Start date" 
    helper-text="Please select your start date."
  >
  </cc-date-picker>
</div>

```html
<cc-date-picker 
  label="Start date" 
  helper-text="Please select your start date."
>
</cc-date-picker>
```

## Required

Use the required attribute to make filling in the date mandatory — an error will be displayed if you try to submit an empty date field.

<div class="preview">
  <form method="POST" onsubmit="alert(new FormData(this).get('start-date')); return false;">
    <cc-date-picker label="Start date" required name="start-date"></cc-date-picker>
    <cc-button type="submit">Submit</cc-button>
  </form>
</div>

```html
<form method="POST" onsubmit="alert(new FormData(this).get('start-date')); return false;">
  <cc-date-picker label="Start date" required name="start-date"></cc-date-picker>
  <cc-button type="submit">Submit</cc-button>
</form>
```

## Label Position

Side-aligned labels are beneficial in reducing the overall height of a form, particularly when vertical space is constrained or dealing with longer forms.

<div class="preview">
  <cc-date-picker label="Start date" value="2023-10-31" label-position-side></cc-date-picker>
</div>

```html
  <cc-date-picker label="Start date" value="2023-10-31" label-position-side></cc-date-picker>
```

## Accessibility Concerns

Provide instructions to help users understand how to complete the form and use individual form controls. Indicate any required and optional input, data formats, and other relevant information. When using the max attribute, ensure this maximum requirement is understood by the user. Providing instructions within the `label` may be sufficient. If providing instructions outside of labels, which allows more flexible positioning and design, consider using `aria-labelledby` or `aria-describedby`. In this case, you would add `helper-text` to provide additional instructions.


<div class="preview">
  <cc-date-picker 
    label="Start date" 
    max="2023-12-31"
    helper-text="Latest date accepted is 2023-12-31."
  >
  </cc-date-picker>
</div>

```html
<cc-date-picker 
  label="Start date" 
  max="2023-12-31"
  helper-text="Latest date accepted is 2023-12-31."
>
</cc-date-picker>
```