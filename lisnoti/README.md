Lisnoti is a proportional sans serif font for text and mathematics, in regular, italic, bold and bold italic. It is derived from Google's Noto fonts but amendments for clarity and consistency. Capital I, small l and the digit 1 are always distinct, as are capital O and the digit 0, and the set operators, radicals and n-ary operators have been redrawn or rescaled to match one another.

Every style carries an OpenType MATH table, so unicode-math can use Lisnoti for equations as well as text under LuaLaTeX or XeLaTeX, with bold maths and chancery calligraphic capitals. The fonts cover Latin, Greek, Cyrillic and Devanagari, the Unicode mathematical alphanumerics, arrows, and every currency sign in Unicode.

The fonts are licensed under the SIL Open Font License.

# Lisnoti

Version 2.004 (2026-09-29)

Lisnoti is a proportional sans serif font for everyday use,
with clear, unambiguous letters and coverage of Latin, Greek, Cyrillic and Devanagari character sets.
It is particularly strong for maths, science and actuarial work, including typesetting equations,
and comes in regular, *italic*, **bold** and ***bold italic***.

Lisnoti is derived from Google’s Noto fonts,
including Khaled Hosny’s 2024 redesign of Noto Sans Math,
but with numerous amendments
to improve clarity and consistency. In particular, capital I, small l and
the number 1 are always distinct, as are capital O and the number 0.

The font includes OpenType `MATH` tables, which means
`unicode-math` can use Lisnoti for equations
as well as text.

## Package contents

| File                     | Contents                               |
|--------------------------|----------------------------------------|
| `Lisnoti-Regular.ttf`    | Font file – regular                    |
| `Lisnoti-Italic.ttf`     | Font file – italic                     |
| `Lisnoti-Bold.ttf`       | Font file – bold                       |
| `Lisnoti-BoldItalic.ttf` | Font file – bold italic                |
| `lisnoti.pdf`            | Documentation and specimen             |
| `lisnoti.tex`            | Source for `lisnoti.pdf`               |
| `Licence.txt`            | SIL Open Font License and font notices |
| `README.md`              | This file                              |

## Usage

Lisnoti needs LuaLaTeX or XeLaTeX.

```latex
\usepackage{unicode-math}
\setmainfont{Lisnoti}
\setsansfont{Lisnoti}
\setmathfont{Lisnoti}
\setmathfont{Lisnoti Bold}[version=bold]
\setmathfont{Lisnoti}[range=\mathcal, StylisticSet=1]
```

If you use `amsmath`, load it *before* the above.

The `[version=bold]` line makes
`\boldmath` and `\mathversion{bold}` work.

The `[range=\mathcal, StylisticSet=1]` line ensures
standard behaviour for `\mathcal`, i.e. calligraphic capitals.

The order matters – the `\mathcal, StylisticSet` line must follow the bold version line.

See `lisnoti.pdf` for a specimen and more detail.

## Licence

Lisnoti is licensed under the SIL Open Font License, version 1.1, with the
Reserved Font Name 'Lisnoti'. See `Licence.txt`.

## Author and contact

Tim Gordon.

- Website: <https://lisnoti.com>
- Repository: <https://github.com/Lisnoti/Lisnoti>
- Comments and questions: <https://github.com/Lisnoti/Lisnoti/discussions>
