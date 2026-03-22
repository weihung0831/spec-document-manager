export const en = {
  lang: 'en',
  htmlLang: 'en',
  title: 'Spec Plan Manager — Markdown Spec & Plan Management Tool',
  description: 'Desktop app for writing and managing Markdown spec and plan documents. Supports macOS and Windows.',

  // Nav
  nav: {
    features: 'Features',
    workflow: 'Workflow',
    screenshots: 'Screenshots',
    faq: 'FAQ',
    github: 'GitHub',
    download: 'Download',
  },

  // Hero
  hero: {
    badge: 'Free & Open Source',
    platforms: 'macOS + Windows',
    version: 'v0.1.0',
    title1: 'Spec Plan',
    title2: 'Manager',
    desc: 'Write {md}, track {progress}, analyze {coverage} — a desktop app built for software teams.',
    descMd: 'Markdown specs',
    descProgress: 'implementation progress',
    descCoverage: 'coverage',
    downloadBtn: 'Download',
    scroll: 'Scroll',
  },

  // Marquee
  marquee: ['Split Editor', 'Live Preview', 'Coverage Analysis', 'Spec Analyzer', 'Progress Tracking', 'File Watcher', 'Multi-Project Workspace', 'Mermaid Diagrams', 'Auto Save', 'Multi-Tab Editing', 'Auto Update', 'Compact Mode', 'Bilingual'],

  // Features
  features: {
    label: '01 / Features',
    title: 'From writing\nto delivery.',
    desc: 'Complete your spec management workflow in one place. Edit, preview, track, analyze — all in one window.',
    items: [
      { title: 'Editor & Preview', desc: 'Syntax-highlighted Markdown editor with three view modes: edit only, split preview, preview only. Mermaid diagrams, GFM tables, task lists, code highlighting. Multi-tab, auto-save.' },
      { title: 'Frontmatter & Progress', desc: 'Auto-parses YAML front matter for inline status, priority, and tags editing. Checkbox-based progress tracking with visual progress bars at a glance.' },
      { title: 'Workspace Management', desc: 'File tree with expand/collapse and context menus. Multi-project switching, cross-file full-text search, live external change detection, breadcrumb navigation.' },
      { title: 'Spec Analysis', desc: 'AI-powered spec analysis via Claude CLI — coverage scanning with per-requirement status badges, DO/DON\'T checklists extraction, verification criteria, bilingual support, export to Markdown.' },
      { title: 'Auto Update', desc: 'In-app update checker with release notes display. Download progress indicator, one-click install and relaunch — always stay on the latest version.' },
      { title: 'Compact Mode', desc: 'Mini always-on-top window for quick spec reference while coding. Keep your specs visible without switching windows.' },
      { title: 'Shortcuts & Preferences', desc: 'Cmd+S save, Cmd+B toggle sidebar, Cmd+W close tab, Cmd+\\ toggle preview. Theme switching, bilingual UI, font size adjustment, auto-save toggle.' },
    ],
  },

  // Workflow
  workflow: {
    label: '02 / Workflow',
    title: 'Three steps to manage your specs',
    steps: [
      { title: 'Write Specs', desc: 'Write Markdown spec documents in the split editor. Live preview, syntax highlighting, auto-save. Mark status and priority via Frontmatter.', tag: 'editor + preview + frontmatter' },
      { title: 'Track Progress', desc: 'Checkboxes auto-calculate completion rate with visual progress bars. Multi-project workspace switching, cross-file search.', tag: 'progress + workspace + search' },
      { title: 'Analyze Specs', desc: 'AI-powered analysis via Claude CLI — coverage scanning with status badges, DO/DON\'T checklists extraction, verification criteria. Bilingual, with cache and export.', tag: 'claude-cli + coverage + spec-analyzer' },
    ],
  },

  // Screenshots
  screenshots: {
    label: '03 / Screenshots',
    title: 'Application Screenshots',
    items: [
      { alt: 'Workspace — Multi-project file management', label: 'Workspace' },
      { alt: 'Editor — Split preview mode', label: 'Split Preview' },
      { alt: 'Spec analysis panel — DO/DON\'T checklists and verification criteria', label: 'Spec Analysis' },
    ],
    prev: 'Previous screenshot',
    next: 'Next screenshot',
  },

  // Shortcuts
  shortcuts: {
    label: '04 / Keyboard',
    title: 'Hands on\nkeyboard.',
    desc: 'All common operations have keyboard shortcuts. macOS and Windows shortcuts auto-mapped.',
    items: [
      { label: 'Save', key: 'S' },
      { label: 'Toggle Sidebar', key: 'B' },
      { label: 'Close Tab', key: 'W' },
      { label: 'Toggle Preview', key: '\\' },
    ],
  },

  // Open Source
  opensource: {
    label: '05 / Open Source',
    title: 'Fully Open Source',
    desc: 'MIT licensed, source code fully public. Feel free to submit Issues, Pull Requests, or Fork and modify.',
    viewSource: 'View Source',
    reportIssue: 'Report Issue',
  },

  // Download
  download: {
    label: '06 / Download',
    title: 'Get started\nnow.',
    desc: 'Free, open source, MIT licensed. No account required, no telemetry.',
    detecting: 'Detecting OS...',
    recommended: 'Recommended',
    macAppleSilicon: 'macOS — Apple Silicon (.dmg)',
    macIntel: 'macOS — Intel (.dmg)',
    windows: 'Windows (.exe)',
    allVersions: 'All Versions',
    downloadMac: 'Download for macOS (.dmg)',
    downloadWin: 'Download for Windows (.exe)',
    downloadGeneric: 'Go to Downloads',
    heroMac: 'Download for macOS',
    heroWin: 'Download for Windows',
    heroGeneric: 'Free Download',
  },

  // FAQ
  faq: {
    label: '07 / FAQ',
    title: 'Frequently\nAsked.',
    items: [
      { q: 'Is this tool free?', a: 'Completely free and open source. MIT licensed — you can freely use, modify, and distribute it. No hidden fees, no feature restrictions.' },
      { q: 'Which operating systems are supported?', a: 'Currently supports macOS (Apple Silicon .dmg) and Windows (x64 .exe). Linux support is planned.' },
      { q: 'macOS says "damaged, can\'t be opened"?', a: '<p>This is macOS Gatekeeper security — the app is not yet Apple-signed. Run this command in Terminal after installation:</p><code class="block bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-4 py-2.5 text-accent text-[12px] font-mono select-all mt-2">xattr -cr /Applications/Spec\\ Plan\\ Manager.app</code><p class="text-zinc-600 text-[11px] mt-2">Only needs to be run once.</p>', html: true },
      { q: 'What tools does spec analysis require?', a: 'Spec analysis (coverage scanning and DO/DON\'T extraction) requires Claude CLI. All other features (editor, preview, progress tracking, file management) need no additional dependencies.' },
      { q: 'Where is data stored?', a: 'All files are stored locally. No cloud sync, no account system, no telemetry. Your data is entirely yours.' },
      { q: 'Which Markdown syntax is supported?', a: 'Full GFM (GitHub Flavored Markdown) support including tables, task lists, code block syntax highlighting, Mermaid diagram rendering, YAML frontmatter, and heading anchor links.' },
    ],
  },

  // Footer
  footer: {
    reportIssue: 'Report Issue',
    changelog: 'Changelog',
  },

  // Back to top
  backToTop: 'Back to top',

  // Language switcher
  switchLang: '繁體中文',
  switchLangPath: '/zh-TW/',
}
