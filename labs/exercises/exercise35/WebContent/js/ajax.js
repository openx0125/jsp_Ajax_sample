function param(obj) {
	var pairs = [];
	for ( var name in obj) {
		var pair = encodeURIComponent(name) + '='
				+ encodeURIComponent(obj[name]);
		pairs.push(pair.replace('/%20/g', '+'));
	}
	return pairs.join('&');
}

var xhr = window.XMLHttpRequest
		&& (window.location.protocol !== 'file:' || !window.ActiveXObject) ? function() {
	return new XMLHttpRequest();
}
		: function() {
			try {
				return new ActiveXObject('Microsoft.XMLHTTP');
			} catch (e) {
				throw new Error('XMLHttpRequest not supported');
			}
		};

// 實作 get 函式
function get(url, ok) {
	var request = xhr();
	request.onreadystatechange = function() {
		if (request.readyState === 4) {
			if (request.status === 200) {
				ok(request);
			}
		}
	};
	request.open('GET', url);
	request.send(null);
}

function post(url, params, ok) {
	var request = xhr();
	request.onreadystatechange = function() {
		if (request.readyState === 4) {
			if (request.status === 200) {
				ok(request);
			}
		}
	};
	request.open('POST', url);
	request.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded');
	request.send(params);
}
