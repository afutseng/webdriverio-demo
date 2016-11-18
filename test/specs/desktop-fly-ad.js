var webdriverio = require('webdriverio'),
    assert      = require('assert');

describe('桌機飛行版廣告', () => {

    const flyUrl = 'http://falcondemo.pixnet.net/blog/post/238529215';

    before(() => {
        return browser.url(flyUrl);
    });

    it('應初始化飛行版容器', () => {
        browser.waitForVisible('#ad-full-page', 2000);
        browser.element('.ad-full-page-counter').waitForText(2000);
    })

    it('應顯示廣告標題及略過廣告文案與倒數', () => {
        browser.element('.ad-full-page-counter').waitForText(2000);

        const skipText = browser.getText('.ad-full-page-continue')
        assert(skipText.match(/略過廣告/));

        const counter = browser.getText('.ad-full-page-counter')
        assert.ok(counter > 0);

        const title = browser.getText('.ad-title');
        assert.ok(title);
    })

    it('應顯示廣告圖像, 寬 > 0, 高 > 0', () => {
        //browser.element('.ad-content img').waitForVisible(2000);
        let img = browser.element('.ad-content img');
        img.waitForVisible(2000);

        img = browser.getElementSize('.ad-content img');

        assert.ok(img.width);
        assert.ok(img.height);
    })

    it('應倒數計時', () => {
        browser.element('.ad-full-page-counter').waitForText(1000);

        browser.waitUntil(function () {
            return ~~browser.getText('.ad-full-page-counter') < 8;
        }, 2000, '等兩秒後倒數文案應小於 8 秒');
    });

    it('倒數計時 10 秒後廣告應移除', () => {
        browser.element('.ad-full-page-counter').waitForText(1000);

        // 十秒後 #ad-full-page 與 Child DOM Nodes 皆會被移除
        browser.waitUntil(function () {
            console.log('waitUntil LINE 57');
            return !browser.isExisting('#ad-full-page');
        }, 10000, '等十秒');

    })
})