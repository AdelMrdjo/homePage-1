document.getElementById('home').style.color="#f99e27";
function select(f){
	remove();
	if(f == 'home'){
		document.getElementById('home').style.color="#f99e27";
	}
	if(f == 'web'){
		document.getElementById('web').style.color="#f99e27";
	}
	if(f == 'mobile'){
		document.getElementById('mobile').style.color="#f99e27";
	}
	if(f == 'it'){
		document.getElementById('it').style.color="#f99e27";
	}
	if(f == 'blog'){
		document.getElementById('blog').style.color="#f99e27";
	}
	if(f == 'about'){
		document.getElementById('about').style.color="#f99e27";
	}
	if(f == 'contact'){
		document.getElementById('contact').style.color="#f99e27";
	}
}
function remove(){
	var niz=['home','web','mobile','it','blog','about','contact'];
	for(var i=0;i<niz.length;i++){
		document.getElementById(niz[i]).style.color="#000";
		document.getElementById(niz[i]).style.borderBottom="";
		document.getElementById(niz[i]).style.paddingBottom="";
	}
}