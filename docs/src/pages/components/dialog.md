---
layout: ../../layouts/MainLayout.astro
title: 'Dialog'
---

Dialog, also known as “modal”, is a comman UI component in most web application.

<div class="preview" style="display: block;">
  <cc-button onclick="this.nextElementSibling.showModal();">Open Dialog</cc-button>
  <cc-dialog>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <cc-button slot="footer-actions-right" theme="primary" onclick="this.parentElement.close('close');">Close</cc-button>
  </cc-dialog>
</div>

```html
<cc-url-field label="Website" name="website"></cc-url-field>
<cc-url-field label="GitHub profile" name="github" prefix-text="https://github.com/"></cc-url-field>
```

## Backdrop Blur

