let slideIndex = 1;
const projImg = document.querySelector('.image-holder');
const projshortDes = document.querySelector('.proj-short-des');
const projImages = ['https://image.thum.io/get/maxAge/12/width/700/https://serenuy.github.io/Travel-Dreams/index.html', 'https://i.imgur.com/lU8RFd8.png', 'https://i.imgur.com/nI7aCmS.png'];
const projLinks = ['https://serenuy.github.io/Travel-Dreams/','https://serenuy.github.io/Revanents','https://expertece-draft1234.herokuapp.com/'];
const projDesc = ['Startup Landing Page for Travelling<br> <em>Node.js, Vanilla JS + HTML + CSS, Bootstrap 5</em>', 'Revanents Directory<br> <em>Node.js, ReactJS, Vanilla CSS</em>', 'E-commerce for ExperTece <br> <em>Node.js, Firebase, PHP, Vanilla JS + HTML + CSS, Bootstrap 5</em>'];

const scrollDown = (element) => {
	let scrollto = document.querySelector(element);
	scrollto.scrollIntoView({
		behavior:'smooth',
		block:'start',
		inline:'end'})
};

const plusSlide = (n) => {
	if(slideIndex <= 3) slideIndex += n;
	if(slideIndex > 3) slideIndex = 1;
	showSlide(slideIndex);
};

const showSlide = (n) => {
	projshortDes.innerHTML = projDesc[n-1];
	projImg.style.backgroundImage = `url(${projImages[n-1]})`;	
};

projImg.onclick = () => {
	window.open(projLinks[slideIndex-1], '_blank')
};

const reveal = () => {
	const reveals = document.querySelectorAll('.reveal');
	for(let i = 0; i < reveals.length; i++){
		const windowHeight = window.innerHeight;
		const elementTop = reveals[i].getBoundingClientRect().top;
		const elementVisible = 150;
		if(elementTop < windowHeight - elementVisible){
			reveals[i].classList.add("active");
		} else {
			reveals[i].classList.remove("active");
		}
	}
}

window.addEventListener('scroll',reveal);