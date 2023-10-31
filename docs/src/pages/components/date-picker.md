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

## Required

Use the required attribute to make filling in the date mandatory — an error will be displayed if you try to submit an empty date field.

<div class="preview">
  <form method="POST">
    <cc-date-picker label="Start date" required></cc-date-picker>
    <cc-button type="submit">Submit</cc-button>
  </form>
</div>

```html
<form method="POST">
  <cc-date-picker label="Start date" required></cc-date-picker>
  <cc-button type="submit">Submit</cc-button>
</form>
```

@todo: label position