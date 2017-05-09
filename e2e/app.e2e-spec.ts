import { LuckyPage } from './app.po';

describe('lucky App', () => {
  let page: LuckyPage;

  beforeEach(() => {
    page = new LuckyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
