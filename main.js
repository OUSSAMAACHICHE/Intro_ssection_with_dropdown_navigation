// Select element dom 
const features = document.getElementById('features'),
company = document.getElementById('company'),
company_list = document.querySelector('.company_list'),
features_list = document.querySelector('.features_list'),
bars_menu = document.querySelector('.bars_menu'),
list = document.getElementById('list'),
arrowDownF = document.querySelectorAll('#company img')[0],
arrowUpC = document.querySelectorAll('#company img')[1];







features.addEventListener('click', () => {
	features_list.classList.toggle('active');
	document.querySelectorAll('#features img')[0].classList.toggle('hidden');
	document.querySelectorAll('#features img')[1].classList.toggle('active');

});
company.addEventListener('click', function() {
	company_list.classList.toggle('active');
	arrowDownF.classList.toggle('hidden');
	arrowUpC.classList.toggle('active');
});

bars_menu.onclick = function() {
	list.classList.add('active');
	document.querySelector('.overlay').classList.add('active');
}

document.getElementById('close').addEventListener('click', () => {

	list.classList.remove('active');
	document.querySelector('.overlay').classList.remove('active');

});

// mobile menu
document.getElementById('features_mobile').onclick = function() {

	document.querySelector('img[alt="features_down"]').classList.toggle('hidden');
	document.querySelector('img[alt="features_up"]').classList.toggle('active');

	document.getElementById('fmb').classList.toggle('active');

}
document.getElementById('company_mobile').onclick = () => {

	document.querySelector('img[alt="company_down"]').classList.toggle('hidden');
	document.querySelector('img[alt="company_up"]').classList.toggle('active');

	document.getElementById('cmb').classList.toggle('active');
}