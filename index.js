let slideIndex = 1;
const projImg = document.querySelector('.image-holder');
const projshortDes = document.querySelector('.proj-short-des');
const projImages = ['https://image.thum.io/get/maxAge/12/width/700/https://serenuy.github.io/Travel-Dreams/index.html', 'https://i.imgur.com/lU8RFd8.png', 'https://i.imgur.com/nI7aCmS.png'];
const projLinks = ['https://serenuy.github.io/Travel-Dreams/','https://serenuy.github.io/Revanents','https://expertece-draft1234.herokuapp.com/'];
const projDesc = ['Travel Landing Page<br> <em>Node.<span style="color:green;">js</span>, Vanilla <span style="color:yellow;">JS</span> + <span style="color: orange;">HTML</span> + <span style="color:blue;">CSS</span>, <span style="color:purple;">Bootstrap 5<span></em>', 'Revanents Directory<br> <em>Node.<span style="color:green;">js</span>, <span style="color:lightblue;">ReactJS</span>, Vanilla <span style="color:blue;">CSS</span></em>', 'E-commerce for ExperTece, a small business <br> <em>Node.<span style="color:green;">js</span>, <span style="color:orange;">Firebase</span>, <span style="color:plum">PHP</span>, Vanilla <span style="color:yellow;">JS</span> + <span style="color: orange;">HTML</span> + <span style="color:blue;">CSS</span>, <span style="color:purple;">Bootstrap 5</span></em>'];
projshortDes.innerHTML = projDesc[0];
projImg.style.backgroundImage = `url(${projImages[0]})`;

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

const scrolltoView = (element) => {
	let scrollto = document.querySelector(element);
	scrollto.scrollIntoView({
		behavior:'smooth',
		block:'start',
		inline:'end'})
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