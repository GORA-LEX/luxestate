let stbl1 = document.getElementById("stebblock1")
let stbr1 = document.getElementById("stepbr1")

let stbl2 = document.getElementById("stebblock2")
let stbr2 = document.getElementById("stepbr2")

let stbl3 = document.getElementById("stebblock3")
let stbr3 = document.getElementById("stepbr3")

stbl1.onmouseover = function() {
    stbr1.style.borderBottom = "3px solid #fff";
}

stbl1.onmouseout = function() {
    stbr1.style.borderBottom = "3px solid #000 ";
}

stbl2.onmouseover = function() {
    stbr2.style.borderBottom = "3px solid #fff";
}

stbl2.onmouseout = function() {
    stbr2.style.borderBottom = "3px solid #000 ";
}

stbl3.onmouseover = function() {
    stbr3.style.borderBottom = "3px solid #fff";
}

stbl3.onmouseout = function() {
    stbr3.style.borderBottom = "3px solid #000 ";
}
