
    // document.getElementById("dateDisplay").innerHTML = Date();

function renderTime(){
    var mydate = new Date();
    var year = mydate.getFullYear();
    if(year < 1000){
        year +=1900
    }
var day = mydate.getDay();
var month = mydate.getMonth();
var daym = mydate.getDate();
var dayarray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var montharray = new Array("january", "February", "March", "April", "May", "June",  "July", "August", "September",  "October",  "November", "December");
var mydate = document.getElementById('dateDisplay');
  
var currentTime = new Date();
  var diem = "AM";
  var h = currentTime.getHours();
  var m = currentTime.getMinutes();
  var s = currentTime.getSeconds();

  if (h == 0){
      h = 12;
  } else if ( h > 12) {
      h = h -12;
      diem = "PM";
  }
  if (h < 10) {
      h = "0" + h;
  }
  if (m < 10) {
      m = "0" + m;
  }
  if (s < 10) {
      s = "0" + s;
  }

  var myclock = document.getElementById('clockDisplay');
  myclock.textContent = "" +dayarray[day]+ ":" + daym +":"+ montharray[month] + ":" + year +"|" +h + ": " + m + ": " + s + "" + diem;
  myclock.innerText = "" +dayarray[day]+ ":"+ daym +":"+ montharray[month] + ":" + year +"|" + h + ": " + m + ":" + s + "" + diem;
  setTimeout('renderTime()',1000);
 
}
renderTime();
