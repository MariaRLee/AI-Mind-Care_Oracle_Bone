# Compatibility Test Report — V1.0

## Automated browser checks

The V1.0 interface and core interactions were tested in headless Chromium at these viewport sizes:

| Profile | Viewport | Result |
|---|---:|---|
| Desktop | 1440 × 900 | Passed |
| iPhone-size mobile | 390 × 844 | Passed |
| Android-size mobile | 412 × 915 | Passed |
| Tablet / iPad-size | 768 × 1024 | Passed |

## Functions checked

- Page loads without JavaScript console errors
- No page-level horizontal overflow
- Home button is visible
- User Guide opens and closes
- Game starts correctly
- Four answer choices appear
- Answer selection works
- Five-stage character development appears
- Next button appears after answering
- Chinese / bilingual / English switching works
- Character Gallery detail window opens

## Compatibility design

The site uses:

- Standard HTML5, CSS, JavaScript, and inline SVG
- No external font dependency
- No framework or external JavaScript library
- Touch-friendly buttons
- Responsive layouts for phone, tablet, and desktop
- Reduced-motion support
- Keyboard-focus styling

## Recommended final-device verification after deployment

Automated testing was completed in Chromium. After uploading to GitHub Pages, final checks should also be performed on physical devices where available:

- iPhone / iPad Safari
- Android Chrome
- Windows Edge and Chrome
- macOS Safari and Chrome
- LINE in-app browser

If LINE's in-app browser displays incompletely, use Safari or Google Chrome.
