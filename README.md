# 鸣潮最新版本前瞻内容汇总

> Wuthering Waves Version Preview — Static Web Page

纯静态网页项目，汇总鸣潮（Wuthering Waves）最新版本的前瞻内容。当前覆盖 **Version 3.5「遗音扶剑 荡梦而歌」**。

---

## 📁 文件结构

```
wuwa_pre/
├── index.html      # 主页面 —— 完整语义结构，所有内容由 JS 动态渲染
├── styles.css      # 样式表 —— 深色科幻 UI，响应式布局
├── script.js       # 交互脚本 —— 渲染、导航、搜索、筛选、展开/收起
├── data.js         # 版本数据 —— 所有版本内容的单一数据源
└── README.md       # 项目说明（本文件）
```

## 🚀 使用方法

### 本地运行

直接在浏览器中打开 `index.html` 即可，**无需安装任何依赖**。

```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### 部署

将全部文件上传到任意静态托管服务（GitHub Pages / Vercel / Netlify / Cloudflare Pages / 对象存储）即可。

## 📊 页面结构

| 章节 | ID | 说明 |
|------|-----|------|
| **Hero** | `#hero` | 版本号、标题、发布日期、核心卖点 |
| **核心更新速览** | `#highlights` | 10 大核心亮点卡片 |
| **角色** | `#resonators` | 新角色 / 复刻 / 自选卡池 / 未来角色 / 皮肤 |
| **武器** | `#weapons` | 新专武 + 复刻武器 |
| **活动** | `#events` | 全部版本活动（限时 + 常驻） |
| **剧情 & 地图** | `#story` | 主线、支线、新区域、探索机制、BOSS、声骸 |
| **系统优化** | `#optimizations` | 全部系统级优化项目 |
| **时间线** | `#timeline` | 版本关键时间节点 |
| **来源** | `#sources` | 数据来源与免责声明 |

## 🎮 交互功能

| 功能 | 说明 |
|------|------|
| **顶部导航** | 固定导航栏，滚动时高亮当前章节 |
| **只看重点** | 一键仅显示 `emphasis: high` 的内容卡片 |
| **搜索** | 输入关键词搜索活动/角色/优化项，支持实时匹配 |
| **筛选活动类型** | 按战斗/探索/收集/签到/高难分类筛选 |
| **展开/收起详情** | 活动卡片点击"查看来源"展开数据来源信息 |
| **返回顶部** | 滚动超过 800px 显示浮动按钮 |
| **移动端适配** | 汉堡菜单 + 响应式网格布局 |

## 📝 数据维护指南

### 所有版本内容在 `data.js` 中维护

`data.js` 是项目的**唯一数据源**，页面通过 `script.js` 从中读取并渲染。更新版本内容只需编辑此文件。

### 数据规则（严格遵守）

1. **每条内容必须有 `source` 字段**，标注信息来源
2. **不确定的信息加 `status: "待官方确认"`**，页面会以视觉方式区分
3. **来源不足时不要写死具体数值、日期、角色定位**，以占位文本表示
4. **不要从外部下载图片**，所有媒体资源通过链接引用
5. 不确定的内容标记为 `status: "待官方确认"`

### 版本更新流程

1. 编辑 `data.js`，更新版本相关信息
2. 每条数据填写 `source`（来源 URL/描述）
3. 不确认的填写 `status: "待官方确认"`
4. 刷新浏览器查看效果
5. 无需修改 HTML / CSS / JS 文件

### 数据结构速览

```javascript
VERSION_DATA = {
  version: { number, title, titleEn, releaseDate, keySellingPoints, ... },
  keyHighlights: [{ id, category, icon, title, desc, emphasis, tags, source }],
  resonators: {
    newCharacters: [{ name, rarity, attribute, weapon, role, source, ... }],
    rerunCharacters: [...],
    starpathReverbs: {...},
    futureCharacters: [...],
    summerSkins: [...]
  },
  weapons: { newWeapons: [...], rerunWeapons: [...] },
  events: [{ id, name, type, category, duration, description, tags, source }],
  storyAndMap: { mainStory: [...], newRegion: {...}, ... },
  optimizations: [{ id, category, title, description, impact, source }],
  timeline: [{ date, event, description, status }],
  sources: { official: [...], thirdParty: [...], disclaimer }
}
```

## 🎨 视觉风格

- **深色科幻 UI** — 暗色背景 + 蓝青色强调
- **游戏资讯专题页风格** — 渐隐边框、发光效果、半透明卡片
- **响应式布局** — 桌面多列网格 → 移动端单列堆叠
- **组件** — 卡片、时间线、标签（Chip）、可折叠面板

## 📚 数据来源

- [鸣潮英文官网 News](https://wutheringwaves.kurogames.com/en/main/news) — 官方新闻
- [鸣潮英文官网首页](https://wutheringwaves.kurogames.com/en/main) — 版本信息
- [鸣潮官方 YouTube](https://www.youtube.com/@WutheringWaves3352) — 版本 PV、角色演示
- Game8、Gematsu、Noisy Pixel、TapTap 等第三方资讯站（完整列表见页面 Sources 区）

## ⚠️ 免责声明

本页面为玩家整理的非官方版本前瞻内容。所有信息以鸣潮官方渠道（官网、游戏内公告、官方社交媒体）的最终公布为准。标注「待官方确认」的内容基于非官方渠道信息，仅供参考。

## 📄 License

MIT — 仅供学习与信息参考用途。鸣潮相关商标与内容版权归 Kuro Games 所有。
