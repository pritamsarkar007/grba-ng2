import { GrbaNg2Page } from './app.po';

describe('grba-ng2 App', () => {
  let page: GrbaNg2Page;

  beforeEach(() => {
    page = new GrbaNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
