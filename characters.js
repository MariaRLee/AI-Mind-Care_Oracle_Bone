"use strict";

window.ORACLE_CHARACTERS = [
  {
    char: "日", pinyin: "rì", zhuyin: "ㄖˋ", zh: "太陽、白天", en: "sun / day",
    noteZh: "早期字形常以圓形或近方形表示太陽，內部加點或短線作為辨識特徵。",
    noteEn: "Early forms often depict the sun as a circle or rounded shape with an inner mark.",
    glyphs: {
      oracle: '<ellipse cx="50" cy="50" rx="30" ry="37"/><circle cx="50" cy="50" r="4" fill="currentColor" stroke="none"/>',
      bronze: '<rect x="24" y="18" width="52" height="64" rx="18"/><path d="M35 50H65"/>',
      seal: '<rect x="30" y="13" width="40" height="74" rx="12"/><path d="M35 50H65"/>'
    }
  },
  {
    char: "月", pinyin: "yuè", zhuyin: "ㄩㄝˋ", zh: "月亮、月份", en: "moon / month",
    noteZh: "早期字形多取彎月輪廓，內部短線可表示月面紋理。",
    noteEn: "Early forms often follow the outline of a crescent moon with interior marks.",
    glyphs: {
      oracle: '<path d="M68 17C39 25 27 48 36 72C42 87 56 88 70 80C54 68 50 39 68 17Z"/><path d="M43 48L60 45"/>',
      bronze: '<path d="M67 15C36 24 25 49 34 76C40 91 57 88 70 79C55 67 50 37 67 15Z"/><path d="M42 43L59 40M43 61L60 58"/>',
      seal: '<path d="M35 15C55 18 68 31 68 50V85M35 15V85M35 44H62M35 66H62"/>'
    }
  },
  {
    char: "山", pinyin: "shān", zhuyin: "ㄕㄢ", zh: "山、山脈", en: "mountain",
    noteZh: "字形像高低不同的山峰，中峰通常較高。",
    noteEn: "The form resembles a range of peaks, usually with a taller central peak.",
    glyphs: {
      oracle: '<path d="M18 78V56L34 35V78M34 78V20L53 43V78M53 78V48L72 31V78M14 78H80"/>',
      bronze: '<path d="M18 78V54L35 34V78M35 78V18L53 42V78M53 78V50L73 29V78M14 78H82"/>',
      seal: '<path d="M24 74V48M24 74H76M50 74V18M76 74V42"/>'
    }
  },
  {
    char: "水", pinyin: "shuǐ", zhuyin: "ㄕㄨㄟˇ", zh: "水、液體", en: "water",
    noteZh: "中央主流向下，兩側像分流或水花。",
    noteEn: "A central stream descends while side strokes suggest branching water or splashes.",
    glyphs: {
      oracle: '<path d="M50 12V88M50 37L27 25M50 49L22 62M50 38L73 25M50 55L79 72"/>',
      bronze: '<path d="M50 12C48 35 48 62 50 88M48 37C38 34 29 27 23 20M48 51C36 55 27 64 20 75M52 37C63 34 72 27 79 20M52 56C64 61 73 70 80 80"/>',
      seal: '<path d="M51 13V88M49 34L29 22M49 49L23 63M53 34L72 22M53 54L78 72"/>'
    }
  },
  {
    char: "火", pinyin: "huǒ", zhuyin: "ㄏㄨㄛˇ", zh: "火、火焰", en: "fire / flame",
    noteZh: "中心像火焰主體，左右短筆像向外跳動的火舌。",
    noteEn: "The central form suggests a flame, with side strokes like sparks or tongues of fire.",
    glyphs: {
      oracle: '<path d="M50 15C43 34 44 47 50 55C56 47 57 34 50 15Z"/><path d="M39 45C31 58 31 72 38 84M61 45C69 58 69 72 62 84M50 55V88"/>',
      bronze: '<path d="M50 14C39 35 42 50 50 59C58 50 61 35 50 14Z"/><path d="M37 42C27 57 29 74 39 86M63 42C73 57 71 74 61 86M50 58V89"/>',
      seal: '<path d="M50 15V84M49 44L32 26M51 44L69 26M47 55L27 78M53 55L74 78"/>'
    }
  },
  {
    char: "木", pinyin: "mù", zhuyin: "ㄇㄨˋ", zh: "樹木、木材", en: "tree / wood",
    noteZh: "中央是樹幹，上方為枝條，下方為根部。",
    noteEn: "A central trunk is joined by upper branches and lower roots.",
    glyphs: {
      oracle: '<path d="M50 12V88M50 34L26 18M50 34L74 18M50 58L27 82M50 58L74 82"/>',
      bronze: '<path d="M50 10V90M50 34C40 31 31 25 23 17M50 34C60 31 69 25 77 17M50 60C40 66 31 75 23 84M50 60C60 66 69 75 77 84"/>',
      seal: '<path d="M50 12V88M25 38H75M50 55L28 82M50 55L73 82"/>'
    }
  },
  {
    char: "人", pinyin: "rén", zhuyin: "ㄖㄣˊ", zh: "人、人類", en: "person / human",
    noteZh: "早期字形像側身站立或向前行走的人。",
    noteEn: "Early forms resemble a person standing in profile or moving forward.",
    glyphs: {
      oracle: '<path d="M58 14C51 31 47 45 45 58M45 58L26 86M45 58L69 83M49 35L72 46"/>',
      bronze: '<path d="M57 13C49 32 45 46 44 59M44 59C37 69 30 78 24 87M44 59C54 68 63 76 72 84M48 35C57 39 65 43 74 47"/>',
      seal: '<path d="M58 14C52 35 45 58 26 86M47 54C55 66 64 77 75 86"/>'
    }
  },
  {
    char: "口", pinyin: "kǒu", zhuyin: "ㄎㄡˇ", zh: "嘴、開口", en: "mouth / opening",
    noteZh: "以方形或圓角方框表示張開的口。",
    noteEn: "A square or rounded enclosure represents an open mouth.",
    glyphs: {
      oracle: '<path d="M25 31L73 25L77 70L29 76Z"/>',
      bronze: '<rect x="24" y="25" width="53" height="50" rx="8"/>',
      seal: '<rect x="29" y="22" width="42" height="56" rx="5"/>'
    }
  },
  {
    char: "目", pinyin: "mù", zhuyin: "ㄇㄨˋ", zh: "眼睛、觀看", en: "eye / sight",
    noteZh: "早期字形像一隻橫放的眼睛，後來逐漸轉為直向結構。",
    noteEn: "Early forms resemble a horizontal eye and later become vertically structured.",
    glyphs: {
      oracle: '<path d="M15 50C28 30 72 30 85 50C72 70 28 70 15 50Z"/><circle cx="50" cy="50" r="8"/>',
      bronze: '<path d="M17 50C31 29 69 29 83 50C69 71 31 71 17 50Z"/><path d="M50 38V62"/>',
      seal: '<rect x="31" y="14" width="38" height="72" rx="8"/><path d="M33 39H67M33 62H67"/>'
    }
  },
  {
    char: "田", pinyin: "tián", zhuyin: "ㄊㄧㄢˊ", zh: "田地、農田", en: "field / farmland",
    noteZh: "外框代表田界，內部交叉線表示分隔的田畦。",
    noteEn: "An enclosure marks the field boundary while crossing lines divide the plots.",
    glyphs: {
      oracle: '<path d="M20 23L78 20L80 78L22 81Z"/><path d="M50 22V79M21 51H79"/>',
      bronze: '<rect x="21" y="21" width="58" height="58" rx="7"/><path d="M50 22V78M22 50H78"/>',
      seal: '<rect x="27" y="16" width="46" height="68" rx="5"/><path d="M50 17V83M28 50H72"/>'
    }
  },
  {
    char: "雨", pinyin: "yǔ", zhuyin: "ㄩˇ", zh: "雨、降水", en: "rain",
    noteZh: "上方像天空或雲層，下方短筆表示落下的雨點。",
    noteEn: "The upper form suggests the sky or clouds, while short strokes below represent falling rain.",
    glyphs: {
      oracle: '<path d="M18 28H82M25 28V54M75 28V54M25 54H75"/><path d="M33 63L29 75M45 62L43 76M57 62L59 76M69 63L73 75"/>',
      bronze: '<path d="M19 25C36 20 64 20 81 25M25 27V58M75 27V58M25 58H75"/><path d="M34 64L30 77M46 63L44 78M58 63L60 78M70 64L74 77"/>',
      seal: '<rect x="24" y="20" width="52" height="62" rx="7"/><path d="M25 38H75M50 38V80M36 48L32 58M64 48L68 58M36 65L32 75M64 65L68 75"/>'
    }
  },
  {
    char: "川", pinyin: "chuān", zhuyin: "ㄔㄨㄢ", zh: "河川、水流", en: "river / stream",
    noteZh: "三條縱向線條像並行流動的水道。",
    noteEn: "Three vertical lines resemble parallel flowing channels.",
    glyphs: {
      oracle: '<path d="M27 15C21 35 23 63 28 85M50 12C45 35 46 64 50 88M73 15C68 35 69 64 73 85"/>',
      bronze: '<path d="M25 14C17 37 21 65 29 87M50 11C42 35 44 65 51 89M75 14C66 38 69 65 74 87"/>',
      seal: '<path d="M28 14V86M50 10V90M72 14V86"/>'
    }
  },
  {
    char: "土", pinyin: "tǔ", zhuyin: "ㄊㄨˇ", zh: "土地、泥土", en: "earth / soil",
    noteZh: "直筆像土堆或植物從地面生出，橫筆表示地面。",
    noteEn: "A vertical stroke rises from a horizontal ground line, suggesting earth or growth from soil.",
    glyphs: {
      oracle: '<path d="M50 23V75M25 75H76M36 55H64"/>',
      bronze: '<path d="M50 19V79M20 79H80M32 51H68"/>',
      seal: '<path d="M50 17V82M27 48H73M20 82H80"/>'
    }
  },
  {
    char: "石", pinyin: "shí", zhuyin: "ㄕˊ", zh: "石頭、岩石", en: "stone / rock",
    noteZh: "上方像山崖，下方形體代表崖下的石塊。",
    noteEn: "The upper strokes suggest a cliff, with a stone form beneath it.",
    glyphs: {
      oracle: '<path d="M24 22H72M36 22C34 38 28 50 19 62"/><ellipse cx="57" cy="65" rx="22" ry="16"/>',
      bronze: '<path d="M22 20H76M38 20C35 38 29 50 20 63"/><path d="M39 51L72 48L75 76L40 79Z"/>',
      seal: '<path d="M22 23H77M39 23C36 40 30 53 19 66M39 49H74V80H39Z"/>'
    }
  },
  {
    char: "門", pinyin: "mén", zhuyin: "ㄇㄣˊ", zh: "門、入口", en: "door / gate",
    noteZh: "左右兩扇門板相對，中間留下可開合的通道。",
    noteEn: "Two opposing door leaves create an opening in the centre.",
    glyphs: {
      oracle: '<path d="M20 18V84M20 18H45V84M80 18V84M80 18H55V84M45 42H55"/>',
      bronze: '<path d="M19 16V86M19 16H46V86M81 16V86M81 16H54V86M45 37H55M45 62H55"/>',
      seal: '<rect x="20" y="14" width="60" height="74" rx="4"/><path d="M50 15V87M28 30H43M57 30H72M28 52H43M57 52H72"/>'
    }
  },
  {
    char: "手", pinyin: "shǒu", zhuyin: "ㄕㄡˇ", zh: "手、手掌", en: "hand",
    noteZh: "上部像手指，下部像手掌與手腕。",
    noteEn: "Upper strokes suggest fingers, while the lower form represents the palm and wrist.",
    glyphs: {
      oracle: '<path d="M48 86V42M48 42L25 27M48 42L37 16M48 42L51 12M48 42L66 18M48 42L79 31"/>',
      bronze: '<path d="M49 88V45M49 45C39 37 31 30 23 23M49 45C43 32 39 21 38 12M49 45V10M49 45C57 31 64 21 70 14M49 45C61 39 72 33 81 27"/>',
      seal: '<path d="M31 24H72M28 43H69M25 62H74M52 16V84M52 62L34 84"/>'
    }
  },
  {
    char: "足", pinyin: "zú", zhuyin: "ㄗㄨˊ", zh: "腳、足部", en: "foot",
    noteZh: "早期字形常以腿部與向前伸出的腳掌構成。",
    noteEn: "Early forms combine a leg with a forward-projecting foot.",
    glyphs: {
      oracle: '<path d="M48 17V58C48 70 42 78 31 84M48 58C58 67 67 72 79 74M36 20H61"/>',
      bronze: '<path d="M47 15V58C47 71 40 80 27 86M47 58C58 69 70 74 82 75M33 18H63M35 37H59"/>',
      seal: '<rect x="35" y="14" width="30" height="26" rx="4"/><path d="M50 40V68M50 55H72M50 68L30 84M50 68H78"/>'
    }
  },
  {
    char: "耳", pinyin: "ěr", zhuyin: "ㄦˇ", zh: "耳朵、聽覺", en: "ear / hearing",
    noteZh: "輪廓像耳廓，內部曲線表示耳內結構。",
    noteEn: "The outline resembles an ear, with inner curves suggesting its internal folds.",
    glyphs: {
      oracle: '<path d="M68 18C43 13 29 27 30 50C31 72 44 86 64 81C76 78 77 61 66 56C57 52 48 58 48 68M35 37C45 31 59 32 68 41"/>',
      bronze: '<path d="M69 16C42 10 27 27 29 52C31 76 46 89 67 82C80 77 79 58 67 53C56 49 47 57 47 70M34 34C46 27 61 30 70 40"/>',
      seal: '<path d="M33 16H68V84M33 16V84M33 37H64M33 58H64M33 80H72"/>'
    }
  },
  {
    char: "心", pinyin: "xīn", zhuyin: "ㄒㄧㄣ", zh: "心、內心", en: "heart / mind",
    noteZh: "早期字形以心臟輪廓與內部脈絡呈現。",
    noteEn: "Early forms depict the outline and inner channels of a heart.",
    glyphs: {
      oracle: '<path d="M50 82C27 69 20 48 31 31C39 19 48 29 50 39C52 29 62 19 70 31C81 48 73 69 50 82Z"/><path d="M50 42V68"/>',
      bronze: '<path d="M50 84C25 70 18 47 31 28C39 17 47 28 50 39C54 27 63 18 71 30C83 48 74 71 50 84Z"/><path d="M42 48C47 55 48 63 49 72M58 48C54 56 53 64 52 72"/>',
      seal: '<path d="M25 57C34 42 42 34 49 47C55 33 66 37 75 54M25 57C33 72 42 79 50 85M75 54C68 69 61 79 50 85M50 47V74"/>'
    }
  },
  {
    char: "女", pinyin: "nǚ", zhuyin: "ㄋㄩˇ", zh: "女子、女性", en: "woman / female",
    noteZh: "早期字形常描繪屈膝而坐、雙手交疊的人形。",
    noteEn: "Early forms often show a kneeling figure with folded or crossed arms.",
    glyphs: {
      oracle: '<circle cx="54" cy="18" r="7"/><path d="M52 26C45 40 43 56 45 70M45 44L27 55M45 44L68 55M45 70L29 84M45 70L67 82"/>',
      bronze: '<circle cx="54" cy="17" r="7"/><path d="M52 25C44 40 41 57 44 72M44 42C36 49 29 54 22 57M44 42C53 49 62 54 72 57M44 72C35 78 29 83 24 88M44 72C54 77 63 81 73 84"/>',
      seal: '<path d="M48 14C52 32 57 46 68 59M25 43H72M52 36C48 58 39 75 25 86M45 64C57 70 67 78 75 87"/>'
    }
  },
  {
    char: "子", pinyin: "zǐ", zhuyin: "ㄗˇ", zh: "孩子、子女", en: "child / son",
    noteZh: "圓形像頭部，伸展線條像雙臂，中央線條表示身體。",
    noteEn: "A rounded head, outstretched arms, and a central body line form the image of a child.",
    glyphs: {
      oracle: '<circle cx="50" cy="20" r="9"/><path d="M50 29V80M50 43L24 54M50 43L76 54M39 80H62"/>',
      bronze: '<circle cx="50" cy="19" r="9"/><path d="M50 28V82M50 42C40 48 31 52 22 55M50 42C60 48 69 52 78 55M36 82H65"/>',
      seal: '<path d="M31 23H69M50 23V82M29 48H72M50 63L34 82M50 63L67 82"/>'
    }
  },
  {
    char: "馬", pinyin: "mǎ", zhuyin: "ㄇㄚˇ", zh: "馬、馬匹", en: "horse",
    noteZh: "字形以馬頭、身體、四足與尾巴的側面輪廓組成。",
    noteEn: "The form combines a horse's head, body, legs, and tail in profile.",
    glyphs: {
      oracle: '<path d="M23 31C34 18 50 18 63 28L77 25L70 38C76 48 73 59 64 65H36C27 60 22 50 23 31Z"/><path d="M37 65L32 87M50 65L49 88M62 64L69 86M24 38L13 31M66 30L73 17"/><circle cx="58" cy="31" r="2" fill="currentColor" stroke="none"/>',
      bronze: '<path d="M21 32C34 17 52 17 66 29L80 25L72 40C78 51 73 62 63 67H35C24 61 19 49 21 32Z"/><path d="M35 67L30 88M48 67L47 89M61 66L68 87M22 39L11 31M67 29L75 15M30 28L24 17"/><circle cx="59" cy="31" r="2" fill="currentColor" stroke="none"/>',
      seal: '<path d="M29 16H68L76 29L68 41H31V70H71M31 31H67M42 70L35 87M58 70L66 87M24 20L17 36"/>'
    }
  },
  {
    char: "牛", pinyin: "niú", zhuyin: "ㄋㄧㄡˊ", zh: "牛、牛隻", en: "ox / cattle",
    noteZh: "上方大角向兩側展開，中間為頭部與身軀。",
    noteEn: "Large horns spread to both sides above a central head and body.",
    glyphs: {
      oracle: '<path d="M50 23V86M50 36L24 18M50 36L76 18M34 51H67M50 64L31 78M50 64L70 78"/>',
      bronze: '<path d="M50 20V88M50 36C39 29 30 20 23 13M50 36C61 29 70 20 77 13M31 50H70M50 63C42 71 34 78 26 84M50 63C59 71 67 78 75 84"/>',
      seal: '<path d="M25 28H75M50 15V87M31 48H70M50 64L31 82M50 64L70 82"/>'
    }
  },
  {
    char: "羊", pinyin: "yáng", zhuyin: "ㄧㄤˊ", zh: "羊、綿羊", en: "sheep / goat",
    noteZh: "上方彎曲線條像羊角，中間線條表現頭與身體。",
    noteEn: "Curved upper strokes resemble horns, with central lines forming the head and body.",
    glyphs: {
      oracle: '<path d="M50 28V87M50 30C39 30 30 22 28 13M50 30C61 30 70 22 72 13M31 45H69M27 63H73"/>',
      bronze: '<path d="M50 27V88M50 29C37 29 27 20 25 11M50 29C63 29 73 20 75 11M29 45H71M25 64H75"/>',
      seal: '<path d="M30 17L42 33M70 17L58 33M27 38H73M50 28V86M24 58H76M31 78H69"/>'
    }
  },
  {
    char: "犬", pinyin: "quǎn", zhuyin: "ㄑㄩㄢˇ", zh: "狗、犬類", en: "dog / canine",
    noteZh: "字形像側身站立的犬，尾巴向上彎曲。",
    noteEn: "The form resembles a dog in profile with a raised, curved tail.",
    glyphs: {
      oracle: '<path d="M27 42C38 28 56 28 68 39C74 45 74 57 67 64H38C28 59 24 51 27 42Z"/><path d="M39 64L32 85M60 64L67 84M69 42C80 34 83 24 78 16M29 43L17 35"/>',
      bronze: '<path d="M25 41C38 26 58 27 71 39C78 46 76 59 68 66H36C25 60 21 49 25 41Z"/><path d="M37 66L30 87M59 66L67 86M71 41C82 33 86 22 80 13M26 43L13 35"/>',
      seal: '<path d="M50 15V85M50 38L25 27M50 49L25 69M50 43L75 27M50 57L76 76"/>'
    }
  },
  {
    char: "鳥", pinyin: "niǎo", zhuyin: "ㄋㄧㄠˇ", zh: "鳥、飛禽", en: "bird",
    noteZh: "可見鳥首、喙、身體、翅膀與足部的側面形象。",
    noteEn: "The profile includes a head, beak, body, wing, and feet.",
    glyphs: {
      oracle: '<circle cx="57" cy="27" r="9"/><path d="M66 27L81 22M52 36C34 39 29 57 38 69C48 81 67 76 70 59C72 48 64 39 52 36Z"/><path d="M43 49L62 61M47 73L43 86M59 73L64 86M33 58L20 66"/>',
      bronze: '<circle cx="58" cy="25" r="9"/><path d="M67 25L83 20M53 34C33 38 27 58 38 72C49 84 69 77 72 59C74 47 65 37 53 34Z"/><path d="M42 47L64 61M47 75L42 88M60 74L66 87M33 59L18 68"/>',
      seal: '<path d="M34 20H68L77 29L69 38H39V67H70M39 45H65M47 67L41 85M60 67L67 85M30 31L20 39"/>'
    }
  },
  {
    char: "魚", pinyin: "yú", zhuyin: "ㄩˊ", zh: "魚、水中動物", en: "fish",
    noteZh: "魚頭、魚身、魚鰭與尾巴構成清楚的水中動物輪廓。",
    noteEn: "A head, body, fins, and tail create the recognisable outline of a fish.",
    glyphs: {
      oracle: '<path d="M18 50C31 31 58 29 76 46C60 68 32 70 18 50Z"/><path d="M76 46L88 30V70L76 54M45 34L39 20M45 66L39 81"/><circle cx="31" cy="47" r="3" fill="currentColor" stroke="none"/>',
      bronze: '<path d="M16 50C30 29 60 27 79 46C62 71 31 72 16 50Z"/><path d="M79 46L91 27V73L79 54M45 32L38 17M46 68L39 84"/><circle cx="30" cy="46" r="3" fill="currentColor" stroke="none"/>',
      seal: '<path d="M50 14L34 31H68L50 14ZM31 31H70V68H31Z M31 49H70M50 31V68M29 68H73M35 78L31 87M48 78L47 88M61 78L65 87"/>'
    }
  },
  {
    char: "龜", pinyin: "guī", zhuyin: "ㄍㄨㄟ", zh: "烏龜、龜類", en: "turtle",
    noteZh: "橢圓甲殼內有紋路，外側可見頭、足與尾。",
    noteEn: "An oval shell with internal markings is joined by a head, feet, and tail.",
    glyphs: {
      oracle: '<ellipse cx="50" cy="51" rx="27" ry="34"/><path d="M31 31L69 70M69 31L31 70M23 48L12 44M77 48L89 42M31 76L25 89M68 76L75 89M50 17L50 8M50 85L50 94"/>',
      bronze: '<ellipse cx="50" cy="50" rx="29" ry="36"/><path d="M30 29L70 71M70 29L30 71M21 47L9 41M79 47L92 40M31 77L24 91M69 77L77 91M50 14L50 5M50 86L50 96"/>',
      seal: '<rect x="29" y="17" width="42" height="68" rx="19"/><path d="M30 39H70M30 62H70M50 18V84M29 29L20 20M71 29L80 20M29 73L20 83M71 73L80 83"/>'
    }
  },
  {
    char: "禾", pinyin: "hé", zhuyin: "ㄏㄜˊ", zh: "禾苗、穀物", en: "grain / cereal plant",
    noteZh: "中央為莖，上方穗頭下垂，左右為葉，下方為根。",
    noteEn: "A central stalk carries a drooping grain head, leaves, and roots.",
    glyphs: {
      oracle: '<path d="M50 15V88M50 26C38 23 29 17 22 10M50 39L27 52M50 39L74 52M50 67L31 84M50 67L70 84"/>',
      bronze: '<path d="M50 13V90M50 25C37 22 27 16 19 8M50 39C41 43 33 49 25 55M50 39C60 43 68 49 76 55M50 66C42 73 35 81 28 88M50 66C59 73 66 81 73 88"/>',
      seal: '<path d="M50 13V89M24 35H75M50 35L29 18M50 55L28 80M50 55L73 80"/>'
    }
  },
  {
    char: "竹", pinyin: "zhú", zhuyin: "ㄓㄨˊ", zh: "竹子、竹類", en: "bamboo",
    noteZh: "左右兩株竹幹並立，上方葉片向外伸展。",
    noteEn: "Two bamboo stalks stand side by side with leaves spreading outward above.",
    glyphs: {
      oracle: '<path d="M35 22V88M65 22V88M35 34L18 22M35 42L19 51M65 34L82 22M65 42L81 51"/>',
      bronze: '<path d="M34 19V90M66 19V90M34 32C27 28 21 23 15 17M34 42C27 45 21 50 15 56M66 32C73 28 79 23 85 17M66 42C73 45 79 50 85 56"/>',
      seal: '<path d="M25 18L39 31M43 17L36 35M57 18L71 31M75 17L68 35M35 36V88M65 36V88"/>'
    }
  }
];
