// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// fabf712aeefed248978a54e26c4f7089 

window.addEventListener('load',(event)=>{   
    let lon;
    let lat;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            lon=position.coords.longitude;
            lat=position.coords.latitude;
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b0325d13bd1109ae96f00f02d1731260&units=metric`)
            .then(locationn=>{
                
                return locationn.json();
                
            }).then(showlocation);
        })
        

    }
})
function showlocation(locationn){
    // console.log(weatherinfo);

    var name=document.getElementById("City-info");
    name.innerHTML=`${locationn.name},${locationn.sys.country}`;
    
    var temp=document.getElementById("temp-info");
    temp.innerHTML=`${locationn.main.temp}&deg;C`;
    var weather=document.getElementById("weather-info");
    weather.innerHTML=`${locationn.weather[0].main}`;
    Datee(locationn.timezone)
    var datein=document.getElementById("date-info");
    datein.innerText=Datee(locationn.timezone);
    
        }
function Datee(date){
// var zone
 if((date==36000)){
     zone='Australia/Sydney';
    
 }
 else if((date==19800)){
     zone='Asia/Calcutta';}
 else if((date==-43200)){
     zone='Etc/GMT+12';}
 else if((date==-39600)){
     zone='Pacific/Midway';}
 else if((date==-3600000)){
     zone='US/Aleutian';}
 else if((date==-32400)){
     zone='Etc/GMT+9';}
 else if((date==-28800)){
     zone='PST8PDT';}
 else if((date==-25200)){
     zone='MST7MDT';}
 else if((date==-21600)){
     zone='CST6CDT';}
 else if((date==-18000)){
     zone='EST5EDT';}
 else if((date==-14400)){
     zone='America/Puerto_Rico';}
 else if((date==-12600)){
     zone='America/St_Johns';}
 else if((date==-10800)){
     zone='America/Buenos_Aires';}
 else if((date==0)){
     zone='GMT';}
 else if((date==3600)){
     zone='CET';}
 else if((date==7200)){
     zone='EET';}
 else if((date==10800)){
     zone='Asia/Baghdad';}
 else if((date==12600)){
     zone='Asia/Tehran';}
 else if((date==14400)){
     zone='Asia/Dubai';}
 else if((date==16200)){
     zone='Asia/Kabul';}
 else if((date==18000)){
     zone='Asia/Tashkent';}
 else if((date==20700)){
     zone='Asia/Katmandu';}
 else if((date==21600)){
     zone='Etc/GMT+6';}
 else if((date==23400)){
     zone='Asia/Rangoon';}
 else if((date==25200)){
     zone='Asia/Jakarta';}
 else if((date==28800)){
     zone='Hongkong';}
 else if((date==32400)){
     zone='Japan';}
 else if((date==34200)){
     zone='Australia/Darwin';}
 else if((date==43200)){
     zone='Pacific/Auckland';}
//    new Date().toLocaleString('en-in', {weekday:'long', timeZone: zone });



let year =new Date().toLocaleString('en-in', {year:'numeric' ,  timeZone: zone });
let month =new Date().toLocaleString('en-in', {month:'long' , timeZone: zone });
let dates = new Date().toLocaleString('en-in', {day:'2-digit',  timeZone: zone });
let day = new Date().toLocaleString('en-in', {weekday:'long', timeZone: zone });
let time = new Date().toLocaleString('en-in', {timeStyle:'medium'  , timeZone: zone });
var timeinfo=document.getElementById("time-info");
    timeinfo.innerHTML=`${time}`;

return `${dates} ${month} (${day}) ,   ${year}`;

 }


























const city = document.getElementById("City-name");
function searching(event){
    if(event.keyCode==13){
        
        // console.log(city.value);
        getWeather(city.value);
    }
}
 function getWeather(cityName){
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=fabf712aeefed248978a54e26c4f7089&units=metric`)
     .then(weatherinfo=>{
         return weatherinfo.json();})
         .then(showweather);
     }
     
        
    function showweather(weatherinfo){
        // console.log(weatherinfo);
    
        var name=document.getElementById("City-info");
        name.innerHTML=`${weatherinfo.name},${weatherinfo.sys.country}`;
        
        var temp=document.getElementById("temp-info");
        temp.innerHTML=`${weatherinfo.main.temp}&deg;C`;
        var weather=document.getElementById("weather-info");
        weather.innerHTML=`${weatherinfo.weather[0].main}`;
        Datee(weatherinfo.timezone)
        var datein=document.getElementById("date-info");
        datein.innerText=Datee(weatherinfo.timezone);
        
            }
function Datee(date){
    // var zone
     if((date==36000)){
         zone='Australia/Sydney';
        
     }
     else if((date==19800)){
         zone='Asia/Calcutta';}
     else if((date==-43200)){
         zone='Etc/GMT+12';}
     else if((date==-39600)){
         zone='Pacific/Midway';}
     else if((date==-3600000)){
         zone='US/Aleutian';}
     else if((date==-32400)){
         zone='Etc/GMT+9';}
     else if((date==-28800)){
         zone='PST8PDT';}
     else if((date==-25200)){
         zone='MST7MDT';}
     else if((date==-21600)){
         zone='CST6CDT';}
     else if((date==-18000)){
         zone='EST5EDT';}
     else if((date==-14400)){
         zone='America/Puerto_Rico';}
     else if((date==-12600)){
         zone='America/St_Johns';}
     else if((date==-10800)){
         zone='America/Buenos_Aires';}
     else if((date==0)){
         zone='GMT';}
     else if((date==3600)){
         zone='CET';}
     else if((date==7200)){
         zone='EET';}
     else if((date==10800)){
         zone='Asia/Baghdad';}
     else if((date==12600)){
         zone='Asia/Tehran';}
     else if((date==14400)){
         zone='Asia/Dubai';}
     else if((date==16200)){
         zone='Asia/Kabul';}
     else if((date==18000)){
         zone='Asia/Tashkent';}
     else if((date==20700)){
         zone='Asia/Katmandu';}
     else if((date==21600)){
         zone='Etc/GMT+6';}
     else if((date==23400)){
         zone='Asia/Rangoon';}
     else if((date==25200)){
         zone='Asia/Jakarta';}
     else if((date==28800)){
         zone='Hongkong';}
     else if((date==32400)){
         zone='Japan';}
     else if((date==34200)){
         zone='Australia/Darwin';}
     else if((date==43200)){
         zone='Pacific/Auckland';}
    //    new Date().toLocaleString('en-in', {weekday:'long', timeZone: zone });



    let year =new Date().toLocaleString('en-in', {year:'numeric' ,  timeZone: zone });
    let month =new Date().toLocaleString('en-in', {month:'long' , timeZone: zone });
    let dates = new Date().toLocaleString('en-in', {day:'2-digit',  timeZone: zone });
    let day = new Date().toLocaleString('en-in', {weekday:'long', timeZone: zone });
    let time = new Date().toLocaleString('en-in', {timeStyle:'medium'  , timeZone: zone });
    var timeinfo=document.getElementById("time-info");
        timeinfo.innerHTML=`${time}`;

    return `${dates} ${month} (${day}) ,   ${year}`;
    
     }