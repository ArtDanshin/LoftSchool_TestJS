;(function () {

	var elems = document.querySelectorAll('.arcad-list-item__title');

	for (var i = 0; i < elems.length; i++) {
		(function(i) {
			elems[i].addEventListener('click', function(){
				if (elems[i].classList.contains('active')) {
					elems[i].classList.remove('active');
					elems[i].nextElementSibling.classList.add('hidden');
				} else {
					elems[i].classList.add('active');
					elems[i].nextElementSibling.classList.remove('hidden');
				}
			})
		})(i)
	}

})();