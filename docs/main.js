import "../src/components/tooltip/tooltip.js";
import "../src/components/text-field/breeze-text-field.js";
import "../src/components/icon/breeze-icon.js";
import "../src/components/select/breeze-select.js";
import "../src/components/option/breeze-option.js";
import "../src/components/icon/breeze-icon.js";

const componentTag = location.pathname.split('/').at(-1);
const main = document.querySelector('main');
fetch(`./${componentTag}.html`).then((res) => res.text()).then((data) => {
  main.innerHTML = data;
});