// alert("hello from typescript");

/*
var message:string;
message = "Hello from Typescript";
*/
var company = "IBM";

var num:number;
    num = 5;

var score;

var message:(string | number);

message = "Welcome to your life"
    

// alert(message);

function saymessage( newmessage:string = "default" ):void{
    message = newmessage;
    alert(message);
};

console.log(saymessage("good evening"))
