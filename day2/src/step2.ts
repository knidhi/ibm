function addPower(pow:number){
    return function(targetClass:any){
            return class {
                title = new targetClass().title;
                power = pow
            }
    }
}

@addPower(5)
class Batman{
    title = "Batman"
};


console.log(new Batman());