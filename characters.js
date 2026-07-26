"use strict";

window.ORACLE_CHARACTERS = [
  {
    char: "日", pinyin: "rì", zh: "太陽、白天", en: "sun / day",
    noteZh: "早期字形常以圓形或近方形表示太陽，內部加點或短線作為辨識特徵。",
    noteEn: "Early forms often depict the sun as a circle or rounded shape with an inner mark.",
    glyphs: {
      oracle: '<ellipse cx="50" cy="50" rx="30" ry="37"/><circle cx="50" cy="50" r="4" fill="currentColor" stroke="none"/>',
      bronze: '<rect x="24" y="18" width="52" height="64" rx="18"/><path d="M35 50H65"/>',
      seal: '<rect x="30" y="13" width="40" height="74" rx="12"/><path d="M35 50H65"/>'
    }
  },
  {
    char: "月", pinyin: "yuè", zh: "月亮、月份", en: "moon / month",
    noteZh: "早期字形多取彎月輪廓，內部短線可表示月面紋理。",
    noteEn: "Early forms often follow the outline of a crescent moon with interior marks.",
    glyphs: {
      oracle: '<path d="M68 17C39 25 27 48 36 72C42 87 56 88 70 80C54 68 50 39 68 17Z"/><path d="M43 48L60 45"/>',
      bronze: '<path d="M67 15C36 24 25 49 34 76C40 91 57 88 70 79C55 67 50 37 67 15Z"/><path d="M42 43L59 40M43 61L60 58"/>',
      seal: '<path d="M35 15C55 18 68 31 68 50V85M35 15V85M35 44H62M35 66H62"/>'
    }
  },
  {
    char: "山", pinyin: "shān", zh: "山、山脈", en: "mountain",
    noteZh: "字形像高低不同的山峰，中峰通常較高。",
    noteEn: "The form resembles a range of peaks, usually with a taller central peak.",
    glyphs: {
      oracle: '<path d="M18 78V56L34 35V78M34 78V20L53 43V78M53 78V48L72 31V78M14 78H80"/>',
      bronze: '<path d="M18 78V54L35 34V78M35 78V18L53 42V78M53 78V50L73 29V78M14 78H82"/>',
      seal: '<path d="M24 74V48M24 74H76M50 74V18M76 74V42"/>'
    }
  },
  {
    char: "水", pinyin: "shuǐ", zh: "水、液體", en: "water",
    noteZh: "中央主流向下，兩側像分流或水花。",
    noteEn: "A central stream descends while side strokes suggest branching water or splashes.",
    glyphs: {
      oracle: '<path d="M50 12V88M50 37L27 25M50 49L22 62M50 38L73 25M50 55L79 72"/>',
      bronze: '<path d="M50 12C48 35 48 62 50 88M48 37C38 34 29 27 23 20M48 51C36 55 27 64 20 75M52 37C63 34 72 27 79 20M52 56C64 61 73 70 80 80"/>',
      seal: '<path d="M51 13V88M49 34L29 22M49 49L23 63M53 34L72 22M53 54L78 72"/>'
    }
  },
  {
    char: "火", pinyin: "huǒ", zh: "火、火焰", en: "fire / flame",
    noteZh: "中心像火焰主體，左右短筆像向外跳動的火舌。",
    noteEn: "The central form suggests a flame, with side strokes like sparks or tongues of fire.",
    glyphs: {
      oracle: '<path d="M50 15C43 34 44 47 50 55C56 47 57 34 50 15Z"/><path d="M39 45C31 58 31 72 38 84M61 45C69 58 69 72 62 84M50 55V88"/>',
      bronze: '<path d="M50 14C39 35 42 50 50 59C58 50 61 35 50 14Z"/><path d="M37 42C27 57 29 74 39 86M63 42C73 57 71 74 61 86M50 58V89"/>',
      seal: '<path d="M50 15V84M49 44L32 26M51 44L69 26M47 55L27 78M53 55L74 78"/>'
    }
  },
  {
    char: "木", pinyin: "mù", zh: "樹木、木材", en: "tree / wood",
    noteZh: "中央是樹幹，上方為枝條，下方為根部。",
    noteEn: "A central trunk is joined by upper branches and lower roots.",
    glyphs: {
      oracle: '<path d="M50 12V88M50 34L26 18M50 34L74 18M50 58L27 82M50 58L74 82"/>',
      bronze: '<path d="M50 10V90M50 34C40 31 31 25 23 17M50 34C60 31 69 25 77 17M50 60C40 66 31 75 23 84M50 60C60 66 69 75 77 84"/>',
      seal: '<path d="M50 12V88M25 38H75M50 55L28 82M50 55L73 82"/>'
    }
  },
  {
    char: "人", pinyin: "rén", zh: "人、人類", en: "person / human",
    noteZh: "早期字形像側身站立或向前行走的人。",
    noteEn: "Early forms resemble a person standing in profile or moving forward.",
    glyphs: {
      oracle: '<path d="M58 14C51 31 47 45 45 58M45 58L26 86M45 58L69 83M49 35L72 46"/>',
      bronze: '<path d="M57 13C49 32 45 46 44 59M44 59C37 69 30 78 24 87M44 59C54 68 63 76 72 84M48 35C57 39 65 43 74 47"/>',
      seal: '<path d="M58 14C52 35 45 58 26 86M47 54C55 66 64 77 75 86"/>'
    }
  },
  {
    char: "口", pinyin: "kǒu", zh: "嘴、開口", en: "mouth / opening",
    noteZh: "以方形或圓角方框表示張開的口。",
    noteEn: "A square or rounded enclosure represents an open mouth.",
    glyphs: {
      oracle: '<path d="M25 31L73 25L77 70L29 76Z"/>',
      bronze: '<rect x="24" y="25" width="53" height="50" rx="8"/>',
      seal: '<rect x="29" y="22" width="42" height="56" rx="5"/>'
    }
  },
  {
    char: "目", pinyin: "mù", zh: "眼睛、觀看", en: "eye / sight",
    noteZh: "早期字形像一隻橫放的眼睛，後來逐漸轉為直向結構。",
    noteEn: "Early forms resemble a horizontal eye and later become vertically structured.",
    glyphs: {
      oracle: '<path d="M15 50C28 30 72 30 85 50C72 70 28 70 15 50Z"/><circle cx="50" cy="50" r="8"/>',
      bronze: '<path d="M17 50C31 29 69 29 83 50C69 71 31 71 17 50Z"/><path d="M50 38V62"/>',
      seal: '<rect x="31" y="14" width="38" height="72" rx="8"/><path d="M33 39H67M33 62H67"/>'
    }
  },
  {
    char: "田", pinyin: "tián", zh: "田地、農田", en: "field / farmland",
    noteZh: "外框代表田界，內部交叉線表示分隔的田畦。",
    noteEn: "An enclosure marks the field boundary while crossing lines divide the plots.",
    glyphs: {
      oracle: '<path d="M20 23L78 20L80 78L22 81Z"/><path d="M50 22V79M21 51H79"/>',
      bronze: '<rect x="21" y="21" width="58" height="58" rx="7"/><path d="M50 22V78M22 50H78"/>',
      seal: '<rect x="27" y="16" width="46" height="68" rx="5"/><path d="M50 17V83M28 50H72"/>'
    }
  }
];
