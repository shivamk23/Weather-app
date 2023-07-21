setInterval(showTime,1000)
function showTime(){
    let a=new Date();
    let h=a.getHours();
    let m=a.getMinutes();
    let s=a.getSeconds();
    let d=a.getDate();
    let mo=a.getMonth();
    let y=a.getFullYear();
    let n=a.toLocaleString('default',{month:'long'});
    AM_PM="AM";

    if(h>=12){
        if(h>12){
            h -=12;
            
        }
        AM_PM="PM";
    }

    if(h<10){
        h="0"+h;
    }
    if(s<10){
        s="0"+s;
    }
    if(m<10){
        m="0"+m;
    }


    document.getElementById("clock").innerHTML = `${h}:${m}:${s} ${AM_PM} ${n}-${d}- ${y}`

    
}
showTime();