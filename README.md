Mathematical Open Type fonts
============================

This Repository is based on a clone from Frédéric Wang's repository
https://github.com/fred-wang/MathFont

It is not a Fork in the GitHub sense, so that it may have its own
Issue tracker and other features, however it is based on a git clone
of Frédéric's repository.

The Perl scripts distributed here are unchanged from the upstream repository
and distributed under the same MPL Lisense, as described below.

Several newer fonts have been added and additional test files.

The distributed fonts are all obtained under open source licences
GUST, OFL, CC BY-NC-ND 4.0 as described in each font directory.

If the original font distribution provides WOFF2 files they have been used.
If not, WOFF2 have been generated either by the python scripts distributed here
or (for more recent additions) by converting using the fontforge font editor.

Nagwa TK is currently not distributed as WOFF2 pending clarification on
whether the licence permits that (under the no derivation clause),
However the OTF works, just is less optimised for a web context than
a WOFF2 version of the font would be.

The test files sources include convertors to MathML syntax,
distributed from this site under their original MIT licence.
[Temml](https://temml.org/)  and
[AsciiMath2ML](https://johtela.github.io/asciimath2ml).

The site also hosts a local copy (to avoid issues with https mixed content)
of the [font dragger booklet code from  Ryan Seddon](https://github.com/ryanseddon/font-dragr) (MIT Licensed).

David Carlisle and Neil Soiffer


-------

-------


Original README for https://github.com/fred-wang/MathFont

License
-------

This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, you can obtain one at
[http://mozilla.org/MPL/2.0/](http://mozilla.org/MPL/2.0/).

Description
-----------

This repository contains a script to fetch various open source OpenType fonts
with a MATH table as well as the corresponding fonts to use for the surrounding
text (if any). The fonts are converted into WOFF (with zopfli compression) and
WOFF2 formats using
[fonttools](https://github.com/behdad/fonttools), which may perform additional
optimizations. It is expected that all the transformations preserve
[Functional Equivalence](http://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL_web_fonts_and_RFNs#33301a9c)
and so Reserved Font Names remain unchanged. The fonts are finally
[packaged](https://github.com/fred-wang/MathFonts/archive/gh-pages.zip) with
some documentation, a license and a `mathfont.css` stylesheet, so that you can
easily use them on your Web site. Some proprietary fonts as well as incomplete
open source fonts are also listed but they are not provided.

Warning
-------

This page uses features that may not be supported by legacy web rendering engines:

- MathML and the OpenType MATH table.
- the WOFF2 format.
- CSS rules from the [CSS Fonts Module Level](http://dev.w3.org/csswg/css-fonts/)
  that are used by some fonts to provide old style numbers and
  calligraphic letters.

Using Math fonts on your Web site
---------------------------------

Download the
[zip archive](https://github.com/fred-wang/MathFonts/archive/gh-pages.zip).
Choose one family for your web site and place the corresponding subdirectory
somewhere.
Make your pages link to the `mathfonts.css` stylesheet. The MathML formulas
will then render with the specified font. It's good to make them consistent
with the surrounding text, especially for inline expressions. To do that,
use the `htmlmathparagraph` class, e.g. `<body class="htmlmathparagraph">`.
By default, the local fonts installed on the system will be used. For open
source fonts, Web fonts in WOFF2 or WOFF format will be used as a fallback.

Most families provide old style numbers in the text font. You can use them via
the `oldstylenumbers` class, e.g.
`<span class="oldstylenumbers">0123456789</span>`. Some of the math fonts also
provide calligraphic style for the script characters, that you can select
with the `calligraphic` class e.g.
`<math><mi mathvariant="script" class="calligraphic">A</mi></math>` or
equivalently `<math><mi class="calligraphic">𝒜</mi></math>`.

Build Instructions
------------------

You need [GNU Core Utilities](https://en.wikipedia.org/wiki/GNU_Core_Utilities)
(or equivalent on UNIX systems) as well as `grep`,
[python ≥ 3.8](https://www.python.org/), `sed`, `unzip`, `wget` and `zip`.

You must also install the following Python dependencies:
- For `compress-font.py`: [fonttools](https://github.com/fonttools/fonttools),
  [zopfli](https://github.com/fonttools/py-zopfli) and
  [brotli](https://github.com/google/brotli).
- For `CheckFont.py` and `GenerateHTMLTest.py`:
  [fontforge](https://github.com/fontforge/fontforge).

Once all the dependencies are satisfied, type the following command to build the
font directories:

    ./configure
    make

Use `make clean` to remove intermediary files and `make distclean` to remove
all the files that are not tracked on GitHub.
