const minimumCount = 1000;
const maximumCount = 1999;
const getOnlineCount = () => Math.floor(Math.random() * (maximumCount - minimumCount + 1)) + minimumCount;
const countElement = document.querySelector('#claimed-count');

countElement.textContent = '1,846';

setInterval(() => {
	countElement.textContent = getOnlineCount().toLocaleString('en-US');
}, 9000);
