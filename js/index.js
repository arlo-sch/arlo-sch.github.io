var app = new Vue({
	el: '#app',
	data: {
		json: null
	},
	methods: {
		log(message) { console.log(message); }
	},
	created: function () {
		let _this = this;
		var host = window.location.hostname;
		console.log(host);
		if (host != "arlo-sch.github.io"){
			_this.json = {
				"contactInfo": {
					"phoneNumber": "(503) 555-5555",
					"emailAddress": "someone@gmail.com",
					"humanName": "Someone Somewhere",
					"addressLine1": "1234 Somewhere St.",
					"addressLine2": "",
					"city": "Portland",
					"state": "Oregon",
					"zipCode": "97211"    
				},
				"petInfo": {
					"name": "Arlo",
					"weight": "13 lbs",
					"description": "Chihuaha/terrier mix, all black coat. Friendly, loves to be warm and snuggle.",
					"petImages": [
						"arlo1.jpg",
						"arlo2.jpg",
						"arlo3.jpg"
					],
					"documentImages": [
						"rabiesTag.jpg"
					]
				}
			};
		}
		else {
			// TODO:
			// - Get URL parameter "auth"
			// - Use "auth" param to get file. Possibly en/decrypt data
			//		using "auth" value as the encryption key.
			$.getJSON(
				"/js/data.json", 
				function (json) { _this.json = json; }
			);
		}
	}
})