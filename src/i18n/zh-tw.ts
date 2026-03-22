export const zhTW = {
  lang: 'zh-TW',
  htmlLang: 'zh-Hant',
  title: 'Spec Plan Manager — Markdown 規格與計畫管理工具',
  description: '桌面應用程式，用於編寫和管理 Markdown 規格與計畫文件。支援 macOS 與 Windows。',

  nav: {
    features: '功能',
    workflow: '流程',
    screenshots: '介面',
    faq: 'FAQ',
    github: 'GitHub',
    download: '下載',
  },

  hero: {
    badge: '免費開源',
    platforms: 'macOS + Windows',
    version: 'v0.1.0',
    title1: '規格文件',
    title2: '管理工具',
    desc: '撰寫 {md}、追蹤{progress}、分析{coverage} — 為軟體團隊打造的桌面應用程式。',
    descMd: 'Markdown 規格文件',
    descProgress: '實作進度',
    descCoverage: '覆蓋率',
    downloadBtn: '下載',
    scroll: 'Scroll',
  },

  marquee: ['分割編輯器', '即時預覽', '覆蓋率分析', '規格分析器', '進度追蹤', '檔案監控', '多專案工作區', 'Mermaid 圖表', '自動儲存', '多分頁編輯', '自動更新', '精簡模式', '中英雙語'],

  features: {
    label: '01 / 功能',
    title: '從撰寫\n到交付。',
    desc: '一站完成規格管理流程。編輯、預覽、追蹤、分析 — 全部在同一個視窗。',
    items: [
      { title: '編輯器與預覽', desc: '語法高亮 Markdown 編輯器，三種檢視模式：純編輯、分割預覽、純預覽。Mermaid 圖表、GFM 表格、任務列表、程式碼高亮。多分頁、自動儲存。' },
      { title: 'Frontmatter 與進度', desc: '自動解析 YAML 前置資料，行內編輯狀態、優先級與標籤。基於勾選框的進度追蹤，搭配視覺化進度條，一目瞭然。' },
      { title: '工作區管理', desc: '檔案樹瀏覽器，含展開/收合及右鍵選單。多專案切換、跨檔案全文搜尋、即時偵測外部變更、麵包屑導航。' },
      { title: '規格分析', desc: '透過 Claude CLI 整合的 AI 分析 — 覆蓋率掃描搭配逐項需求狀態徽章、DO/DON\'T 清單萃取、驗證指標、雙語支援、匯出為 Markdown。' },
      { title: '自動更新', desc: '應用程式內更新檢查，含版本說明顯示。下載進度指示器，一鍵安裝並重新啟動 — 隨時保持最新版本。' },
      { title: '精簡模式', desc: '迷你置頂視窗，讓你在寫程式時快速查閱規格文件。無需切換視窗，隨時掌握規格內容。' },
      { title: '快捷鍵與偏好', desc: 'Cmd+S 儲存、Cmd+B 切換側邊欄、Cmd+W 關閉分頁、Cmd+\\ 切換預覽。主題切換、中英雙語介面、字型大小調整、自動儲存開關。' },
    ],
  },

  workflow: {
    label: '02 / 工作流程',
    title: '三個步驟，完成規格管理',
    steps: [
      { title: '撰寫規格', desc: '在分割編輯器中撰寫 Markdown 規格文件。即時預覽、語法高亮、自動儲存。透過 Frontmatter 標記狀態與優先級。', tag: 'editor + preview + frontmatter' },
      { title: '追蹤進度', desc: '勾選框自動計算完成率，進度條一目瞭然。多專案工作區切換，跨檔案搜尋快速定位。', tag: 'progress + workspace + search' },
      { title: '分析規格', desc: '透過 Claude CLI 的 AI 分析 — 覆蓋率掃描搭配狀態徽章、DO/DON\'T 清單萃取、驗證指標。雙語支援，含快取與匯出。', tag: 'claude-cli + coverage + spec-analyzer' },
    ],
  },

  screenshots: {
    label: '03 / 介面',
    title: '應用程式截圖',
    items: [
      { alt: '工作區 — 多專案檔案管理', label: '工作區' },
      { alt: '編輯器 — 分割預覽模式', label: '分割預覽' },
      { alt: '規格分析面板 — DO/DON\'T 清單與驗證指標', label: '規格分析' },
    ],
    prev: '上一張截圖',
    next: '下一張截圖',
  },

  shortcuts: {
    label: '04 / 鍵盤操作',
    title: '雙手不離\n鍵盤。',
    desc: '常用操作都有快捷鍵。macOS 與 Windows 快捷鍵自動對應。',
    items: [
      { label: '儲存', key: 'S' },
      { label: '切換側邊欄', key: 'B' },
      { label: '關閉分頁', key: 'W' },
      { label: '切換預覽', key: '\\' },
    ],
  },

  opensource: {
    label: '05 / 開源',
    title: '完全開源',
    desc: 'MIT 授權，原始碼完全公開。歡迎提交 Issue、Pull Request，或 Fork 後自行修改。',
    viewSource: '查看原始碼',
    reportIssue: '回報問題',
  },

  download: {
    label: '06 / 下載',
    title: '立即\n開始使用。',
    desc: '免費、開源、MIT 授權。無需註冊帳號，無遙測追蹤。',
    detecting: '偵測作業系統中...',
    recommended: '推薦',
    macAppleSilicon: 'macOS — Apple Silicon (.dmg)',
    macIntel: 'macOS — Intel (.dmg)',
    windows: 'Windows (.exe)',
    allVersions: '所有版本',
    downloadMac: '下載 macOS 版 (.dmg)',
    downloadWin: '下載 Windows 版 (.exe)',
    downloadGeneric: '前往下載頁面',
    heroMac: '下載 macOS 版',
    heroWin: '下載 Windows 版',
    heroGeneric: '免費下載',
  },

  faq: {
    label: '07 / FAQ',
    title: '常見\n問題。',
    items: [
      { q: '這個工具是免費的嗎？', a: '完全免費且開源。採用 MIT 授權，你可以自由使用、修改、分發。沒有隱藏費用，沒有功能限制。' },
      { q: '支援哪些作業系統？', a: '目前支援 macOS（Apple Silicon .dmg）和 Windows（x64 .exe）。Linux 版本正在規劃中。' },
      { q: 'macOS 顯示「已損毀，無法打開」怎麼辦？', a: '<p>這是 macOS Gatekeeper 安全機制，因為應用尚未經過 Apple 簽署。安裝後在終端機執行以下指令即可正常開啟：</p><code class="block bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-4 py-2.5 text-accent text-[12px] font-mono select-all mt-2">xattr -cr /Applications/Spec\\ Plan\\ Manager.app</code><p class="text-zinc-600 text-[11px] mt-2">此指令只需執行一次。</p>', html: true },
      { q: '規格分析需要什麼額外工具？', a: '規格分析功能（覆蓋率掃描與 DO/DON\'T 清單萃取）需要安裝 Claude CLI。其他所有功能（編輯器、預覽、進度追蹤、檔案管理）不需要任何額外依賴。' },
      { q: '資料儲存在哪裡？', a: '所有檔案都儲存在你的本機。沒有雲端同步、沒有帳號系統、沒有遙測追蹤。你的資料完全屬於你。' },
      { q: '支援哪些 Markdown 語法？', a: '支援完整的 GFM（GitHub Flavored Markdown），包含表格、任務列表、程式碼區塊語法高亮、Mermaid 圖表渲染、YAML frontmatter，以及標題錨點連結。' },
    ],
  },

  footer: {
    reportIssue: '回報問題',
    changelog: '版本紀錄',
  },

  backToTop: '回到頂部',

  switchLang: 'English',
  switchLangPath: '/',
}
