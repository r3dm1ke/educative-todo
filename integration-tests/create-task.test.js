import {getDriver} from './helpers';
import {until, By, Key} from 'selenium-webdriver';

let driver;

beforeAll(() => {
    driver = getDriver();
});

afterAll(async () => {
    await driver.quit();
});

test('should create tasks', async  () => {
    await driver.get('http://localhost:3000');
    await driver.wait(until.elementLocated(By.xpath("//input[@placeholder='Enter new task']")), 1000);
    await driver.findElement(By.xpath("//input[@placeholder='Enter new task']"))
        .sendKeys('new todo!' + Key.ENTER);

    await driver.wait(until.elementLocated(By.xpath("//*[text()='new todo!']")), 1000);
});
