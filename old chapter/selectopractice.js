var main = function () {
	"use strict;"
	var i;
	//$("h2.important").css("color","red");
	//$(".relevant p:first").css("color","red");
	//$(".relevant p:eq(2)").css("color","red");
	//$(".relevant p").css("color","red");
	//$("div.relevant p").css("color","red");
	
	for (i=1; i<=5;i=i+2)
	{
		console.log(i);
		//var a="div.relevant p:eq("+i+");";
		//window.alert($a);
		$("div.relevant p:eq("+i+")").css("color","red");
	}
	
	//$("div.relevant p:last").css("color","red");
	//$("div.relevant p:gt(3)").css("color","red");
	//$("div.relevant p:not(.a)").css("color","red");
};
$(document).ready(main);