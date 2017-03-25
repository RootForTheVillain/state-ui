import { StateOfMichiganUIPage } from './app.po';

describe('state-of-michigan-ui App', () => {
  let page: StateOfMichiganUIPage;

  beforeEach(() => {
    page = new StateOfMichiganUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
