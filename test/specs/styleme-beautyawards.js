var webdriverio = require('webdriverio'),
    assert      = require('assert');

describe('美妝口碑大賞', () => {

    before(function () {
        return browser.url('https://styleme.events.pixnet.net/beautyawards201609/reputation.php');
    });


    it('點擊美妝賞之每個分類頁籤', () => {

        browser.element('.main-container').waitForText(10000);

        // 點擊美妝賞主頁籤
        browser.click('.main-etab__tab.id1');
        browser.element('#cosmetic').waitForVisible(3000);

        for (i = 1; i <= 7; ++i) {
            //browser.moveToObject('#cosmetic .sub-etab__tab:nth-child(' + i + ')');
            browser.click('#cosmetic .sub-etab__tab:nth-child(' + i + ')');
            browser.pause(500);
        }

    })

    it('移動游標至當前頁籤每個商品', () => {

        browser.pause(1000);
        for (i = 1; i <= 3; ++i) {
            browser.moveToObject('div.active .sub-etab__container .active .product-item:nth-child(' + i + ') .product-item__img');
            browser.pause(300);
        }
        browser.pause(1000);
    });

    it('商品圖片網址應為痞客邦相簿正式網域 pimg.tw', function () {
        var imgUrls =  browser.getAttribute('.product-item__img', 'src');

        imgUrls.map(function (url) {
            assert(url.match(/pimg.tw\//));
        });

    });

    it('RWD 測試：iPad -> iPhone 6 Plus -> iPhone 6 -> iPhone 5', () => {

        browser.setViewportSize({width: 768, height: 1024});
        browser.pause(1000);
        browser.setViewportSize({width: 414, height: 736});
        browser.pause(1000);
        browser.setViewportSize({width: 375, height: 667});
        browser.pause(1000);
        browser.setViewportSize({width: 320, height: 568});
        browser.pause(1000);

        browser.click('.nav-btn__open');
        browser.pause(1000);
        browser.click('.nav-btn__close');
        browser.pause(500);
    });
})