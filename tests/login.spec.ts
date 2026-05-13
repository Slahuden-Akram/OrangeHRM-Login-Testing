import { test, expect } from '@playwright/test';

const correctUsername = 'Admin';
const correctPassword = 'admin123';
const invalidUsername = 'invalid';
const invalidPassword = 'password';
const loginPage = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
test.describe("Login", () => {
    test.beforeEach("Login page should load", async ({ page }) => {
        await page.goto(loginPage);
        await expect(page).toHaveURL(loginPage);
    });
    test('username field should be visible', async ({ page }) => {
        await expect(page.locator('input[name="username"]')).toBeVisible();
    });
    test('password field should be visible', async ({ page }) => {
        await expect(page.locator('input[name="password"]')).toBeVisible();
    });
    test('Login button should be visible', async ({ page }) => {
        await expect(page.locator('button[type="submit"]')).toBeVisible();
    });
    test('Password field must be masked', async ({ page }) => {
        await expect(page.locator('input[name="password"]')).toHaveAttribute('type', "password"); // to check the password is masked or not, there should be a fixed type=password in HTML
    });
    test("Should login successfully with valid credentials", async ({ page }) => {
        await page.locator('input[name="username"]').fill(correctUsername);
        await page.locator('input[name="password"]').fill(correctPassword);
        await page.locator('button[type="submit"]').click();
        await expect(page).toHaveURL(/dashboard/);
    });
    test('Invalid credentials should appear on invalid username', async ({ page }) => {
        await page.locator('input[name="username"]').fill(invalidUsername);
        await page.locator('input[name="password"]').fill(correctPassword);
        await page.locator('button[type="submit"]').click();
        await expect(page.getByText('Invalid credentials')).toBeVisible();
    });
    test('Invalid credentials should appear on invalid password', async ({ page }) => {
        await page.locator('input[name="username"]').fill(correctUsername);
        await page.locator('input[name="password"]').fill(invalidPassword);
        await page.locator('button[type="submit"]').click();
        await expect(page.getByText('Invalid credentials')).toBeVisible();
    });
    test('Required should appear on Empty Fields', async ({ page }) => {
        await page.locator('input[name="username"]').fill('');
        await page.locator('input[name="password"]').fill('');
        await page.locator('button[type="submit"]').click();
        await expect(page.getByText("Required")).toHaveCount(2);
    });
    test('Required should appear when user enter password only', async ({ page }) => {
        await page.locator('input[name="username"]').fill('');
        await page.locator('input[name="password"]').fill(correctPassword);
        await page.locator('button[type="submit"]').click();
        await expect(page.getByText('Required').first()).toBeVisible();
    });
    test('Required should appear when user enter username only', async ({ page }) => {
        await page.locator('input[name="username"]').fill(correctUsername);
        await page.locator('input[name="password"]').fill('');
        await page.locator('button[type="submit"]').click();
        await expect(page.getByText('Required').last()).toBeVisible();
    });

});