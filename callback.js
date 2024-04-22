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

  // Progression 2: using setTimeout() 
  setTimeout(function() {
    getAllCookies(cookies);
  }, 1000);

//Progression 3: Create a function to creat cookies
function createCookies(newCookie,cb)
  {
    setTimeout(function(){
      cookies.push(newCookie);
      cb();
    },2000);
  }


// Progression 5: calling function
createCookies(newCookie,getAllCookies)