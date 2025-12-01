const mathfont_list = {
    "FontDrop": "Drag and Drop Font",
    "Default":  "Default fonts (local only)",
    "STIXTwo": "STIX Two Math",
    "NewComputerModern": "New Computer Modern Math",
    "NewComputerModernSans": "New Computer Modern Sans Math",
    "LatinModern": "Latin Modern Math",
    "Cambria": "Cambria Math (local only)",
    "Asana": "Asana Math",
    "DejaVu": "DejaVu Math TeX Gyre",
    "FiraMath": "Fira Math",
    "Garamond": "Garamond Math",
    "GFSNeoHellenic": "GFS NeoHellenic Math",
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
    "Euler": "Euler Math",
};


let basecss="https://mathfonts.github.io/";
if(document.location.href.includes("onts.github.io")) {
    basecss="";
}

const urlP = new URLSearchParams(document.location.search);

let fontsP=urlP.get("f");
if(!fontsP) fontsP=getCookie("mathfonts-fonts");

let widthP=urlP.get("w");
if(!widthP) widthP=getCookie("mathfonts-width");

let layoutP=urlP.get("l");
if(!layoutP) laoutP=getCookie("mathfonts-layout");

let ltxP=urlP.get("ltx");
if(!ltxP) ltxP=getCookie("mathfonts-ltx");

let amP=urlP.get("am");
if(!amP) amP=getCookie("mathfonts-am");

let mmlP=urlP.get("mml");
if(!mmlP) mmlP=getCookie("mathfonts-mml");

function fontShort(n){
    return n.substring(0,2)+n.substring(2).replace(/[a-z]/g,'');
}

function updateURL () {
    let newl="?";
    if(typeof minwin == 'object') newl=newl+"w=" + minwin.value + "&";
    let hlayout=document.getElementById("lh");
    if (hlayout) newl=newl+"l="+(hlayout.checked?"h":"v")+"&";
    newl=newl+"f=,";
    for (let value in mathfont_list) {
	let inp = document.getElementById("select"+value);
	newl=newl +(inp && inp.checked ? fontShort(value)+"," :"");
    }
    const l= document.getElementById("ltxedit");
    const am = document.getElementById("asciimathedit");
    const mml = document.getElementById("mmledit");
    if(l) newl=newl + "&ltx=" + LZString.compressToEncodedURIComponent(l.value);
    if(am) newl=newl + "&am=" + LZString.compressToEncodedURIComponent(am.value);
    if(mml) newl=newl + "&mml=" + LZString.compressToEncodedURIComponent(mml.value);
    // copy to clipboard
    var nn=document.createElement("textarea");
    nn.value=document.location.protocol + "//" + document.location.host + document.location.pathname + newl;
    document.body.appendChild(nn);
    nn.select();
    document.execCommand("copy");
    document.body.removeChild(nn);
    // update
    document.location.search = newl;
    }

function updateCookies () {
    if(typeof minwin == 'object') createCookie("mathfonts-width",minwin.value);
    let hlayout=document.getElementById("lh");
    if (hlayout) createCookie("mathfonts-layout",(hlayout.checked?"h":"v"));
    let f=",";
    for (let value in mathfont_list) {
	let inp = document.getElementById("select"+value);
	if(inp && inp.checked)f=f + fontShort(value)+",";
    }
    createCookie("mathfonts-fonts",f);
    const l= document.getElementById("ltxedit");
    const am = document.getElementById("asciimathedit");
    const mml = document.getElementById("mmledit");
    if(l)   createCookie("mathfonts-ltx",LZString.compressToEncodedURIComponent(l.value));
    if(am)  createCookie("mathfonts-am", LZString.compressToEncodedURIComponent(am.value));
    if(mml) createCookie("mathfonts-mml",LZString.compressToEncodedURIComponent(mml.value));
    }

function deleteCookies () {
    if(typeof minwin == 'object') deleteCookie("mathfonts-width");
    deleteCookie("mathfonts-fonts");
    const l= document.getElementById("ltxedit");
    const am = document.getElementById("asciimathedit");
    const mml = document.getElementById("mmledit");
    if(l)   deleteCookie("mathfonts-ltx");
    if(am)  deleteCookie("mathfonts-am");
    if(mml) deleteCookie("mathfonts-mml");
    window.location.search="";
    }

