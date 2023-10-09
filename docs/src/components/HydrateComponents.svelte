<script>
  import { onMount, afterUpdate } from "svelte";
  if (!import.meta.env.SSR) {
    const components = [
      'alert',
      'button',
      'icon',
      'option',
      'select',
      'spinner',
      'switch',
      'text-field',
      'textarea',
      'tooltip',
      'form-layout',
      'password-field',
      'checkbox',
      'radio',
      'radio-group',
      'horizontal-layout',
      'vertical-layout',
      'carousel',
      'carousel-item',
      'divider',
      'email-field',
      // 'country-select',
      'search-field',
    ];

    if (import.meta.env.MODE === 'development') {
      components.forEach(name => {
        import(`../../../src/components/${name}/${name}.js`);
      })
    } else if (import.meta.env.MODE === 'production') {
      components.forEach(name => {
        import(`../../../dist/components/${name}/${name}.js`);
      })
    }
  }

  onMount(() => {
  });

  afterUpdate(() => {
  });
</script>