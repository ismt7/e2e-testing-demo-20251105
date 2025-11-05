// spec: tests/test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test'

test.describe('ログイン', () => {
  test('ログイン - 正常系', async ({ page }) => {
  // 1. ルート URL `http://localhost:5173/` に移動する
  await page.goto('http://localhost:5173/')

    // 2. ユーザー名入力（aria-label="username"）に `admin` を入力する
    await page.getByLabel('username').fill('admin')

    // 3. パスワード入力（aria-label="password"）に `pass` を入力する
    await page.getByLabel('password').fill('pass')

    // 4. 「ログイン」ボタンをクリックする
    await page.getByRole('button', { name: 'ログイン' }).click()

    // Verification: ダッシュボードに遷移し、`ログインしました。` が表示される
    await expect(page.getByText('ログインしました。')).toBeVisible()
  })
})
