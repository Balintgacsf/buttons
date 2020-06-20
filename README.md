# buttons
Animated buttons

Its working with css ```@keyframes``` and with a little javascript.

We can call the animations with:
```javascript
let elem = document.querySelector('.anim1');
elem.addEventListener('click', function() {
  elem.classList.toggle("anim-run");
  setTimeout(function() {
	  elem.classList.toggle("anim-run");
  },3000);
});
```
The setTimeout function must wait the time that the animation is running.

There are 4 types of animations. Now the names are ```anim1, anim2``` ect...

[Demo here](https://myentrance.net/velpest/gb/demok/gombok/index.html)