document.addEventListener("DOMContentLoaded", () => {

    let sty = document.createElement("style");
    for (let value in mathfont_list) {
	if(value != "Default" && value !="FontDrop" ){
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

      
	const hdtr = document.getElementById('hdtr');
	const flow = document.getElementById('flow');
	
	if(flow) {
	    let mmlex="<math display=\"block\"><mfrac><mn>1</mn><mi>x</mi></mfrac><mo>+</mo><msqrt><mi>y</mi></msqrt></math>";
	    if(mmlP) mmlex=LZString.decompressFromEncodedURIComponent(mmlP);
	    let i = 0;
	    for (let value in mathfont_list) {
		let tb = document.createElement("table");
		let sty="";
		tb.setAttribute("class","mml");
		if ((fontsP && !fontsP.includes(","+fontShort(value)+",")) || ((!fontsP && value=="FontDrop"))) {
		    sty=" style=\"display:none\"";
		}
		tb.innerHTML=`<table><thead><tr><th class="${value}"${sty}>${mathfont_list[value]}</th></tr></thead><tbody><tr><td class="mml ${value}"${sty}>${mmlex}</td></tr></tbody><table>`;
		flow.appendChild(tb);
		i=i+1;
	    }
	}
	
	if (hdtr) {
	    let i = 0;
	    let hdcols=hdtr.children.length;
	    for (let value in mathfont_list) {
		let th = document.createElement("th");
		th.setAttribute("class",value);
		th.textContent=mathfont_list[value];
		if ((fontsP && !fontsP.includes(","+fontShort(value)+",")) || ((!fontsP && value=="FontDrop"))) {
		    th.style.display="none";
		}
		hdtr.appendChild(th);
		i=i+1;
	    }
	    const rows = Array.from(table.querySelectorAll('tbody tr'));
	    rows.forEach(row => {
		const cells = Array.from(row.querySelectorAll('td'));
		// if there are fewer than 4 cells, skip
		if (cells.length <= hdcols) return;
		// content to replicate - assume the 4th cell holds the sample
		const templateHTML = cells[hdcols].innerHTML;
		
		// remove any cells from index 3 onward (we'll recreate them)
		for (let i = cells.length - 1; i >= hdcols; i--) {
		    cells[i].remove();
		}
		
		// append a td for each header class (in order)
		let i=0;
		for (let value in mathfont_list) {
		    const td = document.createElement('td');
		    td.className = value;
		    if ((fontsP && !fontsP.includes(","+fontShort(value)+",")) || ((!fontsP && value=="FontDrop"))) {
		    td.style.display="none";
		}
		    td.innerHTML = templateHTML;
		    row.appendChild(td);
		    i=i+1;
		};						
	    });
	}
        const fontsel=document.getElementById("fontselector");
	if(fontsP && fontsP.includes(",FoD,")) document.getElementById("fontdragr").style.display="block";
	let i = 0;
	for (let value in mathfont_list) {
	    if(value!="FontDrop" || typeof noFontDrop == 'undefined') {
		const sp = document.createElement('span');
		const t = document.createTextNode(' ');
		sp.style.whiteSpace="nowrap";
		const inp = document.createElement('input');
		inp.type="checkbox";
		inp.id="select"+value;
		if(fontsP) {
		    inp.checked=fontsP.includes(","+fontShort(value)+",");
		} else {
                    inp.checked=(value!="FontDrop");
		}
		inp.setAttribute("onChange","showColumn(this)");
		const lb = document.createElement('label');
		lb.textContent=value + "   ";
                lb.setAttribute("for","select"+value);
		sp.appendChild(inp);
		sp.appendChild(lb);
		fontsel.appendChild(sp);
		fontsel.appendChild(t);
		i=i+1;
	    }
	}
    });
    function showColumn(n) {
	const c=n.id.replace('select','*.');
	const cc=n.id.replace('select','');
	if(n.checked) {
	    if(cc=="FontDrop") {
		const fd = document.getElementById('fontdragr');
		if(fd) {
		  document.getElementById('fd-selector').value='.FontDrop, .FontDrop math';

		    fd.style.display="block";
		}
	    }
	    Array.from(document.querySelectorAll(c)).forEach(cell=> {
                cell.style.display='table-cell';
	    })} else {
		if(cc=="FontDrop") {
		    const fd = document.getElementById('fontdragr');
		    if(fd) {
			document.getElementById('fontdragr').style.display="none";
		    }
		}
	    Array.from(document.querySelectorAll(c)).forEach(cell=> {
                cell.style.display='none';
	    })}	    
    }


/*
  cookie stuff
*/



var createCookie = function(name, value) {
    var expires;
    let days=100
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=" + document.location.pathname +"; SameSite=Lax";
    //    document.cookie = name + "=" + value + expires + "; SameSite=Lax";
}

var deleteCookie = function(name) {
    document.cookie = name + "=; Expires=Thu, 01 Jan 1970 00:00:01 GMT; path=" + document.location.pathname +"; SameSite=Lax";
//    document.cookie = name + "=; Expires=Thu, 01 Jan 1970 00:00:01 GMT; SameSite=Lax";
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}


