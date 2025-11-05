# e2e-testing-demo-20251105
とことんDevOps勉強会_202511回で使用

## 実行手順（簡潔）

※ インストール手順は別で配布するためここでは省略します。インストールが済んでいる前提で、テスト実行と UI モードだけを示します。

ターミナルでリポジトリのルートに移動してから実行してください。

- 全テストを実行:

```bash
npx playwright test
```

## React 開発用アプリ (ローカルログインデモ)

このリポジトリには簡単な React (Vite) 製のログイン画面が `app/` にあります。画面は日本語表記です。Playwright の E2E テストはこのローカルアプリに対して動作するようになっています。

1. 依存をインストール:

```bash
npm install
```

2. アプリを起動（Vite、デフォルトはポート 5173）:

```bash
npm start
```

3. 別ターミナルで Playwright テストを実行:

```bash
npm run test:e2e
```

ログインのサンプル資格情報:

- username: `admin`
- password: `pass`

Playwright のテストは `tests/login.spec.ts` に入っています。


- Playwright のインタラクティブ UI モードで起動（テストを選んで実行・デバッグできます）:

```bash
npx playwright test --ui
```

必要があれば `--project` やファイル指定で絞り込んで実行してください（例: `npx playwright test tests/example.spec.ts`）。

## レポートの確認

テスト実行後の HTML レポートを表示するには、次のコマンドを実行してください（ワークショップではこれだけで OK）。

```bash
npx playwright show-report
```
---
インストール方法や追加オプション（ヘッド表示、デバッグモード、ブラウザの個別インストールなど）は別ファイルまたは別セクションでまとめます。
