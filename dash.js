


const btn = document.getElementById("toggle")
const themeLink = document.getElementById("theme");
let isDarkTheme = false;
//listener for a click on the button
btn.addEventListener("click",function() {
    isDarkTheme = !isDarkTheme;
   //if the current URL contain "light-theme.css"
   if(isDarkTheme) {
    //then switch it to dark mode
    themeLink.href = "dark.css";

    //otherwise

   }else{
      themeLink.href = "Dash.css";
   }
   
});


