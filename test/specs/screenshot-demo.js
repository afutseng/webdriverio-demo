var webdriverio = require('webdriverio'),
    assert      = require('assert');

describe('截圖測試', () => {

    it('灌人氣文章截圖', function () {
        var postUrl,
            postUrls = [
                'http://novia918.pixnet.net/blog/post/215011549',
                'http://jiart1118.pixnet.net/blog/post/394809661',
                'http://mocachino520.pixnet.net/blog/post/333668469',
            ];

        postUrls.map(function (url) {
            browser.url(url);
            browser.pause(1000);
            browser.saveScreenshot(
                './screenshot-' + url.replace(/https?:/, '').replace(/\//g, '') + '.png'
            );
        });

    });
})