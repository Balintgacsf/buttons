document.addEventListener('DOMContentLoaded', function() {
	let gomb = document.querySelectorAll(".btn-vp");
	for(let i = 0; i < gomb.length; i++) {
		gomb[i].addEventListener('click', function() {
		
		if(gomb[i].classList.contains("anim1")) {
				gomb[i].classList.toggle("anim-fut");
			setTimeout(function() {
				gomb[i].classList.toggle("anim-fut");
			},3000);
		}
		
		if(gomb[i].classList.contains("anim2")) {
				gomb[i].classList.toggle("anim-fut");
			setTimeout(function() {
				gomb[i].classList.toggle("anim-fut");
			},3000);
		}
		
		if(gomb[i].classList.contains("anim3")) {
				gomb[i].classList.toggle("anim-fut");
			setTimeout(function() {
				gomb[i].classList.toggle("anim-fut");
			},1500);
		}
		
		if(gomb[i].classList.contains("anim4")) {
				gomb[i].classList.toggle("anim-fut");
			setTimeout(function() {
				gomb[i].classList.toggle("anim-fut");
			},2000);
		}
		});
	}
});