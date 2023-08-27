const defer = window.requestIdleCallback || window.requestAnimationFrame;
defer(() => {
	Array.from(document.getElementsByTagName('pre')).forEach((element) => {
		element.setAttribute('tabindex', '0');
	});
})
