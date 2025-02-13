function firstWord(s) {
  // your code here
	 let res = "";
  
      for(let i = 0; i < s.length; i++){
          if(s.charAt(i) === " " && res !== ""){
              break;
          }else{
              res = res + s.charAt(i);
          }
      }
  
      return res;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
