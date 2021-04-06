const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const listEl = document.getElementById('ingredients');
const markup = ingredients.map( ingredient => {
    const itemEl = document.createElement('li');
    itemEl.innerHTML = ingredient;
    return itemEl
  }
)
listEl.append(...markup);
