
function updateTime() {

    var timeNow = new Date().toLocaleTimeString()//Collect current hour
    var time = document.getElementById('time')
    time.innerHTML = timeNow

    var dateNow = new Date()//Collect current day
    var date = document.getElementById('date')
    date.innerHTML = dateNow.toDateString() //Covert DATE FORMAT TO STRING ex: Sunday 15 Feb 2022

}


setInterval(updateTime,500)

