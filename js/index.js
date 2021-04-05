var app = new Vue({
	el: '#app',
	data: {
		json: null
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
					"petName": "Arlo",
					"petWeight": "13 lbs",
					"petDescription": "Chihuaha/terrier mix, all black coat. Friendly, loves to be warm and snuggle.",
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
			$.getJSON(
				"/js/data.json", 
				function (json) { _this.json = json; }
			);
		}
	}
})