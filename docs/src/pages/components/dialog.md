---
layout: ../../layouts/MainLayout.astro
title: 'Dialog'
---

Dialog, also known as “modal”, is a comman UI pattern in most web applications.

## Accessibility Features

### Initial Focus

According to [Modal Dialog Best Practices from WAI](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/), when opening a dialog, you should set an initial focus, but in terms of which element should receive the initial focus is based on the content of the dialog.

In this example, the first text field should receive the initial focus, you can add an `inital-focus` attribute to achieve that.

<div class="preview" style="display: block;">
  <cc-button onclick="this.nextElementSibling.show();">Add delivery address</cc-button>
  <cc-dialog label="Add delivery address">
    <cc-form-layout>
      <cc-text-field label="Street" name="street" initial-focus></cc-text-field>
      <cc-text-field label="City" name="city"></cc-text-field>
      <cc-text-field label="State" name="state"></cc-text-field>
      <cc-text-field label="Zip" name="zip"></cc-text-field>
      <cc-text-field label="Special instructions" name="special-instructions" colspan="2"
        helper-text="For example, gate code or other information to help the driver find you"
      >
      </cc-text-field>
    </cc-form-layout>
    <cc-button slot="footer-actions-left" theme="primary" onclick="this.parentElement.close('close');">Cancel</cc-button>
    <cc-button slot="footer-actions-right" theme="primary">Add</cc-button>
  </cc-dialog>
</div>

```html
<cc-button onclick="this.nextElementSibling.show();">Add delivery address</cc-button>
<cc-dialog label="Add delivery address">
  <cc-form-layout>
    <cc-text-field label="Street" name="street" initial-focus></cc-text-field>
    <cc-text-field label="City" name="city"></cc-text-field>
    <cc-text-field label="State" name="state"></cc-text-field>
    <cc-text-field label="Zip" name="zip"></cc-text-field>
    <cc-text-field label="Special instructions" name="special-instructions" colspan="2"
      helper-text="For example, gate code or other information to help the driver find you"
    >
    </cc-text-field>
  </cc-form-layout>
  <cc-button slot="footer-actions-left" theme="primary">Add</cc-button>
  <cc-button slot="footer-actions-right" theme="primary" onclick="this.parentElement.close('close');">Cancel</cc-button>
</cc-dialog>
```

### Dialog Accessible Description

Add an `a11y-desc` attribute to describe the dialog to screen readers. In this case, `cc-dialog` with id of "address-added-dialog" will use the paragraph from light dom to describe the dialog, click `Add` button to bring out that dialog.

<div class="preview" style="display: block;">
  <cc-button onclick="this.nextElementSibling.show();">Add delivery address</cc-button>
  <cc-dialog label="Add delivery address">
    <cc-form-layout>
      <cc-text-field label="Street" name="street" initial-focus></cc-text-field>
      <cc-text-field label="City" name="city"></cc-text-field>
      <cc-text-field label="State" name="state"></cc-text-field>
      <cc-text-field label="Zip" name="zip"></cc-text-field>
      <cc-text-field label="Special instructions" name="special-instructions" colspan="2"
        helper-text="For example, gate code or other information to help the driver find you"
      >
      </cc-text-field>
    </cc-form-layout>
    <cc-button slot="footer-actions-left" theme="primary" onclick="this.parentElement.close('close');">Cancel</cc-button>
    <cc-button slot="footer-actions-right" theme="primary" 
      onclick="document.querySelector('#address-added-dialog').show();"
    >Add</cc-button>
  </cc-dialog>
  <cc-dialog label="Address Added" id="address-added-dialog">
    <p a11y-desc>Your address has been added succefully. If you wish to remove it, you can do so from your <a href="#">profile</a>.</p>
    <cc-button slot="footer-actions-right" theme="primary" onclick="this.parentElement.close('close');">Ok</cc-button>
  </cc-dialog>
</div>


