describe('App', () => {

  beforeEach(() => {
    browser.get('/#/');
  });

  it('should have a message panel "say hello to rookies!"', () => {
    let elem = element(by.css('.message'));

    expect(elem.getText()).toEqual('say hello to rookies!');
  });

});
