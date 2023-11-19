---
layout: ../../layouts/MainLayout.astro
title: 'Textarea'
---

<div class="preview" style="display: block;">
  <cc-textarea label="Message"></cc-textarea>
</div>

```html
<cc-textarea label="Message"></cc-textarea>
```

## Helper Text

<div class="preview" style="display: block;">
<cc-textarea label="Message" helper-text="Please leave your message"></cc-textarea>
</div>

```html
<cc-textarea label="Message" helper-text="Please leave your message"></cc-textarea>
```

Or, using `slot` to add label and helper text if you need them to be HTML.

<div class="preview" style="display: block;">
  <cc-textarea>
    <div slot="label">Message</div>
    <div slot="helper-text">Please leave your message</div>
  </cc-textarea>
</div>

```html
<cc-textarea>
  <div slot="label">Message</div>
  <div slot="helper-text">Please leave your message</div>
</cc-textarea>
```

## Placeholder

<div class="preview" style="display: block;">
  <cc-textarea label="Message" placeholder="Message">
  </cc-textarea>
</div>

```html
<cc-textarea label="Message" placeholder="Message"></cc-textarea>
```

## Rows

<div class="preview" style="display: block;">
<cc-textarea label="Message" rows="6"></cc-textarea>
</div>

```html
<cc-textarea label="Message" rows="6"></cc-textarea>
```

## Required

<div class="preview" style="display: block;">
  <form>
    <cc-textarea label="Message" placeholder="Message" name="message" required>
    </cc-textarea>
    <cc-button type="submit">Submit</cc-button>
  </form>
</div>

```html
<form>
  <cc-textarea label="Message" placeholder="Message" name="message" required>
  </cc-textarea>
  <cc-button type="submit">Submit</cc-button>
</form>
```

## Disabled

<div class="preview" style="display: block;">
<cc-textarea label="Message" disabled></cc-textarea>
</div>

```html
<cc-textarea label="Message" disabled></cc-textarea>
```

## Readonly

@todo - What if we need initial value of textarea? Using `textContent` to grab the content form light dom will not work as we also need to support `label` and `helper-text` slots.

<div class="preview" style="display: block;">
<cc-textarea label="Message" readonly>This is a readonly message.</cc-textarea>
</div>

```html
<cc-textarea label="Message" readonly></cc-textarea>
```

