function firstWord(s) {
  // your code here
	  s = s.trim();
  
  // Find the index of the first space
  let spaceIndex = s.indexOf(' ');
  
  // If there is no space, return the entire string
  if (spaceIndex === -1) {
    return s;
  }
  
  // Return the substring from the beginning up to the first space
  return s.substring(0, spaceIndex);

}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
