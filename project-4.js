// variables
const startStopBtn = document.querySelector('.startStopBtn');
const resetBtn = document.querySelector('.resetBtn');

//Variables for time values
let seconds = 0;
let minutes = 0;
let hours = 0;

//variables for leading zeros
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

//variables for time interval and timer status
let timerInterval = null;
let timerStatus = 'stopped';


//Stop Watch function
function stopWatch() {

    seconds++
    if(seconds / 60 === 1){
        seconds = 0;
        minutes ++;

        if (minutes / 60 === 1){
            minutes = 0;
            hours++
        }
    }
    if(seconds < 10){
        leadingSeconds = "0" + seconds.toString();
        }else{
            leadingSeconds = seconds;
        }
    if(minutes < 10){
            leadingMinutes = "0" + minutes.toString();
        }else{
            leadingMinutes = minutes;
        }
    if(hours < 10){
            leadingHours = "0" + hours.toString();
        }else{
            leadingHours = hours;
        }
    let displayTimer = document.getElementsByClassName('timer')[0].innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
    

}

startStopBtn.addEventListener('click', function(){
    if(timerStatus === "stopped"){
    timerInterval = window.setInterval(stopWatch, 1000);
    document.getElementsByClassName('startStopBtn')[0].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-pause-circle-fill" id = "pause" viewBox="0 0 16 16" >
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"/>
  </svg>`;
  timerStatus = "started";
} else{
      window.clearInterval(timerInterval);
      document.getElementsByClassName('startStopBtn')[0].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem"  fill="currentColor" class="bi bi-play-circle-fill" id="play" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
    </svg>`;
    timerStatus = "stopped";
  }
})
resetBtn.addEventListener('click', function(){
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementsByClassName('timer')[0].innerHTML = '00:00:00'; 
})
