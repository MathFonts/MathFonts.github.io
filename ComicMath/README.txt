Comic Math 1.0.0 — комиксовый математический шрифт для Typst.

Установка (рядом с документом):
  ComicMathRelief.otf       — формулы (семейство "Comic Math Relief")
  ComicRelief-Regular.ttf   — обычный текст (семейство "Comic Relief")
  ComicRelief-Bold.ttf      — жирный текст

  typst compile --font-path . doc.typ

В документе:
  #show math.equation: set text(font: "Comic Math Relief")
  #set text(font: ("Comic Relief", "DejaVu Sans"))

В онлайн-редакторе typst.app просто загрузить .otf/.ttf в проект, папка fonts/.

Лицензия: SIL Open Font License 1.1 — см. OFL.txt.
Доноры: Fira Math, Comic Relief, Courgette, UnifrakturCook.
