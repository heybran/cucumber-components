---
layout: ../../layouts/MainLayout.astro
title: 'QrCode'
---

## General Usage

QR codes are useful for providing small pieces of information to users who can quickly scan them with a smartphone. Most
smartphones have built-in QR code scanners, so simply pointing the camera at a QR code will decode it and allow the user
to visit a website, dial a phone number, read a message, etc.

<div class="preview">
  <cc-qr-code id="test-qr-code-value"></cc-qr-code>
  <cc-text-field label="QR Code" value="https://cucumber.technology"></cc-text-field>
</div>
<script>
  const codeRef = document.querySelector('#test-qr-code-value');
  const textFieldRef = document.querySelector('cc-text-field'); 
  codeRef.setAttribute('value', textFieldRef.value);
  textFieldRef.addEventListener('input', (e) => {
    codeRef.setAttribute('value', e.target.value);
  });
</script>

```html

<div class="preview">
  <cc-qr-code></cc-qr-code>
  <cc-text-field label="QR Code" value="https://cucumber.technology"></cc-text-field>
</div>
<script>
  const codeRef = document.querySelector('cc-qr-code');
  const textFieldRef = document.querySelector('cc-text-field');
  codeRef.setAttribute('value', textFieldRef.value);
  textFieldRef.addEventListener('input', (e) => {
    codeRef.setAttribute('value', e.target.value);
  });
</script>
```

## Color Customization

Use the `color` and background attributes to modify the QR code’s colors. You should always ensure good contrast for
optimal compatibility with QR code scanners.

<div class="preview">
  <cc-qr-code id="test-qr-code-color"></cc-qr-code>
  <input type="color" id="qr-code-color" value="#f00000" />
</div>
<script>
  const codeRef1 = document.querySelector('#test-qr-code-color');
  const colorRef1 = document.querySelector('#qr-code-color'); 
  codeRef1.setAttribute('color', colorRef1.value);
  colorRef1.addEventListener('input', (e) => {
    codeRef1.setAttribute('color', e.target.value);
  });
</script>

```html

<div class="preview">
  <cc-qr-code id="test-qr-code-color"></cc-qr-code>
  <input type="color" id="qr-code-color" value="#f00000"/>
</div>
<script>
  const codeRef1 = document.querySelector('#test-qr-code-color');
  const colorRef1 = document.querySelector('#qr-code-color');
  codeRef1.setAttribute('color', colorRef1.value);
  colorRef1.addEventListener('input', (e) => {
    codeRef1.setAttribute('color', e.target.value);
  });
</script>
```

## Size Customization

Use the `size` attribute to change the size of the QR code.
<div class="preview">
  <cc-qr-code id="test-qr-code-size"></cc-qr-code>
  <input type="range" id="qr-code-size" />
</div>
<script>
  const codeRef2 = document.querySelector('#test-qr-code-size');
  const colorRef2 = document.querySelector('#qr-code-size'); 
  codeRef2.setAttribute('size', colorRef2.value);
  colorRef2.addEventListener('input', (e) => {
    codeRef2.setAttribute('size', e.target.value);
  });
</script>

```html

<div class="preview">
  <cc-qr-code id="test-qr-code-size"></cc-qr-code>
  <input type="range" id="qr-code-size"/>
</div>
<script>
  const codeRef2 = document.querySelector('#test-qr-code-size');
  const colorRef2 = document.querySelector('#qr-code-size');
  codeRef2.setAttribute('size', colorRef2.value);
  colorRef2.addEventListener('input', (e) => {
    codeRef2.setAttribute('size', e.target.value);
  });
</script>
```

## Radius Customization

Create a rounded effect with the `radius` attribute.

<div class="preview">
  <cc-qr-code id="test-qr-code-radius"></cc-qr-code>
  <input type="range" id="qr-code-radius" value="100" />
</div>
<script>
  const codeRef3 = document.querySelector('#test-qr-code-radius');
  const colorRef3 = document.querySelector('#qr-code-radius'); 
  const radiusStrFn = (value) => (parseInt(value) / 200).toString();
  codeRef3.setAttribute('radius', radiusStrFn(colorRef3.value));
  colorRef3.addEventListener('input', (e) => {
    codeRef3.setAttribute('radius', radiusStrFn(e.target.value));
  });
</script>

```html

<div class="preview">
  <cc-qr-code id="test-qr-code-radius"></cc-qr-code>
  <input type="range" id="qr-code-radius" value="100"/>
</div>
<script>
  const codeRef3 = document.querySelector('#test-qr-code-radius');
  const colorRef3 = document.querySelector('#qr-code-radius');
  const radiusStrFn = (value) => (parseInt(value) / 200).toString();
  codeRef3.setAttribute('radius', radiusStrFn(colorRef3.value));
  colorRef3.addEventListener('input', (e) => {
    codeRef3.setAttribute('radius', radiusStrFn(e.target.value));
  });
</script>
```

## Error Correction Level

QR codes can be rendered with various levels of `error correction` that can be set using the error-correction attribute.
This example generates four codes with the same value using different error correction levels.

<cc-space>
<cc-qr-code value="https://shoelace.style/" error-correction="L"></cc-qr-code>
<cc-qr-code value="https://shoelace.style/" error-correction="M"></cc-qr-code>
<cc-qr-code value="https://shoelace.style/" error-correction="Q"></cc-qr-code>
<cc-qr-code value="https://shoelace.style/" error-correction="H"></cc-qr-code>
</cc-space>
