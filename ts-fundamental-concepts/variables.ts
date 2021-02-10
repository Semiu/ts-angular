//declaring type 
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1,2,3];
let f: any[]= [1, "any", true];

enum color {Red, Blue, Green}

let backgroundColor = color.Blue;

//Type assertion 1 - if the value is assigned at the point of declaration, functions associated
//with string type are intelligently suggested when the variable is suffixed with dot (.)
let message = "abc";

let endsWithC = message.endsWith(message, -1);

//Type assertion 2 - it is only type assertion that would make the methods associated with string
//to be intelligently suggested when the variable is suffixed with dot (.)
//The type assertion's signature is (<variableType>variableName)
let word;
word = "good";
let endWithD = (<string>word).endsWith(word, -1);