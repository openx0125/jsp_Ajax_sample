var xhr = window.XMLHttpRequest && 
                      (window.location.protocol !== 'file:' 
                          || !window.ActiveXObject) ?
                       function() {
                           return new XMLHttpRequest();
                       } :
                       function() {
                          try {
                              return new ActiveXObject('Microsoft.XMLHTTP');
                          } catch(e) {
                              throw new Error('XMLHttpRequest not supported');
                          }
                       };

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
	element.style.display = element.previousDisplay || '';
	if(style(element, 'display') === 'none') {
		var node = document.createElement(element.nodeName);
		document.body.appendChild(node);
		element.style.display = style(node, 'display');
		document.body.removeChild(node);
	}
}

function hide(element) {
	element.previousDisplay = style(element, 'display');
	element.style.display = 'none';
}

function opacity(element, value) {
	if(value === undefined) { // 取得不透明度
		var opt = style(element, 'opacity') || style(element, 'filter');
		if(opt === '') {
			return 1;
		}
		if(opt.indexOf('alpha') !== -1)  {
			return opt.substring(14, opt.length - 1) / 100;
		}
		return parseFloat(opt);
	}

	if(style(element, 'opacity') !== undefined) {
		element.style.opacity = value;
	}
	else {
		element.style.filter = 
		   'alpha(opacity=' + parseInt(value * 100) + ')';
	}
}

function fadeIn(element, speed, steps) {
    speed = speed || 5000;
    steps = steps || 10;
    var target = element.previousOpacity || 1;
    delete element.previousOpacity;
 
    var timeInterval = speed / steps;
    var valueStep = target / steps;

    var opt = 0;
    setTimeout(function next() {
        opt += valueStep;
        if(opt < target) {
            opacity(element, opt);
            setTimeout(next, timeInterval);
        }
        else {
            opacity(element, target);
        }
    }, timeInterval);
}                

function fadeOut(element, speed, steps) {
    speed = speed || 5000;
    steps = steps || 10;
    element.previousOpacity = opacity(element);
    
    var timeInterval = speed / steps;
    var valueStep = element.previousOpacity / steps;

    var opt = element.previousOpacity;
    setTimeout(function next() {
        opt -= valueStep;
        if(opt > 0) {
            opacity(element, opt);
            setTimeout(next, timeInterval);
        }
        else {
            opacity(element, 0);
        }
    }, timeInterval);
}

function hasClass(element, clz) {
	var clzs = element.className;
	if(!clzs) {
		return false;
	}
	if(clzs === clz) {
		return true;
	}
	return clzs.search('\\b' + clz + '\\b') !== -1;
}
function addClass(element, clz) {
	if(!hasClass(element, clz)) {
		if(element.className) {
			clz = ' ' + clz;
		}
		element.className += clz;
	}
}
function removeClass(element, clz) {
	element.className = element.className.replace(
		new RegExp('(?:^|\s)' + clz + '(?!\S)', 'g'), '');
}
function toggleClass(element, clz1, clz2) {
	if(hasClass(element, clz1)) {
		removeClass(element, clz1);
		addClass(element, clz2);
	}
	else if(hasClass(element, clz2)) {
		removeClass(element, clz2);
		addClass(element, clz1);
	}
}

function screenWidthHeight() {
	return {
		width: screen.width,
		height: screen.height
	};
}
function screenAvailWidthHeight() {
	return {
		width: screen.availWidth,
		height: screen.availHeight
	};
}
function windowXY() {
	var xy = {};
	if(window.screenX) {
		xy.x = window.screenX;
		xy.y = window.screenY;
	}
	else if(window.screenLeft) {
		xy.x = window.screenLeft;
		xy.y = window.screenTop;
	}
	return xy;
}
function windowWidthHeight() {
	var wh = {};
	if(window.outerWidth) {
		wh.width = window.outerWidth;
		wh.height = window.outerHeight;
	}
	else if(document.documentElement.offsetWidth) {
		wh.width = document.documentElement.offsetWidth;
		wh.height = document.documentElement.offsetHeight;
	}
	else if(document.body.offsetWidth) {
		wh.width = document.body.offsetWidth;
		wh.height = document.body.offsetHeight;
	}
	return wh;
}                
function htmlWidthHeight() {
	return {
		width: window.documentElement.scrollWidth,
		height: window.documentElement.scrollHeight
	};
}
function bodyWidthHeight() {
	return {
		width: window.body.scrollWidth,
		height: window.body.scrollHeight
	};
}
function viewPortWidthHeight() {
	var wh = {};
	if(window.innerWidth) {
		wh.width = window.innerWidth;
		wh.height = window.innerHeight;
	}
	else if(document.documentElement.clientWidth) {
		wh.width = document.documentElement.clientWidth;
		wh.height = document.documentElement.clientHeight;
	}
	else if(document.body.clientWidth) {
		wh.width = document.body.clientWidth;
		wh.height = document.body.clientHeight;
	}
	return wh;
}
function scrollXY() {
	var xy = {};
	if(window.pageXOffset) {
		xy.x = window.pageXOffset;
		xy.y = window.pageYOffset;
	}
	else if(document.documentElement.srollLeft) {
		xy.x = document.documentElement.srollLeft;
		xy.y = document.documentElement.srollTop;
	}
	else if(document.body.srollLeft) {
		xy.x = document.body.srollLeft;
		xy.y = document.body.srollTop;
	}
	return xy;
}
