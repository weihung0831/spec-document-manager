# Spec Document Manager — Landing Page

[Spec Document Manager](https://github.com/weihung0831/spec-document-manager) 桌面應用程式的官方網站，使用 Astro 6 + Tailwind CSS v4 + GSAP 建構。

## 技術棧

| 技術 | 版本 | 用途 |
|------|------|------|
| **Astro** | 6.x | 靜態網站框架 |
| **Tailwind CSS** | v4 | 使用 `@theme` 指令定義設計 token |
| **GSAP** | 3.x | 捲動動畫與過場效果 |
| **Vite** | 8.x | 建置工具 |
| **i18n** | — | 支援 English / 繁體中文 |

## 快速開始

```bash
npm install
npm run dev       # 啟動開發伺服器
npm run build     # 建置至 dist/
npm run preview   # 預覽正式建置結果
```

## 專案結構

```
src/
├── components/
│   ├── landing-page.astro        # 主頁面容器
│   ├── section-nav.astro         # 導覽列
│   ├── section-hero.astro        # Hero 區塊
│   ├── section-marquee.astro     # 跑馬燈
│   ├── section-features.astro    # 功能介紹
│   ├── section-workflow.astro    # 工作流程
│   ├── section-screenshots.astro # 應用截圖
│   ├── section-shortcuts.astro   # 快捷鍵
│   ├── section-opensource.astro  # 開源資訊
│   ├── section-download.astro    # 下載區塊
│   ├── section-faq.astro         # 常見問題
│   └── section-footer.astro      # 頁尾
├── i18n/
│   ├── en.ts                     # 英文翻譯
│   ├── zh-tw.ts                  # 繁體中文翻譯
│   ├── icons.ts                  # SVG icon 定義
│   └── utils.ts                  # i18n 工具
├── layouts/
│   └── base-layout.astro         # HTML 外殼、字型載入、JS
├── pages/
│   ├── index.astro               # 英文首頁
│   └── zh-TW/index.astro        # 中文首頁
└── style.css                     # Tailwind v4 @theme token + 自訂 CSS

public/assets/                    # 應用程式截圖 (PNG)
```

## 設計特色

- **單頁式 Landing Page** — 所有區塊集中呈現，無路由切換
- **主色調** — `#10b981` (Emerald 500)
- **字型** — Satoshi (內文) + JetBrains Mono (程式碼)
- **GitHub Releases API** — 自動取得最新版本，依作業系統顯示對應下載按鈕
