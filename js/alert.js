const alertBox = document.querySelector('#alertBox');
const alertMsg = document.querySelector('#alertMsg');

const alertDisplay = (type, message) => {
	if(type === 'successful') {
		alertMsg.innerHTML = message;
		alertBox.classList.add('show');
		setTimeout(() => {
			alertBox.classList.remove('show');
		}, 3000)
	} else {
		alertMsg.innerHTML = 'Error: '+message;
		alertBox.classList.add('show');
		setTimeout(() => {
			alertBox.classList.remove('show');
		}, 3000)
	}
};