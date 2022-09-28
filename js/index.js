let slideIndex = 1;
const projImg = document.querySelector('.image-holder');
const projshortDes = document.querySelector('.proj-short-des');
const projImages = ['https://image.thum.io/get/maxAge/12/width/700/https://serenuy.github.io/Travel-Dreams/index.html', 
					'https://i.imgur.com/lU8RFd8.png', 
					'https://i.imgur.com/nI7aCmS.png',
					'https://i.imgur.com/35SHgDv.png'];
const projLinks = ['https://serenuy.github.io/Travel-Dreams/',
					'https://serenuy.github.io/Revanents',
					'https://expertece-draft1234.herokuapp.com/',
					'https://serenuy-facial-recognition.herokuapp.com/'];
const projDesc = [
	'Travel Landing Page<br> <em>Node.<span style="color:green;">js</span>, Vanilla <span style="color:yellow;">JS</span> + <span style="color: orange;">HTML</span> + <span style="color:blue;">CSS</span>, <span style="color:purple;">Bootstrap<span></em>', 
	'Revanents Directory<br> <em>Node.<span style="color:green;">js</span>, React.<span style="color:lightblue;">js</span>, Vanilla <span style="color:blue;">CSS</span></em>', 
	'E-commerce for ExperTece, a small business <br> <em>Node.<span style="color:green;">js</span>, <span style="color:orange;">Firebase | Express.js</span>, <span style="color:plum">PHP</span>, Vanilla <span style="color:yellow;">js</span> + <span style="color: orange;">HTML</span> + <span style="color:blue;">CSS</span>, <span style="color:purple;">Bootstrap</span></em>',
	'Face Detector <br> <em>Node.<span style="color:green;">js</span></em>, <em>React<span style="color:lightblue;">.js</span></em>, <span style="color:orange;">Express.js</span>, <span style="color:lightblue;">PostgresSQL</span>' ,
	];

projshortDes.innerHTML = projDesc[0];
projImg.style.backgroundImage = `url(${projImages[0]})`;

// Go to next or previous slide
const plusSlide = (n) => {
	if(slideIndex <= 4) slideIndex += n;
	if(slideIndex > 4) slideIndex = 1;
	showSlide(slideIndex);
};

const showSlide = (n) => {
	if(n < 1) {
		let image = new Image();
		projshortDes.innerHTML = projDesc[3];
		document.querySelector('.spinner-grow').classList.add('show');
		projImg.style.backgroundImage = 'black';
		// Listen for image loading
		image.addEventListener('load', () => {
			document.querySelector('.spinner-grow').classList.remove('show');
			projImg.style.backgroundImage = `url(${projImages[3]})`;
		})
		image.src = projImages[3];
		slideIndex = 4;;
	} else {	
		let image = new Image();
		projshortDes.innerHTML = projDesc[n-1];
		document.querySelector('.spinner-grow').classList.add('show');
		projImg.style.backgroundImage = 'black';
		// Listen for image loading
		image.addEventListener('load', () => {
			document.querySelector('.spinner-grow').classList.remove('show');
			projImg.style.backgroundImage = `url(${projImages[n-1]})`;
		})
		image.src = projImages[n-1];
	}
};

// Open project to another tab
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
	const ani_header = document.querySelector('.work-desc h2');
	for(let i = 0; i < reveals.length; i++){
		const windowHeight = window.innerHeight;
		const elementTop = reveals[i].getBoundingClientRect().top;
		const elementVisible = 150;
		if(elementTop < windowHeight - elementVisible){
			reveals[i].classList.add("active");
			ani_header.classList.add('animate__animated', 'animate__bounce');
		} else {
			reveals[i].classList.remove("active");
			ani_header.classList.remove('animate__animated', 'animate__bounce');
		}
	}
}

window.addEventListener('scroll',reveal);

const copyEmailBtn = document.querySelector('#copyEmailBtn');
const emailInput = document.querySelector('#emailInput');

copyEmailBtn.addEventListener('click', () => {
	emailInput.focus();
	emailInput.select();

	try {
		let copyMsg = document.execCommand('copy');
		let msg = copyMsg ? 'successful' : 'unsuccessful';
		alertDisplay(msg, 'Successfully copied email!')
	} catch (e) {
		alertDisplay(msg, 'Could not copy something went wrong');
	}
})