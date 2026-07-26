# AI-Mind Care 甲骨文尋字｜Oracle Bone Character Quest V1.0

**副標題 / Subheading**  
穿越三千年的文字密碼  
Unlocking the Script of 3,000 Years

## V1.0 功能

- 「看字尋形」：看現代漢字，找出相對應的甲骨文字形
- 「看形猜字」：看甲骨文字形，找出相對應的現代漢字
- 5 題或 10 題
- 不限時、15 秒或 30 秒模式
- 每題答完後顯示：甲骨文 → 金文 → 小篆 → 隸書 → 楷書 → 中文意思 → 英文翻譯
- 中英雙語、中文、English 三種介面
- 頂端 Home 按鈕
- 中英文 User Guide
- 文字探索館
- 手機、平板與電腦響應式版面
- 不登入、不上傳、不追蹤、不使用分析工具

## GitHub Pages 所需檔案

請將以下檔案放在同一個 repository 根目錄：

- `index.html`
- `characters.js`
- `README.md`
- `DATA_SOURCES.md`
- `DEPLOY-V1.0.txt`
- `TEST-REPORT-V1.0.md`

`index.html` 會載入 `characters.js`，因此不可只上傳 `index.html`。

## Home 按鈕

目前連結：

```text
https://www.hyloveclub.com
```

如需更改，請在 `index.html` 搜尋該網址並替換。

## 新增文字

在 `characters.js` 的 `window.ORACLE_CHARACTERS` 陣列中加入一個新物件。每個字包含：

- `char`：楷書字
- `pinyin`：拼音
- `zh`：中文意思
- `en`：英文意思
- `noteZh`、`noteEn`：字形說明
- `glyphs.oracle`：甲骨文 SVG 內部元素
- `glyphs.bronze`：金文 SVG 內部元素
- `glyphs.seal`：小篆 SVG 內部元素

隸書與楷書由系統字型呈現；古文字以內嵌 SVG 呈現，避免 Apple、Android 或不同瀏覽器因缺少特殊字型而顯示方框。

## 重要說明

V1.0 使用適合初學者辨識的教育性向量重構。歷史上的古文字會因時代、器物、書寫者與拓片不同而有多種字形。本遊戲不作為古文字鑑定、學術釋讀或字形認證工具。

## 隱私

本版本沒有：

- 訪客計數器
- Cookie 分析
- Google Analytics
- 外部追蹤工具
- 個人資料上傳
