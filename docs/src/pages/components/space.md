---
layout: ../../layouts/MainLayout.astro
title: 'Space'
---

## Space between items

<cc-space size="10" direction="vertical">
  <div>
    <cc-radio-group label="Direction" name="direction" onchange="directionChange(this.value)">
      <cc-radio label="horizontal" value="horizontal" checked></cc-radio>
      <cc-radio label="vertical" value="vertical" ></cc-radio>
    </cc-radio-group>
  </div>
  <div>
    <cc-radio-group label="Size" name="size" onchange="sizeChange(this.value)">
      <cc-radio label="small" value="small"></cc-radio>
      <cc-radio label="middle" value="middle" checked></cc-radio>
      <cc-radio label="large" value="large"></cc-radio>
      <cc-radio label="customize" value="customize"></cc-radio>
    </cc-radio-group>
  </div>
  <div id="custom-size-slider" >
    <input type="range" />
  </div>
  <div class="preview">
    <cc-space id="cc-space-preview1" size="10" justify="space-between">
      <cc-button>Button1</cc-button>
      <cc-button>Button2</cc-button>
      <cc-button>Button3</cc-button>
    </cc-space>
  </div>
</cc-space>

## Align items

<div>
  <cc-radio-group label="Justify" name="justify" onchange="alert(this.value)">
    <cc-radio label="start" value="start"></cc-radio>
    <cc-radio label="end" value="end"></cc-radio>
    <cc-radio label="center" value="center" checked></cc-radio>
    <cc-radio label="baseline" value="baseline"></cc-radio>
  </cc-radio-group>
</div>
<div class="preview">
  <cc-space id="cc-space-preview2" direction="horizontal" size="10" justify="space-between">
    <span>center</span>
    <cc-button theme="primary" style="height: 40px">primary</cc-button>
    <span style="display: block; height: 60px; width: 60px; background-color: #2b8a3e; color: white; display: grid; place-content: center">Block</span>
  </cc-space>
</div>
<script>
  const prevRef = document.querySelector("#cc-space-preview1");
  const customSizeSlider = document.querySelector("#custom-size-slider");
  const sliderInputRef = document.querySelector("#custom-size-slider input");
  sliderInputRef.setAttribute("value", prevRef.getAttribute("size"));
  customSizeSlider.addEventListener("input", (event) => {
    prevRef.setAttribute("size", event.target.value);
  });
  function directionChange(value) {
    prevRef.setAttribute("direction", value);
  }
  function sizeChange(value) {
    prevRef.setAttribute("size", value);
    sliderInputRef.setAttribute("value", value);
  } 

</script>


