---
layout: ../../layouts/MainLayout.astro
title: 'Best Practices for Form Fields'
---

*Opinions are mine.*

Most common implementation for required field is to add a `*` or `(required)` after form field label like this.

@todo: A form accessibility design post about required field, put it here if I can ever find it again.

<div class="preview">
  <cc-vertical-layout>
    <div>
      <label for="username">Username *</label>
      <input type="text" id="username" name="username" required />
    </div>
    <cc-divider text="Or"></cc-divider>
    <div>
      <label for="username">Username (required)</label>
      <input type="text" id="username" name="username" required />
    </div>
  </cc-veritcal-layout>
</div>

```html
<cc-vertical-layout>
  <div>
    <label for="username">Username *</label>
    <input type="text" id="username" name="username" required />
  </div>
  <cc-divider text="Or"></cc-divider>
  <div>
    <label for="username">Username (required)</label>
    <input type="text" id="username" name="username" required />
  </div>
</cc-veritcal-layout>
```

But a better and more accessible way to only add a `(optional)` after form fields that are optional, and required fields are just like normal fields as demonstrated below: `Last name` here is an optional field, we just add a `(optional)` helper text after it.

<div class="preview" style="display: block;">
<form method="post" onsubmit="alert('form submitted'); return false;">
  <cc-form-layout>
    <cc-text-field label="First name" required></cc-text-field>
    <cc-text-field label="Last name (optional)"></cc-text-field>
    <cc-text-field label="Email" required></cc-text-field>
    <cc-text-field label="Username" required></cc-text-field>
    <cc-password-field label="Password" required></cc-password-field>
    <cc-button theme="primary" type="submit">Get Started</cc-button>
  </cc-form-layout>
  <style>
    cc-form-layout::part(container) {
      align-items: end;
    }
  </style>
</form>
</div>

```html
<form method="post" onsubmit="alert('form submitted'); return false;">
  <cc-form-layout>
    <cc-text-field label="First name" required></cc-text-field>
    <cc-text-field label="Last name (optional)"></cc-text-field>
    <cc-text-field label="Email" required></cc-text-field>
    <cc-text-field label="Username" required></cc-text-field>
    <cc-password-field label="Password" required></cc-password-field>
    <cc-button theme="primary" type="submit">Get Started</cc-button>
  </cc-form-layout>
  <style>
    cc-form-layout::part(container) {
      align-items: end;
    }
  </style>
</form>
```
