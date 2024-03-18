//                            HOUR SCRIPT
// ----------------------------------------------------------------
window.onload = function() {
  clock();  
    function clock() {
    var now = new Date();
    var TwentyFourHour = now.getHours();
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    var mid = 'PM';
    if(sec < 10) { 
      sec = "0" + sec; 
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (hour > 12) {
      hour = hour - 12;
    }   
    if (hour < 10 ) {
      hour = "0" + hour;
    }   
    if(hour==0){ 
      hour=12;
    }
    if(TwentyFourHour < 12) {
       mid = 'AM';
    }
  document.getElementById('currentTime').innerHTML =     hour+':'+min+' '+mid ;
    setTimeout(clock, 1000);
    }
}
// ----------------------------------------------------------------

//                START MENU HIDE AND SHOW SCRIPT 
// ----------------------------------------------------------------
var startMenuDiv = document.getElementById('start-menu')
var startMenuvisibility = 0;

function hideShow()
{
  if(startMenuvisibility==1)
  {
    startMenuDiv.style.visibility="hidden";
    startMenuvisibility = 0;
  }
  else
  {
    startMenuDiv.style.visibility="visible";
    startMenuvisibility = 1;
  }

}
// ----------------------------------------------------------------
//                SHUT DOWN HIDE AND SHOW SCRIPT 
// ----------------------------------------------------------------

var shutDownDiv = document.getElementById('shut-down-tab-parent')
var shutDownVisibility = 0;

function shutDown()
{
  if(shutDownVisibility==1)
  {
    shutDownDiv.style.visibility="hidden";
    shutDownVisibility = 0;
  }
  else
  {
    shutDownDiv.style.visibility="visible";
    shutDownVisibility = 1;
  }
  

}