export class Hero {
    constructor(fname, lname){
        this.firstname = fname;
          this.lastname = lname;
          this._secret = "My Secret";
          // var topsecret = "hello"
      }
      fullname(){
          return this.firstname+" "+this.lastname;
      }
      get secret(){
          return this._secret;
      }
      set secret(newsecret){
          this._secret = newsecret;
      }
  };