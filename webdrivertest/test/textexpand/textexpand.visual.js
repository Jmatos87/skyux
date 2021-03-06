/*global describe, it, browser, require */

describe('textexpand', function () {
    'use strict';

    it('should match the baseline screenshot when text expand is collapsed', function (done) {
        var common = require('../common');

        browser
            .setupTest('/textexpand/fixtures/test.full.html')
            .compareScreenshot({
                prefix: common.getPrefix(browser),
                screenshotName: 'textexpand_collapsed',
                selector: '#screenshot-text-expand-all'
            })
            .call(done);
    });

    it('should match the baseline screenshot when text expand is expanded', function (done) {
        var common = require('../common');

        browser
            .setupTest('/textexpand/fixtures/test.full.html')
            .click('#screenshot-text-expand .bb-text-expand-see-more')
            .click('#screenshot-text-expand-line-break .bb-text-expand-see-more')
            .click('#screenshot-text-expand-repeater .bb-text-expand-see-more')
            .click('#screenshot-text-expand-no-word-break .bb-text-expand-see-more')
            .compareScreenshot({
                prefix: common.getPrefix(browser),
                screenshotName: 'textexpand_expanded',
                selector: '#screenshot-text-expand-all'
            })
            .call(done);
    });
});
