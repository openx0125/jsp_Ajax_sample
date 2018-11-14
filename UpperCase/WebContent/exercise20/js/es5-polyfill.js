if (Function.prototype.bind === undefined) {
	Function.prototype.bind = function (thisTarget) {
		var self = this;
		
		return function () {
			return self.apply(thisTarget, arguments);
		}
	}
}