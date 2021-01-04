import {getDriver} from './helpers';
import {until, By, Key} from 'selenium-webdriver';

let driver;

beforeAll(() => {
    driver = getDriver();
});

afterAll(async () => {
    await driver.quit();
});

const createTask = async (taskName) => {
    await driver.wait(until.elementLocated(By.xpath("//input[@placeholder='Enter new task']")), 1000);
    const input = await driver.findElement(By.xpath("//input[@placeholder='Enter new task']"));
    await input.clear();
    await input.sendKeys(taskName + Key.ENTER);

    await driver.wait(until.elementLocated(By.xpath(`//*[text()='${taskName}']`)), 1000);
};

test('should complete tasks', async  () => {
    // Creating tasks
    await driver.get('http://localhost:3000');
    await createTask('Task 1');
    await createTask('Task 2');
    await createTask('Task 3');

    // Complete task
    const task = await driver.findElement(By.xpath("//*[text()='Task 2']"));
    await task.click();

    // Check that it completed
    expect(await task.getAttribute('class')).toMatch(/completed/);

    // Uncomplete task
    await task.click();

    // Check that it uncompleted
    expect(await task.getAttribute('class')).not.toMatch(/completed/);
});
