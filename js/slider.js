var x = 1;
function slika(f){
	ukloni();
	if(f == 1){
		document.getElementById('progress1').style.color = "#f99e27";
		document.getElementById('slikaslider').setAttribute('src','img/nature1.jpg');
		x=1;
	}
	if(f == 2){
		document.getElementById('progress2').style.color = "#f99e27";
		document.getElementById('slikaslider').setAttribute('src','img/nature2.jpg');
		x=2;
	}
	if(f == 3){
		document.getElementById('progress3').style.color = "#f99e27";
		document.getElementById('slikaslider').setAttribute('src','img/nature3.jpg');
		x=3;
	}
	if(f == 4){
		document.getElementById('progress4').style.color = "#f99e27";
		document.getElementById('slikaslider').setAttribute('src','img/nature4.jpg');
		x=4;
	}
}
function ukloni(){
	document.getElementById('progress1').style.color = "#000";
	document.getElementById('progress2').style.color = "#000";
	document.getElementById('progress3').style.color = "#000";
	document.getElementById('progress4').style.color = "#000";
}
function next(){
	switch(x){
		case 1: slika(2); x=2;break;
		case 2: slika(3); x=3;break;
		case 3: slika(4); x=4;break;
		case 4: slika(1); x=1;break;
	}

}
function prev(){
	switch(x){
		case 1: slika(4); x=4;break;
		case 2: slika(1); x=1;break;
		case 3: slika(2); x=2;break;
		case 4: slika(3); x=3;break;
	}
}