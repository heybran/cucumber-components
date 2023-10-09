---
layout: ../../layouts/MainLayout.astro
title: 'Search Field'
---

`cc-search-field` is a wrapper around `<input type="search">` designed for the user to enter search queries into.

## Search form labels and accessibility

A common design practice is not to provide a label for the search field (although there might be a magnifying glass icon or similar). This could, however, cause confusion for screen reader users, since they will not have any verbal indication of what the search input is. One way around this that won't impact on your visual design is to use WAI-ARIA features:

- A `role` attribute of value `search` on the `<form>` element will cause screen readers to announce that the form is a search form.

- If that isn't enough, you can use an `aria-label` attribute on the `<input>` itself. This should be a descriptive text label that will be read out by the screen reader; it's used as a non-visual equivalent to `<label>`. By default, `<input>` element inside `cc-search-field` has a `aria-label="Search"` populated, if you need a custom aria label, add a `accessible-label` attribute as demonstrated below.

<div class="preview">
  <form action="/search" role="search">
    <cc-search-field 
      name="q" 
      placeholder="Search the site..."
      accessible-label="Search through site content"
      >
      <cc-button slot="suffix" theme="square borderless" type="submit">
        <cc-icon label="Submit Search" icon="search"></cc-icon>
      </cc-button>
    </cc-search-field>
  </form>
</div>

```html
<form action="/search" role="search">
  <cc-search-field name="q" placeholder="Search">
    <cc-button slot="suffix" theme="square borderless" type="submit">
      <cc-icon label="Submit Search" icon="search"></cc-icon>
    </cc-button>
  </cc-search-field>
</form>
```

## Search Button with Text

Sometimes it would be better to just use button with text.

<div class="preview">
  <form action="/search" role="search">
    <cc-search-field name="q">
      <cc-button slot="suffix" type="submit" theme="primary" style="margin: 4px;">
        Search
      </cc-button>
    </cc-search-field>
  </form>
</div>

```html
<cc-search-field name="q">
  <form action="/search" role="search">
    <cc-search-field name="q">
      <cc-button slot="suffix" type="submit" theme="primary" style="margin: 4px;">
        Search
      </cc-button>
    </cc-search-field>
  </form>
</cc-search-field>
```

## Submit Button outside of Search Field

A `cc-button` can be added as a sibling of `cc-search-field`, and then grab a `cc-horizontal-layout` to align them side by side.

<div class="preview">
  <form action="/search" role="search">
    <cc-horizontal-layout spacing="small">
      <cc-search-field name="q">
        <cc-icon slot="prefix" icon="search"></cc-icon>
      </cc-search-field>
      <cc-button type="submit" theme="primary">
        Search
      </cc-button>
    </cc-horizontal-layout>
  </form>
</div>

```html
<form action="/search" role="search">
  <cc-horizontal-layout spacing="small">
    <cc-search-field name="q">
      <!-- Please note here cc-icon is only for decoration -->
      <cc-icon slot="prefix" icon="search"></cc-icon>
    </cc-search-field>
    <cc-button type="submit" theme="primary">
      Search
    </cc-button>
  </cc-horizontal-layout>
</form>
```

## Helper Text

<div class="preview">
  <cc-search-field name="q" placeholder="search" helper-text="You can press ESC key to clear out search text.">
    <cc-button slot="suffix" type="submit" theme="square borderless">
      <cc-icon label="Submit Search" icon="search"></cc-icon>
    </cc-button>
  </cc-search-field>
</div>

```html
<cc-search-field name="q" placeholder="search" helper-text="You can press ESC key to clear out search text.">
  <cc-button slot="suffix" type="submit" theme="square borderless">
    <cc-icon label="Submit Search" icon="search"></cc-icon>
  </cc-button>
</cc-search-field>
```

Add a `helper-text-position-top` to move helper text above the email input field.

<div class="preview">
  <cc-search-field name="q" placeholder="search" 
    helper-text="You can press ESC key to clear out search text."
    helper-text-position-top
  >
    <cc-button slot="suffix" type="submit" theme="square borderless">
      <cc-icon label="Submit Search" icon="search"></cc-icon>
    </cc-button>
  </cc-search-field>
</div>

```html
<cc-search-field 
  name="q" 
  placeholder="search" 
  helper-text="This is a helper text for search field."
  helper-text-position-top
>
  <cc-button slot="suffix" type="submit" theme="square borderless">
    <cc-icon label="Submit Search" icon="search"></cc-icon>
  </cc-button>
</cc-search-field>
```

## Prefix

Maybe if we need to show that search icon as decoration instead of button.

<div class="preview">
  <cc-search-field name="q" placeholder="search">
    <cc-icon slot="prefix" icon="search"></cc-icon>
    <cc-button slot="suffix" type="submit" theme="primary" style="margin: 4px;">
      Search
    </cc-button>
  </cc-search-field>
