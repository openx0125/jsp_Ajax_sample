require(['dom', 'event', 'style', 'ajax'], function(dom, event, style, ajax) {
	function removeSuggestion() {
		// 移除選項的<div>容器
		var divs = dom.name('div');
		for (var i = 0; i < divs.length; i++) {
			document.body.removeChild(divs[i]);
		}
	}

	function suggestionHTML(keywords) {
		var innerHTML = '';
		for (var i = 0; i < keywords.length; i++) {
			innerHTML += (keywords[i] + '<br>');
		}
		return innerHTML;
	}

	function stickToInput(div) {
		// 設定<div>的位置
		var xy = style.offset(search);
		div.style.left = xy.x + 'px';
		div.style.top = xy.y + search.offsetHeight + 'px';
		div.style.width = search.offsetWidth + 'px';
	}


	var search = dom.id('search');
	event.bind(search, 'keyup', function() {
		removeSuggestion();

		// 沒有輸入值，直接結束
		if (search.value === '') {
			return;
		}

		// 發出非同步請求，取得可能的選項，以JSON的字串陣列格式傳回
		ajax.get('JSON-1.jsp?' + ajax.param({
			keyword : search.value
		}), function(request) {
			// 剖析JSON
			var keywords = JSON.parse(request.responseText);
			// 字串陣列長度不為0時加以處理
			if (keywords.length !== 0) {
				// 建立容納選項的<div>
				var div = document.createElement('div');
				div.innerHTML = suggestionHTML(keywords);
				stickToInput(div);
				// 附加至DOM樹
				document.body.appendChild(div);
			}
		});
	});

});

