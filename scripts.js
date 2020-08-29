var o;
var oo;
var ooo;

function vicheslit() {
o = document.getElementById("PerviyKatet").value;
oo = document.getElementById("VtoroyKatet").value;
ooo = document.getElementById("gip").value;
 if (ooo == "") {
	var x = o*o+oo*oo;
	alert(Math.sqrt(x));
}else if(o == "") {
	var x = ooo*ooo-oo*oo;
	alert(Math.sqrt(x));
}else if(oo == "") {
	var x = ooo*ooo-o*o;
	alert(Math.sqrt(x));
}
}