</div>

```html
<cc-search-field name="q" placeholder="search">
  <cc-icon slot="prefix" icon="search"></cc-icon>
  <cc-button slot="suffix" type="submit" theme="primary" style="margin: 4px;">
    Search
  </cc-button>
</cc-search-field>
```

## Required

You can use the `required` attribute as an easy way of making entering a value required before form submission is allowed.

<div class="preview">
<form action="/search" role="search">
  <cc-search-field name="q" required>
    <cc-button slot="suffix" type="submit" theme="primary" style="margin: 4px;">
      Search
    </cc-button>
  </cc-search-field>
</form>
</div>

```html
<form action="/search" role="search">
  <cc-search-field name="q" required>
    <cc-button slot="suffix" type="submit" theme="primary" style="margin: 4px;">
      Search
    </cc-button>
  </cc-search-field>
</form>
```

## Minlength & Maxlength

You can specify a minimum length, in characters, for the entered value using the `minlength` attribute; similarly, use `maxlength` to set the maximum length of the entered value.

<div class="preview">
<form action="/search" role="search">
  <cc-search-field name="q" minlength="4" maxlength="8" User IDs are 4–8 characters in length placeholder="User IDs are 4–8 characters in length" style="width: 30em;" required>
    <cc-button slot="suffix" type="submit" theme="primary" style="margin: 4px;">
      Search
    </cc-button>
  </cc-search-field>
</form>
</div>

```html
<form action="/search" role="search">
  <cc-search-field 
    name="q" 
    minlength="4" 
    maxlength="8" 
    placeholder="User IDs are 4–8 characters in length" 
    accessible-label="User IDs are 4–8 characters in length"
    style="width: 30em;" 
    required
  >
    <cc-button slot="suffix" type="submit" theme="primary" style="margin: 4px;">
      Search
    </cc-button>
  </cc-search-field>
</form>
```

## Pattern Validation

You can use the `pattern` attribute to specify a regular expression that the inputted value must follow to be considered valid.

If the specified pattern is not specified or is invalid, no regular expression is applied and this attribute is ignored completely.

Say we wanted to provide a product ID search form, and the IDs were all codes of two letters followed by four numbers. The following example covers it (remember to put a helper text to assist user to enter the correct format):

@todo - we probably want to support helper text as slot as in some cases we might want to make some words of helper text bold, e.g. ab1234 in this case.

<div class="preview">
<form action="/search" role="search">
  <cc-search-field 
    name="q" 
    placeholder="Search for product by ID"
    accessible-label="Search for product by ID"
    pattern="[A-z]{2}[0-9]{4}"
    helper-text="Product IDs are all codes of two letters followed by four numbers. e.g.: ab1234"
    style="width: 30em;" required>
    <cc-button slot="suffix" type="submit" theme="primary" style="margin: 4px;">
      Search
    </cc-button>
  </cc-search-field>
</form>
</div>

```html
<form action="/search" role="search">
  <cc-search-field 
    name="q" 
    placeholder="Search for product by ID"
    accessible-label="Search for product by ID"
    pattern="[A-z]{2}[0-9]{4}"
    helper-text="Product IDs are all codes of two letters followed by four numbers. e.g.: ab1234"
    style="width: 30em;" 
    required
  >
    <cc-button slot="suffix" type="submit" theme="primary" style="margin: 4px;">
      Search
    </cc-button>
  </cc-search-field>
</form>
```

## Size

The `size` attribute is a numeric value indicating how many characters wide the input field should be. The value must be a number greater than zero, and the default value is 20. Since character widths vary, this may or may not be exact and should not be relied upon to be so; the resulting input may be narrower or wider than the specified number of characters, depending on the characters and the font.

This does not set a limit on how many characters the user can enter into the field. It only specifies approximately how many can be seen at a time. To set an upper limit on the length of the input data, use the `maxlength` attribute.

<div class="preview">
  <form action="/search" role="search">
    <cc-search-field 
      name="q" 
      placeholder="Search the site..."
      accessible-label="Search through site content"
      size="30"
      >
      <cc-button slot="suffix" theme="square borderless" type="submit">
        <cc-icon label="Submit Search" icon="search"></cc-icon>
      </cc-button>
    </cc-search-field>
  </form>
</div>

```html
<form action="/search" role="search">
  <cc-search-field 
    name="q" 
    placeholder="Search the site..."
    accessible-label="Search through site content"
    size="30"
    >
    <cc-button slot="suffix" theme="square borderless" type="submit">
      <cc-icon label="Submit Search" icon="search"></cc-icon>
    </cc-button>
  </cc-search-field>
</form>
```

## Readonly

`cc-search-field` does support this attribute, but use case?

## Disabled

`cc-search-field` does support this attribute, but use case?


