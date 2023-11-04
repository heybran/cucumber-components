---
layout: ../../layouts/MainLayout.astro
title: 'File Upload'
---

File upload is a wrapper around `input` element with `type="file"` that let the user choose one or more files from their device storage. Once chosen, the files can be uploaded to a server using form submission.

<div class="preview" style="display: block;">
  <cc-file-upload label="Cover letter" accept=".png, .jpg, .jpeg">
    <cc-icon icon="upload" slot="upload-icon" style="--size: 3ch;"></cc-icon>
    <p><b>Upload a file</b> or drag and drop here</p>
    <p>Accepted files: JPEG and PNG up to 10MB.</p>
  </cc-file-upload>
</div>

```html
<cc-file-upload label="Cover letter" accept=".png, .jpg, .jpeg">
  <cc-icon icon="upload" slot="upload-icon" style="--size: 3ch;"></cc-icon>
  <p><b>Upload a file</b> or drag and drop here</p>
  <p>Accepted files: JPEG and PNG up to 10MB.</p>
</cc-file-upload>
```

## Helper Text

<div class="preview" style="display: block;" accept=".png, .jpg, .jpeg">
  <cc-file-upload label="Cover letter" helper-text="Please upload your cover letter.">
    <cc-icon icon="upload" slot="upload-icon" style="--size: 3ch;"></cc-icon>
    <p><b>Upload a file</b> or drag and drop here</p>
    <p>Accepted files: JPEG and PNG up to 10MB.</p>
  </cc-file-upload>
</div>

```html
<cc-file-upload label="Cover letter" helper-text="Please upload your cover letter.">
  <cc-icon icon="upload" slot="upload-icon" style="--size: 3ch;"></cc-icon>
  <p><b>Upload a file</b> or drag and drop here</p>
  <p>Accepted files: JPEG and PNG up to 10MB.</p>
</cc-file-upload>
```

## Required

<div class="preview" style="display: block;">
  <form method="POST" onsubmit="alert(new FormData(this).get('cover-photo')); return false;">
    <cc-file-upload 
      label="Cover photo" 
      required 
      helper-text="Please upload your cover photo."
      name="cover-photo"
    >
      <cc-icon icon="upload" slot="upload-icon" style="--size: 3ch;"></cc-icon>
      <p><b>Upload a file</b> or drag and drop here</p>
      <p>Accepted files: JPEG and PNG up to 10MB.</p>
    </cc-file-upload>
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