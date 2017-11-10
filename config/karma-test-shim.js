// Мы не прекомпилируем TypeScript 
// Webpack транслирует эти файлы «на лету» в памяти и подает JS непосредственно в Karma. На диске нет временных файлов.

// Для правильной работы в этом файле мы сообщаем Karma, какие файлы предварительно загружаются Angular'ом

// Обратите внимание, что вы не загружаете код приложения явно. Вы указываете webpack'у где искать и загружать тестовые файлы (файлы, оканчивающиеся на .spec.ts). 
// Каждый spec-файл импортирует только исходный код приложения, который он тестирует. 
// Webpack загружает только те конкретные файлы приложений и игнорирует другие файлы, которые вы не тестируете.

Error.stackTraceLimit = Infinity;

require('core-js/es6');
require('core-js/es7/reflect');

require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');
require('zone.js/dist/proxy');
require('zone.js/dist/sync-test');
require('zone.js/dist/jasmine-patch');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');

var appContext = require.context('../src', true, /\.spec\.ts/);

appContext.keys().forEach(appContext);

var testing = require('@angular/core/testing');
var browser = require('@angular/platform-browser-dynamic/testing');

testing.TestBed.initTestEnvironment(browser.BrowserDynamicTestingModule, browser.platformBrowserDynamicTesting());