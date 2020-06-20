document.addEventListener('DOMContentLoaded', function() {
	let button = document.querySelectorAll(".btn-vp");
	for(let i = 0; i < button.length; i++) {
		button[i].addEventListener('click', function() {
		
		if(button[i].classList.contains("anim1")) {
				button[i].classList.toggle("anim-run");
			setTimeout(function() {
				button[i].classList.toggle("anim-run");
			},3000);
		}
		
		if(button[i].classList.contains("anim2")) {
				button[i].classList.toggle("anim-run");
			setTimeout(function() {
				button[i].classList.toggle("anim-run");
			},3000);
		}
		
		if(button[i].classList.contains("anim3")) {
				button[i].classList.toggle("anim-run");
			setTimeout(function() {
				button[i].classList.toggle("anim-run");
			},1500);
		}
		
		if(button[i].classList.contains("anim4")) {
				button[i].classList.toggle("anim-run");
			setTimeout(function() {
				button[i].classList.toggle("anim-run");
			},2000);
		}
		});
	}
});
