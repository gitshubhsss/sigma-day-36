// Write a JavaScript funtion that accepts a list of country names and input and returns the longest contry name as output.

let coutries = ["America", "Australia", "United States of amrica"];
let ans = "";
let longCountry = () => 
{
  for (i = 0; i < coutries.length; i++) 
  {
    if (ans.length < coutries[i].length)
     {
      ans = coutries[i];
     }
  }
  console.log(ans);
};
longCountry();
