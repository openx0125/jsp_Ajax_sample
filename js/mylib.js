function $id(idName){
    return document.getElementById(idName);
}
function proxy(){
    return function(){
        return handler.apply(dom, arguments);
    };
}
function bind(dom, eventName, handler){
    if(dom.addEventListener){
        addEventListener(eventName, handler, false);
    } else if(dom.attachEvent){
        var hd = proxy(dom, handler);

        dom.attachEvent('on'+eventName, function(){
            var event = {
                'currentTarget' : dom,
                'target': window.event.srcElement
            };
            hd(event);
        });
    }
}
function style(obj, prop){
    if(window.getComputedStyle){
        return window.getComputedStyle(obj, null)[prop];
    }
    else if(obj.currentStyle){
        return obj.currentStyle[prop];
    }else {
        return null;
    }
}
function hide(element){
    element.previousDisplay = style(element, 'display');
    element.style.display = 'none';
}
function show(element){
    var preDisplay = element.previousDisplay || '';
    if(style(element, 'display') === 'none' ){
        var elem = document.createElement(element.nodeName);
   //jQuery method==> 得到dom元素element的style，所以先add，得到後在remove，就不用顯示出來。
        document.body.appendChild(elem);
        element.style.display = style(elem, 'display');
        document.body.removeChild(elem);
    }
    element.style.display = preDisplay;
}
