import { AppPage } from './app.po';

describe('JSTT App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should exist', () => {
    page.navigateTo();
    expect(page).toBeTruthy();
  });
});
