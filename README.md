# webdriverio-demo

## 安裝步驟
1. 確定您的電腦已經安裝 Node.js 語言：https://nodejs.org/dist/v6.7.0/node-v6.7.0.pkg
2. 打開「終端機」，輸入「npm」不會出現錯誤，執行結果類似：
```
Usage: npm <command>

where <command> is one of:
    access, adduser, bin, bugs, c, cache, completion, config,
    ddp, dedupe, deprecate, dist-tag, docs, edit, explore, get,
    help, help-search, i, init, install, install-test, it, link,
    list, ln, logout, ls, outdated, owner, pack, ping, prefix,
    prune, publish, rb, rebuild, repo, restart, root, run,
    run-script, s, se, search, set, shrinkwrap, star, stars,
    start, stop, t, tag, team, test, tst, un, uninstall,
    unpublish, unstar, up, update, v, version, view, whoami

npm <cmd> -h     quick help on <cmd>
npm -l           display full usage info
npm help <term>  search for help on <term>
npm help npm     involved overview

Specify configs in the ini-formatted file:
    /Users/citeair/.npmrc
or on the command line via: npm <command> --key value
Config info can be viewed via: npm help config

npm@3.8.9 /usr/local/lib/node_modules/npm
```
3. 下載此 repository，於目錄輸入 「npm install」
4. 等待數分鐘將需要的套件安裝完畢

## 執行測試程式的步驟
1. 打開「終端機」，輸入 「selenium-standalone start」，此步驟為啟動本機的 selenium server，用來執行測試程式，搭載必要的 driver 驅動便可以在真實的瀏覽器例如 Chrome / Firefox 操作網頁
2. 另開一個「終端機」，輸入 「 ./node_modules/webdriverio/bin/wdio」，wdio 是 WebdriverIO 的可執行檔縮寫命名。
3. 若要搭配指定的設定檔，則帶入檔名在 wdio 後方，例如 「 ./node_modules/webdriverio/bin/wdio my-custom-wdio.conf.js」 
