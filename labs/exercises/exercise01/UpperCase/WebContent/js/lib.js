function getRequestObject() {
	if (window.XMLHttpRequest) {
		return new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		return new ActiveXObject('Microsoft.XMLHTTP');
	}
}

function echoTo(console, value){
	var requestObj = getRequestObject(); 
	requestObj.onreadystatechange = function () {
		if (requestObj.readyState === 4) {	//有 response
			if (requestObj.status === 200) {	//成功的回應
				var textJSON = JSON.parse(requestObj.responseText);
				var echoTime = spanWith (textJSON.echoTime, 'highlight2');
				var echoText = spanWith (textJSON.echoText, 'highlight2');
				var brTag = document.createElement('br');
				console.appendChild(echoTime);
				console.appendChild(brTag);
				console.appendChild(echoText);
			}
		}
	};
	
	requestObj.open('GET', 'UpperEcho?json&text='+value);
	requestObj.send(null);
}

function spanWith(message, className){
	var span = document.createElement('span');
	span.className = className;
	
	var textNode = document.createTextNode(message);
	span.appendChild(textNode);
	var div = document.getElementById('console');
	div.innerHTML = '';
	return span;
}
/*
function echoTo1(console, value){
	var span = spanWith('請填寫欄位11', 'highlight2');
	document.getElementById('console').appendChild(span);
}
*/
function doError(){
	//document.getElementById('console').innerHTML = '<span class = "highlight">請填寫欄位!!</span>';
	//alert('Please input in Fields!!!!');
	var span = spanWith('請填寫欄位', 'highlight');
	document.getElementById('console').appendChild(span);
}
window.onload = function() {
	document.form1.onsubmit = function() {
		var console = document.getElementById('console');
		console.innerHTML = '';
		var value = this.text.value;
		if (value.length === 0) {
			doError();
		}else {
			echoTo(console, value);
			//echoTo1(console, value);
		}
		return false;
	};
};