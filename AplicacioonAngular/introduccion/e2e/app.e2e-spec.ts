import { PrimeroPage } from './app.po';

describe('primero App', function() {
  let page: PrimeroPage;

  beforeEach(() => {
    page = new PrimeroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
