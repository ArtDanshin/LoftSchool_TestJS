;(function () {

	var elems = document.querySelectorAll('.arcad-list-item__title');

	for (var i = 0; i < elems.length; i++) {
		(function(i) {
			elems[i].addEventListener('click', function(){
				var classTitle = elems[i].classList,
					classListItems = elems[i].nextElementSibling.classList;

				if (classTitle.contains('active')) {
					classTitle.remove('active');
					classListItems.add('hidden');
				} else {
					classTitle.add('active');
					classListItems.remove('hidden');
				}
			})
		})(i)
	}

})();