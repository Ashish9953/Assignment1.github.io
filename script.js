function validateForm()
{
  let userName=document.forms["loginForm"]["userName"].value;
  let pwd=document.forms["loginForm"]["pwd"].value;
  if(userName=="")
  {
   alert("Name must be filled out");
   return false;
  }
  
    if(pwd=="")
  {
   alert("password  must be filled out");
   return false;
  }
  
  if(pwd.length<6)
  {
   alert("Password should be atleast 6 characters");
   return false;
  }
return true;
}

function validateForm1()
{
  let firstName=document.forms["loginForm"]["firstName"].value;
  let lastName=document.forms["loginForm"]["lastName"].value;
  let email=document.forms["loginForm"]["email"].value;
  let pwd=document.forms["loginForm"]["pwd"].value;
  let cnfpwd=document.forms["loginForm"]["cnfpwd"].value;
  if(firstName=="")
  {
   alert(" first Name must be filled out");
   return false;
  }
  if(lastName=="")
  {
   alert(" last Name must be filled out");
   return false;
  }
  if(email=="")
  {
   alert(" email  must be filled out");
   return false;
  }
  
    if(pwd=="")
  {
   alert("password  must be filled out");
   return false;
  }
  if(cnfpwd=="")
  {
   alert("confirm password  must be filled out");
   return false;
  }
  
  if(pwd.length<6)
  {
   alert("Password should be atleast 6 characters");
   return false;
  }
  if(cnfpwd!=pwd)
  {
    alert("confirm password must be same to password");
    return false;
  }
return true;
}







