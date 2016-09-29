var webdriverio = require('webdriverio'),
    assert      = require('assert');

describe('PIXNET 大首頁搜尋', () => {

    before(function () {
        return browser.url('https://www.pixnet.net/');
    });


    it('搜尋美食並移動游標至每個項目', () => {
      //  browser.url('https://www.pixnet.net/');

        const input = browser.element('#search__input');
        input.setValue('美食');
        browser.submitForm('#search');

        browser.element('.bin-main-search').waitForText(10000);

        for (i = 1; i <= 9; ++i) {
            browser.moveToObject('.search-list:nth-child(' + i + ')');
            browser.pause(600);
        }

    });
    it('點搜尋結果下一頁連結應可正常運作', () => {

        browser.click('.page-next');
        browser.element('.bin-main-search').waitForText(10000);
        browser.click('.page-next');
        browser.element('.bin-main-search').waitForText(10000);
        browser.click('.page-next');
        browser.element('.bin-main-search').waitForText(10000);
    });
})