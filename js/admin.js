var app = new Vue({
	el: '#admin',
	data: 
  {
    input: null,
    key: null,
    output: null
  },
	methods: {
    encryptWithAES() {
      this.output = CryptoJS.AES.encrypt(this.input, this.key).toString();
    },
    decryptWithAES() {
      this.output = CryptoJS.AES.decrypt(this.input, this.key).toString(CryptoJS.enc.Utf8);
    },
    copyOutputToClipboard() {
      navigator.clipboard.writeText(this.output);
    },
    copyKeyToClipboard() {
      navigator.clipboard.writeText(this.urlEncodeKey());
    },
    urlEncodeKey() {
      return encodeURI(this.key);
    }
	}
})