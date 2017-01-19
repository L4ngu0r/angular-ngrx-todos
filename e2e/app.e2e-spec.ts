import { FrontTodosPage } from './app.po';

describe('front-todos App', function() {
  let page: FrontTodosPage;

  beforeEach(() => {
    page = new FrontTodosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
