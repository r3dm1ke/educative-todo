import webdriver from 'selenium-webdriver';
import chrome from 'chromedriver';

export const getDriver = () => {
  let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
  return driver;
};
