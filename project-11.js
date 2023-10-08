
var hoursContainer = document.querySelector('#hours');
var minutesContainer = document.querySelector('#minutes');
var secondsContainer = document.querySelector('#seconds');



function updateTimer(){
var hours =  new Date().getHours();
var minutes = new Date().getMinutes();
var seconds = new Date().getSeconds();
var leadingSeconds = 0;
var leadingMinutes = 0;
var leadingHours = 0;
if (seconds < 10){
leadingSeconds="0" + seconds;
}else{
    leadingSeconds = seconds
}
if (seconds < 10){
    leadingSeconds="0" + seconds;
    }else{
        leadingSeconds = seconds
    }
if (minutes < 10){
        leadingMinutes= minutes;
        }else{
            leadingMinutes = minutes;
        }
if (hours < 10){
            leadingHours="0" + hours;
            }else{
                leadingHours = hours;
            }

            hoursContainer.innerHTML =  leadingHours + "<p>Hours</p>";
            
            minutesContainer.innerHTML =  "<span>:</span>" + leadingMinutes + "<p>Minutes</p>";
                        
            secondsContainer.innerHTML = "<span>:</span>" +  leadingSeconds + "<p>Seconds</p>";
        }

            
setInterval(updateTimer, 1000);
