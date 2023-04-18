import { createCategory } from './components/createCategory.js';
import { createHeader } from './components/createHeader.js';
import { createElement } from './helper/createElement.js';
import { fetchCategories } from './service/api.service.js';

const initApp = async () => {
  const header = document.querySelector('.header');
  const app = document.querySelector('#app');

  const headerObj = createHeader(header);
  const categoryObj = createCategory(app);

  const renderIndex = async e => {
    e?.preventDefault();
    const categories = await fetchCategories();
    if (categories.error) {
      app.append(createElement('p', {
        className: 'server-error',
        textContent: 'Ошибка сервера!',
      }));
      return;
    }

    categoryObj.mount(categories);
  };

  renderIndex();

  headerObj.headerLogoLink.addEventListener('click', renderIndex);

  headerObj.headerBtn.addEventListener('click', () => {
    categoryObj.unmount();
    headerObj.updateHeaderTitle('Новая категория');
  });
};

initApp();
