function id(idName) {
	return document.getElementById(idName);
}

function proxy(dom, handler) {
    return function() {
        return handler.apply(dom, arguments);
    };
}

function bind(dom, eventName, handler) {
	if(dom.addEventListener) {
	    dom.addEventListener(eventName, handler, false);
	} else if(dom.attachEvent) {
		var hd = proxy(dom, handler);
		
		dom.attachEvent('on' + eventName, function() {
			var event = {
			    'currentTarget' : dom,
				'target' : window.event.srcElement
		    };
			hd(event);
		});
		
	}
}

function style(obj, prop) {
	if(window.getComputedStyle) {
		return window.getComputedStyle(obj, null)[prop];
	}
	else if(obj.currentStyle) {
		return obj.currentStyle[prop];
	}
	else {
		return null;
	}
}

function show(element) {
    if(style(element, 'display') === 'none') {
		var elem = document.createElement(element.nodeName);
		document.body.appendChild(elem);
		var display = style(elem, 'display');
		document.body.removeChild(elem);
		element.style.display = display;
	}
}
function hide(element) {
	element.style.display = 'none';
}

/*
function show(element) {
	if(style(element, 'display') === 'none') {
		element.style.display = element.previousDisplay;
	}
}
function hide(element) {
	element.previousDisplay = style(element, 'display');
	element.style.display = 'none';
}*/


