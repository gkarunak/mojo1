import { Mojo1Page } from './app.po';

describe('mojo1 App', function() {
  let page: Mojo1Page;

  beforeEach(() => {
    page = new Mojo1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
