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
    await driver.wait(until.elementLocated(By.id("newTodoInput")), 1000);
    await driver.findElement(By.id("newTodoInput")).sendKeys("new todo!" + Key.ENTER);

    await driver.wait(until.elementLocated(By.className("todo")), 1000);
    const todos = await driver.findElements(By.className("todo"));
    
    expect(todos[0].getText()).toEqual("new todo!");
});
