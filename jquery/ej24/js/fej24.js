var x;
x=$(document);
x.ready(inicio);

function inicio(){
	var x;
	x=$("a");
	x.each(resaltarLosES);
}

function resaltarLosES(){
	var x=$(this); 
	var url=x.attr("href");
	url=url.toLowerCase();
	if (url.indexOf(".es")!=-1){
		x.css("background","yellow");
	}
}