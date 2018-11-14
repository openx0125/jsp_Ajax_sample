function getEventId (id) {
	return document.getElementById (id);
}


function getTagNames (tagName) {
	return document.getElementsBytTagName (tagName);
}

function proxy(elem, handler) {
	return function () {
		return handler.apply(elem, arguments);
	}
}

function bind (elem, eventName, handler) {
	if (elem.addEventListener) { //standard
		elem.addEventListener(eventName, handler, false);
	} else if (elem.attachEvent) {	//IE lower version 
		var handEvent = proxy (elem, handler);
		elem.attachEvent ('on' + eventName, function () {
			var event = {
					'currentTarget' : elem,
					'target' : window.event.srcElement
			}
			handEvent(event);
		});
	}
}
