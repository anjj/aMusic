
function playMusic(){
	document.getElementById('musicPlayer').play();
	mp3=document.getElementById("musicPlayer");	
	document.getElementById('musicTimeline').max = mp3.duration;
	window.setInterval(function(){ addOneToProgress(); }, 500);
}     

function addOneToProgress(){
	AC = secondsToTime(mp3.currentTime);
	TOT = secondsToTime(mp3.duration);
	document.getElementById('musicTimeline').value =mp3.currentTime;
	document.getElementById('timeLine').innerHTML  = AC.m + ':' + AC.s + ' / ' + TOT.m + ':' + TOT.s;
}

function pauseMusic (){
	document.getElementById('musicPlayer').pause();
} 


function secondsToTime(secs) {
    var hours = Math.floor(secs / (60 * 60));
    var divisor_for_minutes = secs % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);
    var divisor_for_seconds = divisor_for_minutes % 60;
    var seconds = Math.ceil(divisor_for_seconds);
   
	if(seconds < 10){
		seconds = '0' + seconds;
	}
	
    var obj = {
        "h": hours,
        "m": minutes,
        "s": seconds
    };
    return obj;
}

