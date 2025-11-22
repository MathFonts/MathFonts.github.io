const mathfont_list = {
    "Default":  "Default fonts (local only)",
    "STIX": "STIX Two Math",
    "NewComputerModern": "New Computer Modern Math",
    "NewComputerModernSans": "New Computer Modern Sans Math",
    "LatinModern": "Latin Modern Math",
    "Cambria": "Cambria (local only)",
    "Asana": "Asana Math",
    "DejaVu": "DejaVu Math TeX Gyre",
    "FiraMath": "Fira Math",
    "Garamond": "Garamond Math",
    "GFS_NeoHellenic": "GFS NeoHellenic Math",
    "LeteSansMath": "Lete Sans Math",
    "Libertinus": "Libertinus Math",
    "LucidaBright": "Lucida Bright (local only)",
    "Minion": "Minion (local only)",
    "TeXGyreBonum": "TeX Gyre Bonum Math",
    "TeXGyrePagella": "TeX Gyre Pagella Math",
    "TeXGyreSchola": "TeX Gyre Schola Math",
    "TeXGyreTermes": "TeX Gyre Termes Math",
    "XITS": "XITS Math",
    "NotoSans": "Noto Sans Math",
    "ArsenalSans": "Arsenal Sans Math",
    "Plex": "IBM Plex Math",
    "Erewhon": "Erewhon Math",
    "OldStandard": "OldStandard Math",
    "XCharter": "XCharter Math",
    "KpMathRegular": "Kp Math Regular",
    "KpMathSans": "Kp Math Sans",
    "Pennstander": "Pennstander Math Regular",
    "Luciole": "Luciole Math",
    "ConcMath": "Concrete Math",
    "NagwaTK": "Nagwa TK Math",
};


let basecss="https://nsoiffer.github.io/MathFonts/";
if(document.location.href.includes("MathFonts")) {
    basecss="";
}
document.addEventListener("DOMContentLoaded", () => {

    let sty = document.createElement("style");
    for (let value in mathfont_list) {
	if(value != "Default" ){
	    sty.textContent+=`\n .${value}, .${value} math \
          { font-family: '${mathfont_list[value].replace(' (local only)','')}'; }`;
	    let mathfont_link = document.createElement("link");
	    mathfont_link.setAttribute("rel", "stylesheet");
	    mathfont_link.setAttribute("type", "text/css");
	    mathfont_link.setAttribute("href", basecss + value + "/mathfonts.css");
	    document.head.appendChild(mathfont_link);

	}
    }
    document.head.appendChild(sty);
});


    // Replicate the existing 4th cell in each tbody row across all font columns
    // using the class names from the thead. Keeps first three columns unchanged.
    document.addEventListener('DOMContentLoaded', function () {
	const table = document.querySelector('table');

      if (!table) return;
      const hdtr = document.getElementById('hdtr');


      for (let value in mathfont_list) {
	       let th = document.createElement("th");
	     th.setAttribute("class",value);
th.textContent=mathfont_list[value];
hdtr.appendChild(th);
      }
  
      const rows = Array.from(table.querySelectorAll('tbody tr'));
      rows.forEach(row => {
        const cells = Array.from(row.querySelectorAll('td'));
        // if there are fewer than 4 cells, skip
        if (cells.length < 4) return;
        // content to replicate - assume the 4th cell holds the sample
        const templateHTML = cells[3].innerHTML;

        // remove any cells from index 3 onward (we'll recreate them)
        for (let i = cells.length - 1; i >= 3; i--) {
          cells[i].remove();
        }

        // append a td for each header class (in order)
     for (let value in mathfont_list) {
          const td = document.createElement('td');
          td.className = value;
          td.innerHTML = templateHTML;
          row.appendChild(td);
        };						
      });
        const fontsel=document.getElementById("fontselector");
     for (let value in mathfont_list) {
		    const sp = document.createElement('span');
		    const t = document.createTextNode(' ');
		    sp.style.whiteSpace="nowrap";
		    const inp = document.createElement('input');
		    inp.type="checkbox";
		    inp.id="select"+value;
		    inp.checked=true;
		    inp.setAttribute("onChange","showColumn(this)");
		    const lb = document.createElement('label');
		    lb.textContent=value + "   ";
                    lb.setAttribute("for","select"+value);
		    sp.appendChild(inp);
		    sp.appendChild(lb);
		    fontsel.appendChild(sp);
		    fontsel.appendChild(t);
		}
    });
    function showColumn(n) {
	const c=n.id.replace('select','*.');
	if(n.checked) {
	    Array.from(document.querySelectorAll(c)).forEach(cell=> {
                cell.style.display='table-cell';
})} else {
	    Array.from(document.querySelectorAll(c)).forEach(cell=> {
                cell.style.display='none';
	    })}	    
    }
