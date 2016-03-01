;(function () {

	var elems = document.querySelectorAll('.arcad-list__item');

	for (var i = 0; i < elems.length; i++) {
		if (elems[i].className('active').length == []) {
			elems[i].className += " active"
		}
	}

})();