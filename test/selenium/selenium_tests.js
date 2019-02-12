/**
 * Test for getting started with Selenium.
 */
"use strict";



const assert = require("assert");
const test = require("selenium-webdriver/testing");
const webdriver = require("selenium-webdriver");
const By = webdriver.By;

let browser;


// Does not work with WSL!! Use cygwin



// Test suite
test.describe("Me-sida", function() {
    test.beforeEach(function(done) {
        this.timeout(20000);
        browser = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.firefox()).build();

        browser.get("http://localhost:8080/");
        done();
    });

    test.afterEach(function(done) {
        browser.quit();
        done();
    });


    function goToNavLink(target) {
        browser.findElement(By.linkText(target)).then(function(element) {
            element.click();
        });
    }

    function matchUrl(target) {
        browser.getCurrentUrl().then(function(url) {
            assert.ok(url.endsWith(target));
        });
    }

    function assertH1(target) {
        browser.findElement(By.css("h1")).then(function(element) {
            element.getText().then(function(text) {
                assert.equal(text, target);
            });
        });
    }

    function assertH2(target) {
        browser.findElement(By.tagName("h2")).then(function(element) {
            element.getText().then(function(text) {
                assert.equal(text, target);
            });
        });
    }

// Test case
    test.it("Test index", function(done) {

        browser.getTitle().then(function(title) {
            assert.equal(title, "me-sida");
        });

        assertH1("Me");
        //matchUrl("#!/");

        done();
    });



    test.it("Test go kmom01", function(done) {
        // try use nav link
        goToNavLink("kmom01");

        assertH2("KMOM01");

        done();
    });


    test.it("Test go Log In", function(done) {
        // try use nav link
        goToNavLink("Log In");

        assertH1("Log In");
        //matchUrl("#!/reports/kmom01" );

        done();
    });

});
