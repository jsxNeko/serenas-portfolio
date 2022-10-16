let slideIndex = 1;
const projImg = document.querySelector('.image-holder');
const projshortDes = document.querySelector('.proj-short-des');
const projLinkDoc = document.querySelector('.proj-links');
const githubs = ['https://github.com/serenuy/Travel-Dreams',
				'https://github.com/serenuy/Revanents',
				'GITHUB Private (Client Reasons)',
				'https://github.com/serenuy/facial-recognition-app'
				];
const projImages = ['https://i.imgur.com/1A01LBy.png', 
					'https://i.imgur.com/cy77bGV.png', 
					'https://i.imgur.com/cQCSdSe.png',
					'https://i.imgur.com/VufSHLT.png'];
const projLinks = ['https://serenuy.github.io/Travel-Dreams/',
					'https://serenuy.github.io/Revanents',
					'https://expertece-prototype.herokuapp.com/',
					'https://serenuy-facial-recognition.herokuapp.com/'];

const js = '<ion-icon class="yellow" size="large" name="logo-javascript"></ion-icon>';
const html = '<ion-icon class="blue" size="large" name="logo-html5"></ion-icon>';
const css = '<ion-icon class="orange" size="large" name="logo-css3"></ion-icon>';
const react = '<ion-icon class="white" size="large" name="logo-react"></ion-icon>';

const projDesc = [
	`<p>Travel Landing Page</p> <p class="tc mb-3" style="width:50%; display:block; margin:0 auto;">Want to find a new space to vacation but in the comfort of your home? This is a landing page made using vanilla HTML and CSS with bootstrap. Made for simplicity.</p> ${html} ${css}`,
	`<p>Revanents Directory</p> <p class="tc mb-3" style="width:50%; display:block; margin:0 auto;">Who are all of the protagonists/antagonists in Code Vein? This directory application is built with ReactJS and the data is gathered from a JSON object I created. </p> ${react} ${css}`, 
	`<p>E-commerce for ExperTece Full-Stack (current)</p>  <p class="tc mb-3" style="width:50%; display:block; margin:0 auto;">This store catalog application is built using ReactJS, allowing a user to sign-up and register. You have to sign up in order to complete a purchase. MongoDB is implemented to store users, products, and content. So far, this project has been the most exciting!</p> ${react} ${css} ${js} <br><span>Database: MongoDB</span> <br><span>API: Stripe</span>`,
	`<p>Face Detector</p> <p class="tc mb-3" style="width:50%; display:block; margin:0 auto;">Want to know how many people were in that picture you took at the party? This application, built with ReactJS, allows you to copy your image URL's and upload them to see the works or technology and what it can do! It captures more than 1 face.</p> ${react} ${css} ${js} <br><span>Database: PostgreSQL</span> <br><span>API: Clarifai</span>` ,
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
		slideIndex = 4;
		projLinkDoc.innerHTML = `<p><a href="${projLinks[3]}">LIVE DEMO</a> | <a href="${githubs[3]}">GITHUB</a></p>`;
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
		if(slideIndex !== 3){
			projLinkDoc.innerHTML = `<p><a href="${projLinks[slideIndex-1]}">LIVE DEMO</a> | <a href="${githubs[slideIndex-1]}">GITHUB</a></p>`;
		} else {
			projLinkDoc.innerHTML = `<p><a href="${projLinks[slideIndex-1]}">LIVE DEMO</a> | ${githubs[slideIndex-1]}`;
		}
	}
};

showSlide(3);

// Open project to another tab
projImg.onclick = () => {
	window.open(projLinks[slideIndex-1], '_blank')
};

const scrolltoView = (element) => {
	let scrollto = document.querySelector(element);
	scrollto.scrollIntoView({
		behavior:'smooth',
		block:'start'})
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