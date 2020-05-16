let item = document.getElementById('search');
let field = document.getElementById('field')
open = false;

item.addEventListener('click', toggle);

function toggle() {
	if(!open) {
		field.style.display = 'inline-block';
		open = !open;
	} else if(open) {
		field.style.display = 'none';
		open = !open;
	}
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});