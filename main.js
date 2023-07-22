import "./src/components/select/select.js";

const items = [
  {
    label: 'Most recent first',
    value: 'recent',
  },
  {
    label: 'Rating: high to low',
    value: 'rating-desc',
  },
  {
    label: 'Rating: low to high',
    value: 'rating-asc',
  }
];

const select = document.createElement('breeze-select');
select.value = 'demo value';
select.items = items;
document.querySelector("#app").append(select);

