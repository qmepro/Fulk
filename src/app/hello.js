export class UserComponent {
  constructor($http) {
    this.$http = $http;
    this.hello = "Hello World!";
    this.apimeth = ["GET", "POST"];
    this.serapi = '';
    this.sapimeth = '';
  }

  serres() {
    this.request = {
      method: this.sapimeth,
      url: this.serapi
    };
    // $log(this.sapimeth);
    // $log(this.serapi);
    this.$http(this.request)
    .then(response => {
      this.data = response.data;
    // $log(this.data);
    })
    .catch(response => {
      this.data = response.data;
      // $log(this.data);
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