```html
<cc-button onclick="this.nextElementSibling.show();">Add delivery address</cc-button>
<cc-dialog label="Add delivery address">
  <cc-form-layout>
    <cc-text-field label="Street" name="street" initial-focus></cc-text-field>
    <cc-text-field label="City" name="city"></cc-text-field>
    <cc-text-field label="State" name="state"></cc-text-field>
    <cc-text-field label="Zip" name="zip"></cc-text-field>
    <cc-text-field label="Special instructions" name="special-instructions" colspan="2"
      helper-text="For example, gate code or other information to help the driver find you"
    >
    </cc-text-field>
  </cc-form-layout>
  <cc-button slot="footer-actions-left" theme="primary" onclick="this.parentElement.close('close');">Cancel</cc-button>
  <cc-button slot="footer-actions-right" theme="primary" 
    onclick="document.querySelector('#address-added-dialog').show();"
  >Add</cc-button>
</cc-dialog>
<cc-dialog label="Address Added" id="address-added-dialog">
  <p a11y-desc>Your address has been added succefully. If you wish to remove it, you can do so from your <a href="#">profile</a>.</p>
  <cc-button slot="footer-actions-right" theme="primary" onclick="this.parentElement.close('close');">Ok</cc-button>
</cc-dialog>
```

### Returning Focus Back to Triggering Button

@todo

## Width

Dialog width default to `55ch`, but you can add a custom width by adding a `--width` custom property.

<div class="preview" style="display: block;">
  <cc-button onclick="this.nextElementSibling.show();">Default Width Dialog</cc-button>
  <cc-dialog size="small" label="Default Width Dialog">
    <p>Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos.</p>
    <cc-button slot="footer-actions-right" theme="primary" onclick="this.parentElement.close('close');">Close</cc-button>
  </cc-dialog>
  <cc-button onclick="this.nextElementSibling.show();">Custom Width Dialog</cc-button>
  <cc-dialog label="Custom Width Dialog" style="--width: 70ch">
    <p>Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos.</p>
    <cc-button slot="footer-actions-right" theme="primary" onclick="this.parentElement.close('close');">Close</cc-button>
  </cc-dialog>
</div>

```html
<cc-button onclick="this.nextElementSibling.show();">Default Width Dialog</cc-button>
<cc-dialog size="small" label="Default Width Dialog">
  <p>Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos.</p>
  <cc-button slot="footer-actions-right" theme="primary" onclick="this.parentElement.close('close');">Close</cc-button>
</cc-dialog>

<!-- custom width dialog -->
<cc-button onclick="this.nextElementSibling.show();">Custom Width Dialog</cc-button>
<cc-dialog label="Custom Width Dialog" style="--width: 70ch">
  <p>Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos.</p>
  <cc-button slot="footer-actions-right" theme="primary" onclick="this.parentElement.close('close');">Close</cc-button>
</cc-dialog>
```

## Scrolling Long Content

<div class="preview" style="display: block;">
  <cc-button onclick="this.nextElementSibling.show();">Dialog Body Scrollable</cc-button>
  <cc-dialog size="small" label="Dialog Body Scrollable">
    <p>Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos. Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos. Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos. Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos. Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos. Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos. Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos. Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos. Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos. Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos. Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos. Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos. Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos.</p>
    <cc-button slot="footer-actions-right" theme="primary" onclick="this.parentElement.close('close');">Close</cc-button>
  </cc-dialog>
</div>

```html
<cc-button onclick="this.nextElementSibling.show();">Dialog Body Scrollable</cc-button>
<cc-dialog size="small" label="Small Dialog">
  <p>Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Lots of text here...</p>
  <cc-button slot="footer-actions-right" theme="primary" onclick="this.parentElement.close('close');">Close</cc-button>
</cc-dialog>
```


## Footer Actions

Dialog component comes with two footer action slot: `footer-actions-left` and `footer-actions-right`. Here we add a button to the left and one to the right.

<div class="preview" style="display: block;">
  <cc-button onclick="this.nextElementSibling.show();">Open Dialog</cc-button>
  <cc-dialog label="Dialog with footer actions" id="dialog-blur">
    <p>Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos.</p>
    <cc-button slot="footer-actions-left" onclick="this.parentElement.close('close');">Close</cc-button>
    <cc-button slot="footer-actions-right" theme="primary">Save Changes</cc-button>
  </cc-dialog>
</div>

```html
<cc-button onclick="this.nextElementSibling.show();">Open Dialog</cc-button>
<cc-dialog label="Dialog with footer actions" id="dialog-blur">
  <p>Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos.</p>
  <cc-button slot="footer-actions-left" onclick="this.parentElement.close('close');">Close</cc-button>
  <cc-button slot="footer-actions-right" theme="primary">Save Changes</cc-button>
</cc-dialog>
```