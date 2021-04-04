const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEl = document.getElementById('ingredients');
ingredients.forEach(
  ingredient => {
    const itemEl = document.createElement('li');
    itemEl.innerHTML = ingredient;
    listEl.append(itemEl);
  }
)

