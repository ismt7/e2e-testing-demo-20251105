// spec: tests/test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test'

test.describe('ログイン', () => {
  test('ログイン - 不正な資格情報', async ({ page }) => {
  // 1. ルート URL `http://localhost:5173/` に移動する
  await page.goto('http://localhost:5173/')

    // 2. ユーザー名入力（aria-label="username"）に `wrong` を入力する
    await page.getByLabel('username').fill('wrong')

    // 3. パスワード入力（aria-label="password"）に `wrong` を入力する
    await page.getByLabel('password').fill('wrong')

    // 4. 「ログイン」ボタンをクリックする
    await page.getByRole('button', { name: 'ログイン' }).click()

    // Verification: `認証に失敗しました` が role=alert 要素として表示される
    const alert = page.getByRole('alert')
    await expect(alert).toHaveText('認証に失敗しました')
  })
})
