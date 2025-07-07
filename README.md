# Astro Boilerplate

モダンなWebサイト構築のためのAstroベースのボイラープレートです。TypeScript、Tailwind CSS、Sass、そして包括的なコード品質管理ツールを統合しています。

## 🚀 特徴

- **⚡ Astro 5.11.0** - 高速な静的サイトジェネレーター
- **🎨 Tailwind CSS 4.1.11** - ユーティリティファーストのCSSフレームワーク
- **📝 TypeScript** - 型安全性と開発体験の向上
- **💅 Sass** - 高度なCSS機能と変数管理
- **🔧 包括的な開発ツール**
  - ESLint - JavaScript/TypeScriptの静的解析
  - Prettier - コードフォーマッター
  - Stylelint - CSS/SCSSの静的解析
  - Markuplint - HTML/Astroファイルの検証

## 📋 必要条件

- Node.js 18.0.0以上
- pnpm（推奨）またはnpm

## 🛠️ セットアップ

1. **リポジトリのクローン**
   ```bash
   git clone <repository-url>
   cd astro-boilerplate
   ```

2. **依存関係のインストール**
   ```bash
   pnpm install
   ```

3. **開発サーバーの起動**
   ```bash
   pnpm dev
   ```

   開発サーバーは `http://localhost:4321` で起動します。

## 📜 利用可能なスクリプト

| スクリプト | 説明 |
|-----------|------|
| `pnpm dev` | 開発サーバーを起動 |
| `pnpm build` | 本番用ビルドを作成 |
| `pnpm preview` | ビルドされたサイトをプレビュー |
| `pnpm astro` | Astro CLIコマンドを実行 |
| `pnpm lint:astro` | Astroファイルのマークアップ検証 |

## 🏗️ プロジェクト構造

```
astro-boilerplate/
├── public/              # 静的アセット
│   └── favicon.svg
├── src/
│   ├── pages/           # ページコンポーネント
│   │   └── index.astro
│   ├── styles/          # グローバルスタイル
│   │   └── global.css
│   └── types/           # TypeScript型定義
│       └── index.ts
├── astro.config.mjs     # Astro設定
├── eslint.config.mjs    # ESLint設定
├── prettier.config.mjs  # Prettier設定
├── stylelint.config.mjs # Stylelint設定
└── package.json
```

## 🎨 スタイリング

このプロジェクトでは以下のスタイリング手法を組み合わせて使用しています：

### Tailwind CSS
- ユーティリティクラスによる高速なスタイリング
- レスポンシブデザインのサポート
- カスタムカラーパレットとテーマ

### Sass
- 変数、ミックスイン、ネスト機能
- モジュラーなCSSアーキテクチャ
- 高度なスタイル管理

### Astroのスタイル機能
- コンポーネントスコープのスタイル
- CSS変数の動的注入
- グローバルスタイルの管理

## 🔧 開発ツール

### ESLint
- TypeScriptとAstroファイルの静的解析
- 未使用インポートの自動削除
- インポート順序の自動整理

### Prettier
- 一貫したコードフォーマット
- Astroファイルの専用サポート
- チーム開発での統一されたスタイル

### Stylelint
- CSS/SCSSの品質チェック
- Tailwind CSSのサポート
- プロパティ順序の自動整理

### Markuplint
- HTML/Astroファイルの構文チェック
- アクセシビリティの検証
- セマンティックなマークアップの確認

## 📦 依存関係

### 本番依存関係
- `astro` - 静的サイトジェネレーター
- `@tailwindcss/vite` - Tailwind CSS Viteプラグイン
- `tailwindcss` - CSSフレームワーク
- `sass` - CSSプリプロセッサ

### 開発依存関係
- `@eslint/js` - ESLint JavaScript設定
- `@typescript-eslint/*` - TypeScript ESLintプラグイン
- `eslint-plugin-astro` - Astro ESLintプラグイン
- `prettier` - コードフォーマッター
- `stylelint` - CSSリンター
- `markuplint` - マークアップリンター
