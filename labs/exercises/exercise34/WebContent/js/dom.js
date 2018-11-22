define('dom', function(){
	function id(idName) {
	    return document.getElementById(idName);
	}

	function name(tagName) {
	    return document.getElementsByTagName(tagName);
	}

	return{
		id:   id,
		name: name
	};
});