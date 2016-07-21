import { Ng2SpotifyAppPage } from './app.po';

describe('ng2-spotify-app App', function() {
  let page: Ng2SpotifyAppPage;

  beforeEach(() => {
    page = new Ng2SpotifyAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
