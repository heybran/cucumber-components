---
layout: ../../layouts/MainLayout.astro
title: 'Dialog'
---

Dialog, also known as “modal”, is a comman UI pattern in most web applications.

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

## Width

Dialog width default to `55ch`, but you can add a custom width by adding a `--width` custom property.

<div class="preview" style="display: block;">
  <cc-button onclick="this.nextElementSibling.showModal();">Default Width Dialog</cc-button>
  <cc-dialog size="small" label="Small Dialog">
    <p>Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos.</p>
    <cc-button slot="footer-actions-right" theme="primary" onclick="this.parentElement.close('close');">Close</cc-button>
  </cc-dialog>
  <cc-button onclick="this.nextElementSibling.showModal();">Custom Width Dialog</cc-button>
  <cc-dialog label="Large Dialog" style="--width: 70ch">
    <p>Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos.</p>
    <cc-button slot="footer-actions-right" theme="primary" onclick="this.parentElement.close('close');">Close</cc-button>
  </cc-dialog>
</div>

```html
<cc-button onclick="this.nextElementSibling.showModal();">Default Width Dialog</cc-button>
<cc-dialog size="small" label="Small Dialog">
  <p>Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos.</p>
  <cc-button slot="footer-actions-right" theme="primary" onclick="this.parentElement.close('close');">Close</cc-button>
</cc-dialog>

<!-- custom width dialog -->
<cc-button onclick="this.nextElementSibling.showModal();">Custom Width Dialog</cc-button>
<cc-dialog label="Large Dialog" style="--width: 70ch">
  <p>Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos.</p>
  <cc-button slot="footer-actions-right" theme="primary" onclick="this.parentElement.close('close');">Close</cc-button>
</cc-dialog>
```

## Scrolling Long Content

<div class="preview" style="display: block;">
  <cc-button onclick="this.nextElementSibling.showModal();">Dialog Body Scrollable</cc-button>
  <cc-dialog size="small" label="Small Dialog">
    <p>Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos. Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos. Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos. Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos. Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos. Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos. Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos. Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos. Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos. Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos. Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos. Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos. Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos.</p>
    <cc-button slot="footer-actions-right" theme="primary" onclick="this.parentElement.close('close');">Close</cc-button>
  </cc-dialog>
</div>


## Footer Actions

Dialog component comes with two footer action slot: `footer-actions-left` and `footer-actions-right`. Here we add a button to the left and one to the right.

<div class="preview" style="display: block;">
  <cc-button onclick="this.nextElementSibling.showModal();">Open Dialog</cc-button>
  <cc-dialog label="Small Dialog" id="dialog-blur">
    <p>Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos.</p>
    <cc-button slot="footer-actions-left" onclick="this.parentElement.close('close');">Close</cc-button>
    <cc-button slot="footer-actions-right" theme="primary">Save Changes</cc-button>
  </cc-dialog>
</div>