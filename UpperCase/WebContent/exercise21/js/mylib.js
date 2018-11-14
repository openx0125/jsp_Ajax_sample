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

// 實作 style、show、hide 函式
function style (styleObj, prop) {
	if (window.getComputedStyle) {
		return window.getComputedStyle(styleObj, null)[prop];
	} else if (styleObj.currentStyle) {
		return styleObj.currentStyle[prop];
	} else {
		return null;
	}
}

function hide (elem) {
	//elem.previousDisplay = style (elem, 'display');
	elem.style.display = 'none';
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
