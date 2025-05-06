import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "chai";

Given(/^Google page is opened$/, async function () {
  await browser.url("https://www.google.com");
  await browser.pause(2000);
});

When(/^Search with (.*)$/, async function (searchItem: string) {
  console.log(">> searchItem: ", searchItem);
  let elem = await $("[name=q]");
  await elem.setValue(searchItem);
  await browser.keys("Enter");
});

Then(/^Click on first search result$/, async function () {
  let elem = await $("<h3>");
  await elem.waitForClickable({ timeout: 20000 });
  await elem.click();
});

Then(/^URL should match (.*)$/, async function (expectedURL) {
  console.log(">> expecteURL ", expectedURL);
  const url = await browser.getUrl();
  expect(url).to.equal(expectedURL);
});
