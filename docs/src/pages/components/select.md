---
layout: ../../layouts/MainLayout.astro
title: 'Select'
---

`cc-select` functionality is similar to an HTML `select` element. The select options listbox can be opened when clicking, pressing up and down arrow keys.

For `cc-option`, you need to add a `aria-selected="true"` to indicate that option is selected initially.

<div class="preview">
  <cc-select label="Start of the week">
    <cc-option value="monday" aria-selected="true">Monday</cc-option>
    <cc-option value="tuesday" >Tuesday</cc-option>
    <cc-option value="wednesday">Wednesday</cc-option>
    <cc-option value="thursday">Thursday</cc-option>
    <cc-option value="friday">Friday</cc-option>
    <cc-option value="saturday">Saturday</cc-option>
    <cc-option value="sunday">Sunday</cc-option>
  </cc-select>
</div>

```html
<cc-select>
  <cc-option value="monday" text="Monday" aria-selected="true"></cc-option>
  <cc-option value="tuesday" text="Tuesday"></cc-option>
  <cc-option value="wednesday" text="Wednesday"></cc-option>
  <cc-icon icon="chevron-down" slot="suffix"></cc-icon>
</cc-select>
```

## Helper Text

<div class="preview">
  <cc-select label="Start of the week"  helper-text="Please select the start of the week.">
    <cc-option value="monday" aria-selected="true">Monday</cc-option>
    <cc-option value="tuesday" >Tuesday</cc-option>
    <cc-option value="wednesday">Wednesday</cc-option>
    <cc-option value="thursday">Thursday</cc-option>
    <cc-option value="friday">Friday</cc-option>
    <cc-option value="saturday">Saturday</cc-option>
    <cc-option value="sunday">Sunday</cc-option>
  </cc-select>
</div>

>   Copyright © 2023 W3C®. This software or document includes material copied from or derived from Select-Only Combobox Example (https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/).

<table aria-labelledby="kbd_label_combobox kbd_label" class="def">
  <thead>
    <tr>
      <th>Key</th>
      <th>Function</th>
    </tr>
  </thead>
  <tbody>
    <tr data-test-id="combobox-key-down-arrow">
      <th><kbd>Down Arrow</kbd></th>
      <td>
        <ul>
          <li>Opens the listbox if it is not already displayed without moving focus or changing selection.</li>
          <li>DOM focus remains on the combobox.</li>
        </ul>
      </td>
    </tr>
    <tr data-test-id="combobox-key-alt-down-arrow">
      <th><kbd>Alt + Down Arrow</kbd></th>
      <td>Opens the listbox without moving focus or changing selection.</td>
    </tr>
    <tr data-test-id="combobox-key-up-arrow">
      <th><kbd>Up Arrow</kbd></th>
      <td>
        <ul>
          <li>First opens the listbox if it is not already displayed and then moves visual focus to the first option.</li>
          <li>DOM focus remains on the combobox.</li>
        </ul>
      </td>
    </tr>
    <tr data-test-id="combobox-key-enter">
      <th><kbd>Enter</kbd></th>
      <td>Opens the listbox without moving focus or changing selection.</td>
    </tr>
    <tr data-test-id="combobox-key-space">
      <th><kbd>Space</kbd></th>
      <td>Opens the listbox without moving focus or changing selection.</td>
    </tr>
    <tr data-test-id="combobox-key-home">
      <th><kbd>Home</kbd></th>
      <td>Opens the listbox and moves visual focus to the first option.</td>
    </tr>
    <tr data-test-id="combobox-key-end">
      <th><kbd>End</kbd></th>
      <td>Opens the listbox and moves visual focus to the last option.</td>
    </tr>
    <tr data-test-id="printable-chars">
      <th>Printable Characters</th>
      <td>
        <ul>
          <li>First opens the listbox if it is not already displayed and then moves visual focus to the first option that matches the typed character.</li>
          <li>If multiple keys are typed in quick succession, visual focus moves to the first option that matches the full string.</li>
          <li>If the same character is typed in succession, visual focus cycles among the options starting with that character.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Disabled

This `disabled` Boolean attribute indicates that the user cannot interact with the control. If this attribute is not specified, the control inherits its setting from the containing element, for example `<fieldset>`; if there is no containing element with the disabled attribute set, then the control is enabled.

<div class="preview">
  <form onsubmit="alert(new FormData(this).get('start-of-week')); return false;">
    <p>First one here is a native `select` element.</p>
    <label for="pet-select">Choose a pet:</label>
    <select name="pets" id="pet-select" disabled>
      <option value="">--Please choose an option--</option>
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
      <option value="hamster">Hamster</option>
      <option value="parrot">Parrot</option>
      <option value="spider">Spider</option>
      <option value="goldfish">Goldfish</option>
    </select>
    </select>
    <cc-divider></cc-divider>
    <cc-select label="Start of the week" name="start-of-week" disabled>
      <cc-option value="monday" aria-selected="true">Monday</cc-option>
      <cc-option value="tuesday">Tuesday</cc-option>
      <cc-option value="wednesday">Wednesday</cc-option>
      <cc-option value="thursday">Thursday</cc-option>
      <cc-option value="friday">Friday</cc-option>
      <cc-option value="saturday">Saturday</cc-option>
      <cc-option value="sunday">Sunday</cc-option>
    </cc-select>
  </form>
</div>

```html
<form onsubmit="alert(new FormData(this).get('start-of-week')); return false;">
  <p>First one here is a native `select` element.</p>
  <label for="pet-select">Choose a pet:</label>
  <select name="pets" id="pet-select" disabled>
    <option value="">--Please choose an option--</option>
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
    <option value="parrot">Parrot</option>
    <option value="spider">Spider</option>
    <option value="goldfish">Goldfish</option>
  </select>
  </select>
  <cc-divider></cc-divider>
  <cc-select label="Start of the week" name="start-of-week" disabled>
    <cc-option value="monday" aria-selected="true">Monday</cc-option>
    <cc-option value="tuesday">Tuesday</cc-option>
    <cc-option value="wednesday">Wednesday</cc-option>
    <cc-option value="thursday">Thursday</cc-option>
    <cc-option value="friday">Friday</cc-option>
    <cc-option value="saturday">Saturday</cc-option>
    <cc-option value="sunday">Sunday</cc-option>
  </cc-select>
</form>
```


<div class="preview">
  <form onsubmit="alert(new FormData(this).get('start-of-week')); return false;">
    <cc-form-layout>
    <cc-select label="Start of the week" name="start-of-week" style="width: 10em;">
      <cc-option value="monday" aria-selected="true">Monday</cc-option>
      <cc-option value="tuesday">Tuesday</cc-option>
      <cc-option value="wednesday">Wednesday</cc-option>
      <cc-option value="thursday">Thursday</cc-option>
      <cc-option value="friday">Friday</cc-option>
      <cc-option value="saturday">Saturday</cc-option>
      <cc-option value="sunday">Sunday</cc-option>
    </cc-select>
    <cc-button type="submit" theme="primary">Submit</cc-button>
    </cc-form-layout>
  </form>
</div>

