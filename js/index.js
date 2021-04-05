var app = new Vue({
	el: '#app',
	data: {
		json: null
	},
	created: function () {
		let _this = this;
		$.getJSON(
			"/js/data.json", 
			function (json) { _this.json = json; console.log(json); }
		)
	}
})