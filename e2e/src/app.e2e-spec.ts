import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('App');
  });

it('should hve the titles', () => {
  const titles = [
    'What is Lorem Ipsum?',
    'What is Lorem Ipsum?'
  ];

  const titLesList = page.getCardTitles();

  titles.forEach((title, index) => {
    expect(titLesList.get(index).getText()).toEqual(title);
  });

});
});
