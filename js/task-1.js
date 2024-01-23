const categoriesList = document.querySelector('ul#categories');

console.log(
  'Number of categories: ',
  categoriesList.querySelectorAll('li.item').length
);

const titles2 = categoriesList.querySelectorAll('h2');

titles2.forEach(title2 => {
  console.log(`Category: ${title2.textContent}`);
  console.log(`Elements: ${title2.nextElementSibling.children.length}`);
});
