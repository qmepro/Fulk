export class UserComponent {
  constructor($http) {
    this.$http = $http;
    this.hello = "Hello World!";
    this.apimeth = ["GET", "POST"];
    this.serapi = '';
    this.sapimeth = '';
    this.param = [];
    this.temp = [];
  }

  addParam() {
    this.param.push({});
  }

  serres() {
    angular.forEach(this.param, key => {
      this.temp.push(key.key + '=' + key.value);
      console.log(key);
    });
    console.log(this.temp);
    this.temp2 = this.temp.join('&');
    console.log(this.temp2);

    this.request = {
      methode: this.sapimeth,
      url: this.serapi + '?' + this.temp2
      // param: this.temp2
    };
    console.log(this.request);
    this.$http(this.request)
    .then(response => {
      this.data = response;
      console.log(this.data);
    });
  }
  data() {
    return this.data;
  }
}

export const hello = {
  template: require('./hello.html'),
  controller: UserComponent
};
