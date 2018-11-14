/*
//Exercise 2 & 3
window.onload = function () {
	document.form1.onsubmit = function () {
		if (this.text.value.length === 0) {
			alert("Please input text !!");
			//DOM Level 1 API
			document.getElementById('console').innerHTML = '<span class="highlight">請填寫欄位</span>';
			return false;
		}
	};
};
*/

/*
//Exercise 4
window.onload = function () {
	document.form1.onsubmit = function () {
		if (this.text.value.length === 0) {
			var spanElement = document.createElement('span');
			spanElement.className = 'highlight';
			
			var textNode = document.createTextNode('這是必填欄位');
			spanElement.appendChild(textNode);
			
			document.getElementById('console').appendChild(spanElement);
			return false;
		}
	};
};
*/

//Exercise 5
function spanContent(showMsg, cssClass) {
	var spanElement = document.createElement('span');
	var textNode = document.createTextNode(showMsg);
	spanElement.className = cssClass;
	spanElement.appendChild(textNode);
	
	return spanElement;
}

function showMsg(text, cssClassName) {
	var span = spanContent (text, cssClassName);
	document.getElementById('console').appendChild(span);
}

function getRequestObject() {
	if (window.XMLHttpRequest) {
		return new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		return new ActiveXObject('Microsoft.XMLHTTP');
	}
}

function ajax(console, text) {
	var requestObj = getRequestObject(); 
	requestObj.onreadystatechange = function () {
		if (requestObj.readyState === 4) {	//有 response
			if (requestObj.status === 200) {	//成功的回應
				var textJSON = JSON.parse(requestObj.responseText);
				var echoTime = spanContent (textJSON.echoTime, 'highlight2');
				var echoText = spanContent (textJSON.echoText, 'highlight2');
				var brTag = document.createElement('br');
				console.appendChild(echoTime);
				console.appendChild(brTag);
				console.appendChild(echoText);
			}
		}
	};
	
	requestObj.open('GET', 'UpperEcho?json&text='+text);
	requestObj.send(null);
}

window.onload = function () {
	document.form1.onsubmit = function () {
		var consoleElement = document.getElementById('console');
		consoleElement.innerHTML = ''
		if (this.text.value.length === 0) {
			showMsg('這是必填欄位, 請輸入', 'highlight');
		} else {
			ajax(consoleElement, this.text.value);
		}
		return false;
	};
};

