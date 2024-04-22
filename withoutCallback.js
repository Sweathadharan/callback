const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};

// Progression 1: create a function to get all the cookies

function getAllCookies(cookies){
  let output="";
  for(let i=0;i<cookies.length;i++)
  {
    output+=cookies[i].name;
  }
  document.body.textContent=output+" ";
}
 


  // Progression 2: using setTimeout() - use 1000 units for time parameter
  setTimeout(function() {
    getAllCookies(cookies);
  }, 1000);

//Progression 3: Create a function to creat cookies
  // use setTimeout() -- use 2000 units for time parameter

  function createCookies()
  {
    setTimeout(function(){
      cookies.push(newCookie);
    },2000);
  }
// Progression 4: calling functions
getAllCookies(cookies);
createCookies();
setTimeout(function() {
  getAllCookies(cookies);
}, 2000); 
