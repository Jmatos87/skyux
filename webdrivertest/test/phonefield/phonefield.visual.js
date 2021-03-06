/*global describe, it, browser, require */

describe('Phone Field directive', function () {
    'use strict';

    var testPath = '/phonefield/fixtures/test.full.html',
        selectors = {
        flagContainer: '.flag-container',
        countryList: '.country-list',
        localCountryTextbox: 'input[placeholder="(201) 555-5555"]',
        intlCountryTextbox: 'input[placeholder="01812-345678"]',
        intlCountrySelect: 'li[data-dial-code="880"]',
        wrapper: '#screenshot-phone-field'
    };

    it('should match the baseline phone field screenshot.', function (done) {
        var common = require('../common');

        browser
            .setupTest(testPath)
            .waitForVisible(selectors.localCountryTextbox)
            .compareScreenshot({
                prefix: common.getPrefix(browser),
                screenshotName: 'phonefield',
                selector: selectors.wrapper,
                checkAccessibility: true
            })
            .call(done);
    });

    it('should match the baseline phone field screenshot when the flag selector is clicked.', function (done) {
        var common = require('../common');

        browser
            .setupTest(testPath)
            .click(selectors.flagContainer)
            .waitForVisible(selectors.countryList)
            .compareScreenshot({
                prefix: common.getPrefix(browser),
                screenshotName: 'phonefield_flag_select',
                selector: selectors.wrapper,
                checkAccessibility: true
            })
            .call(done);
    });

    it('should match the baseline phone field screenshot when an international country is selected.', function (done) {
        var common = require('../common');

        browser
            .setupTest(testPath)
            .click(selectors.flagContainer)
            .click(selectors.intlCountrySelect)
            .waitForVisible(selectors.intlCountryTextbox)
            .click('body')
            .compareScreenshot({
                prefix: common.getPrefix(browser),
                screenshotName: 'phonefield_intl_country',
                selector: selectors.wrapper,
                checkAccessibility: true
            })
            .call(done);
    });
});
