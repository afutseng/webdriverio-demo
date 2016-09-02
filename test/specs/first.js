var webdriverio = require('webdriverio'),
    assert      = require('assert');

describe('PIXNET 大首頁', () => {
    it('標題應為品牌字', () => {
        const title = browser.url('https://www.pixnet.net').getTitle()
        assert.equal(title, '痞客邦 PIXNET')
    })


    it('焦點區塊圖片應正常顯示',function() {
        var imgs =  browser
            .url('https://www.pixnet.net/')
            .getElementSize('#feature-box-ul li img');

        imgs.map(function (img) {
            assert(590 === img.width);
            assert(393 === img.height);
        });

    });

    it('焦點區塊圖片網址應為 pimg.tw 正式網域',function() {
        var imgUrls =  browser
            .url('https://www.pixnet.net/')
            .getAttribute('#feature-box-ul li img', 'src');

        imgUrls.map(function (url) {
            assert(url.match(/pimg.tw\//));
        });

    });
})