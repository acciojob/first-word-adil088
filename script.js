function firstWord(s) {
  // your code here
	s = s.trimStart()
	 let res = "";
  
      for(let i = 0; i < s.length; i++){
          if(s.charAt(i) === " "){
              break;
          }
		  res = res + s.charAt(i);
      }
  
      return res;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
