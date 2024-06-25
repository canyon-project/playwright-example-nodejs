import {expect, test} from './baseFixtures';

test('todo', async ({page}) => {
  await page.goto('https://todolist.canyoncov.com/');
  await page.fill('#todo-input', '起床');
  await page.press('#todo-input', 'Enter');
  const text = await page.$eval('.todo-count', el => el.textContent);
  expect(text).toContain('1 item');
  await page.fill('#todo-input', '洗漱');
  await page.press('#todo-input', 'Enter');
  await page.click('.toggle')
  await page.click('.clear-completed')
  const listItems = await page.$$('.todo-list>li');
  expect(listItems.length).toBe(1); // 假设预期的 <li> 数量为 3
  await page.fill('#todo-input', '早餐');
  await page.press('#todo-input', 'Enter');
  await page.fill('#todo-input', '通勤(去)');
  await page.press('#todo-input', 'Enter');
  await page.fill('#todo-input', '工作(上午)');
  await page.press('#todo-input', 'Enter');
  await page.fill('#todo-input', '午餐');
  await page.press('#todo-input', 'Enter');
  await page.fill('#todo-input', '散步(中午)');
  await page.press('#todo-input', 'Enter');
  await page.fill('#todo-input', '午睡');
  await page.press('#todo-input', 'Enter');
  await page.fill('#todo-input', '工作(下午)');
  await page.press('#todo-input', 'Enter');
  await page.fill('#todo-input', '散步(下午)');
  await page.press('#todo-input', 'Enter');
  await page.fill('#todo-input', '工作(下午2)');
  await page.press('#todo-input', 'Enter');
  await page.fill('#todo-input', '晚餐');
  await page.press('#todo-input', 'Enter');
  await page.fill('#todo-input', '散步(晚上)');
  await page.press('#todo-input', 'Enter');
  await page.fill('#todo-input', '工作(晚上)');
  await page.press('#todo-input', 'Enter');
  await page.fill('#todo-input', '通勤(回)');
  await page.press('#todo-input', 'Enter');
  await page.fill('#todo-input', '和家人一起');
  await page.press('#todo-input', 'Enter');
  await page.fill('#todo-input', '洗漱(晚)');
  await page.press('#todo-input', 'Enter');
  await page.fill('#todo-input', '睡觉');
  await page.press('#todo-input', 'Enter');
  const listItems2 = await page.$$('.todo-list>li');
  expect(listItems2.length).toBe(17); // 假设预期的 <li> 数量为 3
  await page.click('p>a');
  await expect(page).toHaveTitle(/MVC/);
});
