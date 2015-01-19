(function() {
	var client_ua = navigator.userAgent;
	if ((client_ua.indexOf('SE 2.X') != -1) && (client_ua.indexOf('Trident') != -1)) {
		var warningEl = document.getElementById('sogouExplorerTridentWarning');
		if (!!warningEl) {
			warningEl.style.display = 'block';
		}
	}
}());