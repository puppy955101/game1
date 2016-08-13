var But = document.querySelector('.input');
var output = document.querySelector('.output');
But.addEventListener('click',
	function (e) {
	document.body.style.backgroundColor = '#' + Math.random().toString(16).slice(2,8);
}); 