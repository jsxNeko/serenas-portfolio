let slideIndex = 3;
const projImg = document.querySelector('.image-holder');
const projshortDes = document.querySelector('.proj-short-des');
const projLinkDoc = document.querySelector('.project-links');
const copyEmailBtn = document.querySelector('#copyEmailBtn');
const emailInput = document.querySelector('#emailInput');

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
	`<p>Travel Landing Page</p> ${html} ${css} <p class="tc mb-3 proj-desc-info">Want to find a new space to vacation but in the comfort of your home? This is a landing page made using vanilla HTML and CSS with bootstrap. Made for simplicity.</p>`,
	`<p>Revanents Directory</p> ${react} ${css} <p class="tc mb-3 proj-desc-info">Who are all of the protagonists/antagonists in Code Vein? This directory application is built with ReactJS and the data is gathered from a JSON object I created. </p>`, 
	`<p>E-commerce for ExperTece Full-Stack (current)</p> ${react} ${css} ${js} <br><span>Database: MongoDB</span> <br><span>API: Stripe</span><br> <p class="tc mb-3 proj-desc-info">This store catalog application is built using ReactJS, allowing a user to sign-up and register. You have to sign up in order to complete a purchase. MongoDB is implemented to store users, products, and content. So far, this project has been the most exciting!</p>`,
	`<p>Face Detector</p> ${react} ${css} ${js} <br><span>Database: PostgreSQL</span> <br><span>API: Clarifai</span><br> <p class="tc mb-3 proj-desc-info">Want to know how many people were in that picture you took at the party? This application, built with ReactJS and created taking the ZTM Academy course, allows you to copy your image URL's and upload them to see the works or technology and what it can do! It captures more than 1 face.</p>` ,
	];

projshortDes.innerHTML = projDesc[0];
projImg.style.backgroundImage = `url(${projImages[0]})`;

// Open project to another tab
projImg.onclick = () => {
	window.open(projLinks[slideIndex-1], '_blank')
};

// Go to next or previous slide
const plusSlide = (n) => {
	if(slideIndex <= 4) slideIndex += n;
	if(slideIndex > 4) slideIndex = 1;
	showSlide(slideIndex);
};

const showSlide = (n) => {
	const loader = document.querySelector('.spinner-grow');
	projshortDes.scrollTop = 0;
	// if user is clicking backwards or left arrow to against the first array
	if(n < 1) {
		// create an image
		let image = new Image();
		projshortDes.innerHTML = projDesc[3];
		loader.classList.add('show');
		projImg.style.backgroundImage = '#000';

		// Listen for image loading
		image.addEventListener('load', () => {
			loader.classList.remove('show');
			projImg.style.backgroundImage = `url(${projImages[3]})`;
		})
		image.src = projImages[3];
		slideIndex = 4;
		projLinkDoc.innerHTML = `<p><a href="${projLinks[3]}" target="_blank">LIVE DEMO</a> | <a href="${githubs[3]}" target="_blank">GITHUB</a></p>`;
	} else {
		// create an image
		let image = new Image();
		projshortDes.innerHTML = projDesc[n-1];
		loader.classList.add('show');
		projImg.style.backgroundImage = '#000';

		// Listen for image loading
		image.addEventListener('load', () => {
			loader.classList.remove('show');
			projImg.style.backgroundImage = `url(${projImages[n-1]})`;
		})
		image.src = projImages[n-1];
		if(slideIndex !== 3){
			projLinkDoc.innerHTML = `<p><a href="${projLinks[slideIndex-1]}" target="_blank">LIVE DEMO</a> | <a href="${githubs[slideIndex-1]}" target="_blank">GITHUB</a></p>`;
		} else {
			projLinkDoc.innerHTML = `<p><a href="${projLinks[slideIndex-1]}" target="_blank">LIVE DEMO</a> | ${githubs[slideIndex-1]}`;
		}
	}
};

// set default slide
showSlide(slideIndex);

// scroll to contents element
const scrolltoView = (element) => {
	let scrollto = document.querySelector(element);
	scrollto.scrollIntoView({
		behavior:'smooth',
		block:'start'})
};

// reveal content when in bound
const reveal = () => {
	const reveals_content = document.querySelectorAll('.reveal');
	const animate_project_header = document.querySelector('.projectContainer h2');
	const arrowBtn = document.querySelector('.up-arrow');

	for(let i = 0; i < reveals_content.length; i++){
		const windowHeight = window.innerHeight;
		const elementTop = reveals_content[i].getBoundingClientRect().top;
		const elementVisible = 150;
		if(elementTop < windowHeight - elementVisible){
			arrowBtn.style.display = "unset";
			reveals_content[i].classList.add("active");
			animate_project_header.classList.add('animate__animated', 'animate__bounce');
		} else {
			arrowBtn.style.display = "none";
			reveals_content[i].classList.remove("active");
			animate_project_header.classList.remove('animate__animated', 'animate__bounce');
		}
	}
};

window.addEventListener('scroll', reveal);

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
});