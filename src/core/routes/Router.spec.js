import {Router} from './Router';
import {$} from '../dom';
import {ActiveRoute} from './ActiveRoute';
import {Page} from '../Page';

import {
  describe,
  expect,
  test,
  beforeEach,
  jest
} from '@jest/globals';

class DashboardPage extends Page {
  getRoot() {
    const root = document.createElement('div');
    root.innerHTML('dashboard');

    return root;
  }
}

class ExcelPage extends Page {}

describe('Router:', () => {
  let router;
  let $root;

  beforeEach(() => {
    $root = document.createElement('div');

    router = new Router($root, {
      dashboard: DashboardPage,
      excel: ExcelPage
    });
  });

  test('should be defined', () => {
    expect(router).toBeDefined();
  });

  test('should render Dashboard Page', () => {
    router.changePageHandler();
    expect($root.innerHTML).toBe('<div>dasboard</div>');
  });
});
