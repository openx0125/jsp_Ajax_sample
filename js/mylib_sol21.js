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