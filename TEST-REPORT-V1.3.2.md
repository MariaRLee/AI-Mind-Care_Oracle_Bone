# TEST REPORT V1.3.2

## Automated browser checks
Tested with Chromium at two viewport sizes.

### Desktop — 1440 × 900
- No horizontal overflow: document width = viewport width = 1440 px.
- Restart button is visible at the upper-left of the game area.
- Question and all four answer cards fit within the viewport; the lowest answer card ends at approximately 794 px.
- Five-stage completion popup displays Pinyin, Zhuyin, Chinese meaning, English meaning, time, correct percentage, score, and encouragement.
- Continue button remains visible inside the popup.

### Mobile — 390 × 844
- No horizontal overflow: document width = viewport width = 390 px.
- Restart button is visible above the question area on the left.
- Four answer cards remain in a two-column layout; the lowest answer card ends at approximately 818 px, within the 844 px viewport.
- Completion popup fits the screen and its Continue button remains visible.

## Functional checks
- Character database loaded: 30 characters.
- Five sequential stages completed successfully.
- Fireworks and result popup triggered after stage five.
- Pinyin, Zhuyin, Chinese meaning, and English meaning displayed correctly in the popup and full evolution summary.
- No JavaScript page errors were detected during the automated test.

## Final real-device recommendation
After publishing, perform a brief confirmation on iPhone Safari, Android Chrome, and the LINE in-app browser because browser toolbars and font rendering can differ by device.
