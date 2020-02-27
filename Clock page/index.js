function displayTime(){
  var elem = document.getElementById("time")
  elem.innerHTML = moment().format("YYYY-MM-DD<br/> <b>h:mm:ss a </b>")
}

setInterval(displayTime, 1000);