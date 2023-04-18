import { createElement } from "../helper/createElement.js"

export const createCategory = (app) => {
  const category = createElement('section', {
    className: 'category section-offset',
  });

  const container = createElement('div', {
    className: 'container',
  });

  const categoryList = createElement('ul', {
    className: 'category__list',
  });

  const createCategoryCard = (data) => {
    const item = createElement('li', {
      className: 'category__item',
      textContent: data.title, // убрать
    });

    item.dataset.id = data.id;

    // написать функционал создания карточки

    return item;
  };

  container.append(categoryList);
  category.append(container);

  const mount = (data) => {
    categoryList.textContent = '';
    app.append(category);

    const cards = data.map(createCategoryCard);

    categoryList.append(...cards);
  }

  const unmount = () => {
    category.remove();
  }

  return { mount, unmount, categoryList };
}





{/* <ul class="category__list">
  <li class="category__item" data-id="bc2iv1cwi6ht">
    <button class="category__card">
      <span class="category__title">Косвенные местоимения</span>
      <span class="category__pairs">7 пар</span>
    </button>
    <button class="category__btn category__edit" aria-label="редактировать"></button>
    <button class="category__btn category__del" aria-label="удалить"></button>
  </li> */}