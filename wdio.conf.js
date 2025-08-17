// wdio.conf.js
const useLogin = require('./utils/customerLogin');
const scrollDown = require('./utils/scrollAction')

// flip between local / BrowserStack via env var: BROWSERSTACK=true
const isBrowserStack = process.env.BROWSERSTACK === 'true';

// ---------- shared ----------
const sharedConfig = {
  runner: 'local',
  specs: ['./e2e/**/*.js'],
  maxInstances: 1,
  logLevel: 'info',
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters: ['spec', ['allure', { outputDir: 'allure-results' }]],
  mochaOpts: { ui: 'bdd', timeout: 60000 },

  before: function () {
    // your login util
    useLogin();
    scrollDown()

  },

  afterTest: async function (_test, _context, { passed }) {
    if (!passed) await browser.takeScreenshot();
  }
};

// ---------- BrowserStack ----------
const browserStackConfig = {
  user: process.env.BROWSERSTACK_USERNAME || 'baba_g02DUz',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'veKpfcakfVAJsUBecxqU',
  hostname: 'hub.browserstack.com',
  path: '/wd/hub',
  services: [['browserstack', { browserstackLocal: true }]],

  capabilities: [{
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'Samsung Galaxy S22 Ultra',
    'appium:platformVersion': '12.0',
    // supply via env if you want: BS_APP_ANDROID=bs://xxxx
    'appium:app': process.env.BS_APP_ANDROID || 'bs://707111a01ea7d54f9fe52289272a2dbf2500f2a8',

    'bstack:options': {
      projectName: 'SauceLabs App Tests',
      buildName: 'bstack-SauceLab',
      sessionName: 'Android run',
      debug: true,
      networkLogs: true
      // NOTE: Local tunnel is handled by the service; no need to set here.
    }
  }]
};

// ---------- Local Appium ----------
const localConfig = {
  port: 4723,
  services: ['appium'],
  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'RF8N21N921L',
    'appium:udid': 'RF8N21N921L',
    'appium:automationName': 'UiAutomator2',
    'appium:appPackage': 'com.saucelabs.mydemoapp.rn',
    'appium:appActivity': 'com.saucelabs.mydemoapp.rn.MainActivity',
    'appium:noReset': true,
    'appium:fullReset': false,
    'appium:unicodeKeyboard': true,
    'appium:dontStopAppOnReset': true,
    'appium:appWaitActivity': '*',
    'appium:autoGrantPermissions': true,
    'appium:appWaitDuration': 100000,
    'appium:newCommandTimeout': 30000,
    'appium:enforceXPath1': true
  }]
};

// ---------- export ----------
exports.config = isBrowserStack
  ? { ...sharedConfig, ...browserStackConfig }
  : { ...sharedConfig, ...localConfig };
