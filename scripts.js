var o;
var oo;
var ooo;

function vicheslit() {
o = document.getElementById("PerviyKatet").value;
oo = document.getElementById("VtoroyKatet").value;
ooo = document.getElementById("gip").value;
if (ooo == 0) {
	var x = o*o+oo*oo;
	alert(Math.sqrt(x));
}else if(o == 0) {
	var x = ooo*ooo-oo*oo;
	alert(Math.sqrt(x));
}else if(oo == 0) {
	var x = ooo*ooo-o*o;
	alert(Math.sqrt(x));
}
}
