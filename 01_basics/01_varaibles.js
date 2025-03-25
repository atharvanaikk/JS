const account_id = "231010040"
let account_email = "email@g.com"
var account_password = "naik"
accountcity = "mumbai"
// account_id = "40"// not allowed changing constants
// account_email = "g@g.com"// allowed changing variables
account_password = "kian"
accountcity = "dubai" // this is also variable 
// let , var can be changed later but const cannot. both are variables
/* prefer not to use var becoz issue in block scope and fucntional scope*/
console.log(account_email,account_id,account_password);
console.table([account_email,account_id,account_password]);// creates a table using sq br in it
