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

// 實作 opacity、fadeOut、fadeIn 函式
function opacity (element, value) {
	//simulate getter
	if (value === undefined) {
		var opacityObj = style (element, 'opacity') || style (element, 'filter');
		if (opacityObj === '') {
			return 1;
		} 
		
		if (opacityObj.indexOf('alpha') !== -1) {
			return opacityObj.substring(14, opacityObj.length-1)/100;
		}
		
		return parseFloat(opacityObj);
	}
	
	
	//simulate setter
	if (style(element, 'opacity') !== undefined) {
		element.style.opacity = value;
	} else {
		element.style.filter = 'alpha(opacity=' + parseInt(value*100) + ')';
	}	
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
    speed = speed || 10000;
    
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

