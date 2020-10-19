import {getDriver} from './helpers';
import {until} from 'selenium-webdriver';

let driver;

beforeAll(() => {
  driver = getDriver();
});

afterAll(async () => {
  await driver.quit();
});

test('should have a title', async  () => {
  await driver.get('http://localhost:3000');
  await driver.wait(until.titleIs('React App'), 1000);
});
