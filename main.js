const passwordEl = document.querySelector("div");
const button = document.querySelector("button");
button.addEventListener("click",() => {
 
})


function genarate_password() {
//return Math.floor(Math.random() *  Number.MAX_SAFE_INTEGER);

let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let length_pass = 10;
let pass = ""
    
 
for(let i = 0;i<length_pass;i++) {
   pass+= chars[Math.floor(Math.random()*chars.length)];
}
return pass;
}