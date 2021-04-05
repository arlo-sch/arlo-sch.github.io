var app = new Vue({
	el: '#app',
	data: {
		json: null
	},
	methods: {
		decryptWithAES(text, key) {
			return CryptoJS.AES.decrypt(text, key).toString(CryptoJS.enc.Utf8);
    }
	},
	created: function () {
		let _this = this;
		$.getJSON(
			"/js/data_enc.json", 
			function (json) {
				const searchParams = new URLSearchParams(window.location.search);
				if (searchParams.has("auth")){
					const authKey = searchParams.get("auth");
					const decryptedData = _this.decryptWithAES(json.data, authKey);
					_this.json = JSON.parse(decryptedData);
				}
			}
		);
	}
})