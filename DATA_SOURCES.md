# Data Sources and Design Notes — V1.0

## Historical script sequence

The learning flow follows this simplified teaching sequence:

`Oracle Bone Script → Bronze Script → Small Seal Script → Clerical Script → Regular Script`

This is a learning-oriented sequence. Actual historical development is more complex, regional variation exists, and many ancient forms do not map one-to-one to a single modern standard character.

## Reference sources

1. Unicode / ISO working documents on Oracle Bone Script and Small Seal Script encoding:
   - https://www.unicode.org/L2/L2015/15280-n4687-oracle-bone.pdf
   - https://www.unicode.org/L2/L2015/15281-n4688-small-seal.pdf
   - https://www.unicode.org/wg2/docs/n5344R-SmallSealProposal.pdf

2. Unicode Roadmap to the Tertiary Ideographic Plane:
   - https://www.unicode.org/roadmaps/tip/

3. Taiwan Ministry of Education, Dictionary of Chinese Character Variants:
   - https://dict.variants.moe.edu.tw/

## V1.0 glyph policy

Oracle-bone, bronze, and small-seal forms in V1.0 are original beginner-friendly educational vector reconstructions drawn for this project. They are not scans, rubbings, facsimiles, or copied historical glyph images.

Reasons for using embedded SVG:

- Ancient script fonts are not consistently available across Windows, macOS, iOS, iPadOS, Android, or LINE in-app browsers.
- Embedded SVG avoids missing-glyph boxes and reduces dependence on external font downloads.
- The site remains self-contained and does not contact external font or analytics services.

## Limitations

- Ancient forms can vary by inscription, period, region, and scholarly interpretation.
- The English meanings are brief learning glosses, not full dictionary definitions.
- The game is for cultural education and cognitive engagement, not academic epigraphy or professional authentication.
