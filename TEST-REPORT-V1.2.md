# TEST REPORT V1.2

## Automated functional tests completed
V1.2 was tested in headless Chromium using both:
- Desktop viewport: 1440 × 1000
- Mobile viewport: 390 × 844

## Verified behavior
- Only the target character and selectable script symbols appear during play.
- Pinyin, Chinese meaning, English meaning, and option captions are hidden during selection.
- All five stages advance correctly: Oracle Bone → Bronze → Small Seal → Clerical → Regular.
- A perfect five-stage run displays 100% correct and 100/100.
- A run with one incorrect selection displays 83% correct and 96/100.
- Completing five stages opens the result pop-up and activates local canvas fireworks.
- The pop-up displays time, correct percentage, score, and encouragement.
- The Continue button closes the pop-up and advances to the next character.
- Chinese and English display modes work.
- No JavaScript page errors were detected.
- No horizontal page overflow was detected in either tested viewport.

## Compatibility targets
- Windows / macOS desktop browsers
- iPhone / iPad Safari
- Android Chrome
- Microsoft Edge / Firefox
- LINE in-app browser, with Safari/Chrome recommendation if rendering is incomplete

## Privacy
- No login
- No upload
- No analytics or external tracking
- Fireworks are rendered locally in HTML canvas

## Final deployment note
Real-device confirmation on iPhone Safari, Android Chrome, and LINE's in-app browser is still recommended after publishing through GitHub Pages.
