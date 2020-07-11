var min=0;
var sec=0;
var msec=0;
var minH=document.getElementById('min');
var secH=document.getElementById('sec');
var msecH=document.getElementById('msec');
var interval;

function timer(){
    msec++
    msecH.innerHTML=msec;
    if(msec%100==0){
        sec++
        secH.innerHTML = sec
        msec=0
        if(sec%60==0){
            min++
            minH.innerHTML = min
            sec=0
        }
    }

}
function start(){
    interval=setInterval(timer,10)
    start.disabled=true;
}
function stop(){
    clearInterval(interval)
    start.disabled=false;
}
function reset(){
    min=0;
    sec=0;
    msec=0;
    minH.innerHTML=min;
    secH.innerHTML=sec;
    msecH.innerHTML=msec;
    stop()
}