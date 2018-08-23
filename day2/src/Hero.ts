interface IHero{
    firstname:string;
    lastname:string;
    city:string;
    power?:number;
    fullname():string;
}
class Hero implements IHero {
    public city:string;
    constructor(
        public firstname:string, 
        public lastname:string, 
        private _secret:string){

            this.city = "Gotham";
    }
    fullname(){
        return this.firstname+" "+this.lastname;
    }
    get secret(){
        return this._secret;
    }
    set secret(val:string){
        this._secret = val;
    }
  };