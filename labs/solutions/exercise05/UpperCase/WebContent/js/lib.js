function spanWith(message, className) {
    var span = document.createElement('span');
    var textNode = document.createTextNode(message);
    span.appendChild(textNode);
    span.className = className;
    return span;	
}

function doError() {
	var span = spanWith('請填寫欄位', 'highlight');
    document.getElementById('console').appendChild(span);	
}

function requestObject() {
	if(window.XMLHttpRequest) {
		return new XMLHttpRequest();
	} else {
		try {
			return new ActiveXObject('Microsoft.XMLHTTP');
		} catch(e) {
			throw new Error('Ajax not supported');
		}
	}
}

function echoTo(console, value) {
	var request = requestObject();
	request.onreadystatechange = function() {
		if(request.readyState === 4) {
			if(request.status === 200) {
				var echo = JSON.parse(request.responseText);
				var timeSpan = spanWith(echo.echoTime, 'highlight2');
				var textSpan = spanWith(echo.echoText, 'highlight2');
				
				console.appendChild(timeSpan);
				console.appendChild(document.createElement('br'));
				console.appendChild(textSpan);
			}
		}
	};
	request.open('GET', 'UpperEcho?json&text=' + value);
	request.send(null);
}

window.onload = function () {
    document.form1.onsubmit = function () {
    	var console = document.getElementById('console');
    	console.innerHTML = '';
    	
    	var value = this.text.value;
        if (value.length === 0) {
            doError();
        } else {
        	echoTo(console, value);
        }
        return false;
    };
};
