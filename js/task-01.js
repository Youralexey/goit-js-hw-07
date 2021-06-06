const totalCategories = document.querySelectorAll('.item');
console.log(`В списке ${totalCategories.length} категорий.`);

totalCategories.forEach(categories => {
    console.log(`Категория: ${categories.children[0].textContent}`)
    console.log(`Количество элементов: ${categories.children[1].children.length}`)}); 




