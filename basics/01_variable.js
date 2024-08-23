const accountId = 10139473 ;
let accountEmail = "abc@gmail.com";
var accountPasswaord = "123456";

accountCity = "Delhi";

// accountId = 2; not allowed

 accountEmail = "abcd@gmail.com";
 accountPasswaord = "123996";
 accountCity =  "goa";
 let accountState;

 /*  prefer not to use var 
 because of issue in block scope and function scope */

console.log(accountId);
console.table([accountId, accountEmail, accountPasswaord, accountCity, accountState]);
