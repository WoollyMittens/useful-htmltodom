/*
	Source:
	van Creij, Maurice (2018). "htmltodom.js: Waits for an element to start existing", http://www.woollymittens.nl/.

	License:
	This work is licensed under a Creative Commons Attribution 3.0 Unported License.
*/

// establish the class
var HtmlToDom = function(config) {

	// PROPERTIES

	this.config = {
		'data' : {},
		'error': function(errorcode) { console.log(errorcode) }
	};

	for (var key in config) {
		this.config[key] = config[key];
	}

	// METHODS

	this.init = function() {
		var result, _this = this;
		// if an internal template is referenced
		if (this.config.html) {
			// import, process and convert it immediately
			result = this.fill(this.config.html.innerHTML, this.config.data);
			result = this.convert(result);
			this.config.success(result);
		}
		// if an external source is referenced
		if (this.config.url) {
			// load it using AJAX
			requests.send({
				url : this.config.url,
				contentType : 'text/xml',
				timeout : 4000,
				onTimeout : function (reply) { this.config.error(reply); },
				onFailure : function (reply) { this.config.error(reply); },
				onSuccess : function (reply) {
					// then import, process and convert it
					result = _this.fill(reply.responseText, _this.config.data);
					result = _this.convert(result);
					_this.config.success(result);
				}
			});
		}
	};

	this.fill = function(template, data) {
		for (var key in data) {
			template = template.replace(new RegExp('{' + key + '}', 'g'), data[key]);
		}
		return template;
	};

	this.convert = function(text) {
		// create a temporary parent for the HTML
		var temp = document.createElement('div');
		temp.innerHTML = text;
		// transfer the contents of the template to a empty document fragment
		var fragment = document.createDocumentFragment();
		var children = temp.childNodes;
		for (var a = 0, b = children.length; a < b; a += 1) {
			fragment.appendChild(
				children[a].cloneNode(true)
			);
		}
		// clear the temp
		temp = null;
		// return the fragment
		return fragment;
	};

	// EVENTS

	this.init();

};

// return as a require.js module
if (typeof define != 'undefined') define(['htmltodom'], function () { return HtmlToDom });
if (typeof module != 'undefined') module.exports = HtmlToDom;
