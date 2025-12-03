const mathfont_list = {
    "Default":  "Default fonts (local only)",
    // Serif
    "STIXTwo": "STIX Two Math",
    "NewComputerModern": "New Computer Modern Math",
    "LatinModern": "Latin Modern Math",
    "Asana": "Asana Math",
    "TeXGyreBonum": "TeX Gyre Bonum Math",
    "TeXGyrePagella": "TeX Gyre Pagella Math",
    "TeXGyreSchola": "TeX Gyre Schola Math",
    "TeXGyreTermes": "TeX Gyre Termes Math",
    "XITS": "XITS Math",
    "KpMathRegular": "Kp Math Regular",
    "Plex": "IBM Plex Math",
    "Garamond": "Garamond Math",
    "Libertinus": "Libertinus Math",
    "Erewhon": "Erewhon Math",
    "ConcMath": "Concrete Math",
    "Euler": "Euler Math",
    "DejaVu": "DejaVu Math TeX Gyre",
    "OldStandard": "OldStandard Math",
    "XCharter": "XCharter Math",
    "Publiculum": "Publiculum",
    // Non-Free Serif
    "Cambria": "Cambria Math (local only)",
    "LucidaBright": "Lucida Bright (local only)",
    "Minion": "Minion (local only)",
    // Sans Serif
    "FiraMath": "Fira Math",
    "GFSNeoHellenic": "GFS NeoHellenic Math",
    "NewComputerModernSans": "New Computer Modern Sans Math",
    "LeteSansMath": "Lete Sans Math",
    "NotoSans": "Noto Sans Math",
    "ArsenalSans": "Arsenal Sans Math",
    "KpMathSans": "Kp Math Sans",
    "Luciole": "Luciole Math",
    // Informal
    "Pennstander": "Pennstander Math Regular",
    "NagwaTK": "Nagwa TK Math",
};

document.addEventListener("DOMContentLoaded", () => {
    let mathfont_link = document.createElement("link");
    mathfont_link.setAttribute("rel", "stylesheet");
    mathfont_link.setAttribute("type", "text/css");
    document.head.appendChild(mathfont_link);

    const mathfont_select = document.querySelector("select.mathfont");
    const mathmlonly_checkbox =
        document.querySelector("input[type='checkbox'].mathmlonly")

    const urlParams = new URLSearchParams(window.location.search);
    const fontFamily = urlParams.get('fontFamily');
    const mathFontOnly = urlParams.get('mathFontOnly') === 'true';
    function updateQueryStrings() {
        const url = new URL(window.location.href);
        if (mathfont_select) {
            if (mathfont_select.value !== "Default") {
              url.searchParams.set('fontFamily',  mathfont_select.value);
            } else {
              url.searchParams.delete('fontFamily');
            }
        }
        if (mathmlonly_checkbox) {
            if (mathmlonly_checkbox.checked) {
                url.searchParams.set('mathFontOnly', mathmlonly_checkbox.checked);
            } else {
              url.searchParams.delete('mathFontOnly');
            }
        }
        window.history.pushState(null /* state */, '' /* unused */, url.toString());
    }

    if (mathfont_select) {
        function updateMathFont()
        {
            let mathfont = mathfont_select.value;
            if (mathfont == "Default")
                mathfont_link.removeAttribute("href");
            else
                mathfont_link.setAttribute("href",
                                           `${(document.location.href.includes("mozilla") ? ".." : ".")}/${mathfont}/mathfonts.css`);
	document.getElementById("mathcss").innerHTML=
       ".htmlmathparagraph, mtext {font-family: " + mathfont_list[mathfont] + ";}\n"
   + "math {font-family: " + mathfont_list[mathfont] + ";}";
            updateQueryStrings();
        }

        for (let value in mathfont_list) {
            let option = document.createElement("option");
            option.value = value;
            option.innerText = mathfont_list[value];
            if (value === fontFamily) {
              option.selected = true;
            }
            mathfont_select.appendChild(option);
        }
        updateMathFont();
        mathfont_select.addEventListener("change", updateMathFont);
    }

    if (mathmlonly_checkbox) {
        function updateCheckBox()
        {
            if (mathmlonly_checkbox.checked)
                document.body.removeAttribute("class");
            else
                document.body.setAttribute("class", "htmlmathparagraph");
            updateQueryStrings();
        }
        mathmlonly_checkbox.checked = mathFontOnly;
        updateCheckBox();
        mathmlonly_checkbox.addEventListener("change", updateCheckBox);
    }
});
