// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;






//london
// // const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
const options1 = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd1744d9430mshf9d83f4923d28dbp1e52fajsn185701561d9d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather1 = (city)=>{
    cityName.innerHTML=city;

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London', options1)
    .then(response => response.json())
    .then((response) => {
        console.log(response);

        
        ltemp.innerHTML = response.temp
        ltemp1.innerHTML = response.temp
        
        lhumidity.innerHTML = response.humidity            
        lwind_speed.innerHTML = response.wind_speed        
        
    })
    .catch(err => console.error(err))
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
    
})
getWeather1("London")




//delhi
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd1744d9430mshf9d83f4923d28dbp1e52fajsn185701561d9d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city)=>{
    cityName.innerHTML=city;
    cityName1.innerHTML=city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);

        
        temp.innerHTML = response.temp
        temp1.innerHTML = response.temp        
        humidity.innerHTML = response.humidity             
        wind_speed.innerHTML = response.wind_speed        
        
       
        // let unix = sunrise.innerHTML
        // let date = new Date(unix*1000);
        // console.log(date.getDate())
    })
    .catch(err => console.error(err))
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
    
})
getWeather("Delhi")



//New York
// // const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
const options2 = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd1744d9430mshf9d83f4923d28dbp1e52fajsn185701561d9d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather2 = (city)=>{
    cityName.innerHTML=city;

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York', options2)
    .then(response => response.json())
    .then((response) => {
        console.log(response);

        
        ntemp.innerHTML = response.temp
        ntemp1.innerHTML = response.temp        
        nhumidity.innerHTML = response.humidity             
        nwind_speed.innerHTML = response.wind_speed 
    })
    .catch(err => console.error(err))
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
    
})
getWeather2("Delhi")





//chandigarh
// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
const options3 = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd1744d9430mshf9d83f4923d28dbp1e52fajsn185701561d9d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather3 = (city)=>{
    cityName.innerHTML=city;

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=chandigarh', options3)
    .then(response => response.json())
    .then((response) => {
        console.log(response);

        
        ctemp.innerHTML = response.temp
        chumidity.innerHTML = response.humidity
        csunrise.innerHTML = response.sunrise
        csunset.innerHTML = response.sunset

        let unix = csunrise.innerHTML
        let  date = new Date(unix*1000);
        let  hr=date.getHours();
        let  m="0"+date.getMinutes();
        let  s="0"+date.getSeconds();
        let  ft=hr+":"+m.substr(-2)+":"+s.substr(-2)+" AM";
        csunrise.innerHTML=ft

        let  nix = csunset.innerHTML
        let  date1 = new Date(nix*1000);
        let  hr1=date1.getHours();
        if(hr1>=12){
            if(hr1>12){
                hr1 -=12;
            }
        }
        let  m1="0"+date1.getMinutes();
        let  s1="0"+date1.getSeconds();
        let  ft1=hr1+":"+m1.substr(-2)+":"+s1.substr(-2)+" PM";
        csunset.innerHTML=ft1
        console.log(ft,ft1)
    })
    .catch(err => console.error(err))
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
    
})
getWeather3("Delhi")






//assam
// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
const options4 = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd1744d9430mshf9d83f4923d28dbp1e52fajsn185701561d9d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather4 = (city)=>{
    cityName.innerHTML=city;

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=assam', options4)
    .then(response => response.json())
    .then((response) => {
        console.log(response);

        
        atemp.innerHTML = response.temp
        ahumidity.innerHTML = response.humidity
        asunrise.innerHTML = response.sunrise
        asunset.innerHTML = response.sunset

        let unix = asunrise.innerHTML
        let  date = new Date(unix*1000);
        let  hr=date.getHours();
        let  m="0"+date.getMinutes();
        let  s="0"+date.getSeconds();
        let  ft=hr+":"+m.substr(-2)+":"+s.substr(-2)+" AM";
        asunrise.innerHTML=ft

        let  nix = asunset.innerHTML
        let  date1 = new Date(nix*1000);
        let  hr1=date1.getHours();
        if(hr1>=12){
            if(hr1>12){
                hr1 -=12;
            }
        }
        let  m1="0"+date1.getMinutes();
        let  s1="0"+date1.getSeconds();
        let  ft1=hr1+":"+m1.substr(-2)+":"+s1.substr(-2)+" PM";
        asunset.innerHTML=ft1
        console.log(ft,ft1)
    })
    .catch(err => console.error(err))
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
    
})
getWeather4("Delhi")






//gandhinagar
// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
const options5 = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd1744d9430mshf9d83f4923d28dbp1e52fajsn185701561d9d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather5 = (city)=>{
    cityName.innerHTML=city;

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=gandhinagar', options5)
    .then(response => response.json())
    .then((response) => {
        console.log(response);

        
        gtemp.innerHTML = response.temp
        ghumidity.innerHTML = response.humidity
        gsunrise.innerHTML = response.sunrise
        gsunset.innerHTML = response.sunset

        let unix = gsunrise.innerHTML
        let  date = new Date(unix*1000);
        let  hr=date.getHours();
        let  m="0"+date.getMinutes();
        let  s="0"+date.getSeconds();
        let  ft=hr+":"+m.substr(-2)+":"+s.substr(-2)+" AM";
        gsunrise.innerHTML=ft

        let  nix = gsunset.innerHTML
        let  date1 = new Date(nix*1000);
        let  hr1=date1.getHours();
        if(hr1>=12){
            if(hr1>12){
                hr1 -=12;
            }
        }
        let  m1="0"+date1.getMinutes();
        let  s1="0"+date1.getSeconds();
        let  ft1=hr1+":"+m1.substr(-2)+":"+s1.substr(-2)+" PM";
        gsunset.innerHTML=ft1
        console.log(ft,ft1)
    })
    .catch(err => console.error(err))
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
    
})
getWeather5("Delhi")






//lucknow
// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
const options6 = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd1744d9430mshf9d83f4923d28dbp1e52fajsn185701561d9d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather6 = (city)=>{
    cityName.innerHTML=city;

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=lucknow', options6)
    .then(response => response.json())
    .then((response) => {
        console.log(response);

        
        Ltemp.innerHTML = response.temp
        Lhumidity.innerHTML = response.humidity
        Lsunrise.innerHTML = response.sunrise
        Lsunset.innerHTML = response.sunset

        let unix = Lsunrise.innerHTML
        let  date = new Date(unix*1000);
        let  hr=date.getHours();
        let  m="0"+date.getMinutes();
        let  s="0"+date.getSeconds();
        let  ft=hr+":"+m.substr(-2)+":"+s.substr(-2)+" AM";
        Lsunrise.innerHTML=ft

        let  nix = Lsunset.innerHTML
        let  date1 = new Date(nix*1000);
        let  hr1=date1.getHours();
        if(hr1>=12){
            if(hr1>12){
                hr1 -=12;
            }
        }
        let  m1="0"+date1.getMinutes();
        let  s1="0"+date1.getSeconds();
        let  ft1=hr1+":"+m1.substr(-2)+":"+s1.substr(-2)+" PM";
        Lsunset.innerHTML=ft1
        console.log(ft,ft1)
    })
    .catch(err => console.error(err))
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
    
})
getWeather6("Delhi")






//chennai
// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
const options7 = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd1744d9430mshf9d83f4923d28dbp1e52fajsn185701561d9d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather7 = (city)=>{
    cityName.innerHTML=city;

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=chennai', options7)
    .then(response => response.json())
    .then((response) => {
        console.log(response);

        
        Ctemp.innerHTML = response.temp
        Chumidity.innerHTML = response.humidity
        Csunrise.innerHTML = response.sunrise
        Csunset.innerHTML = response.sunset

        let unix = Csunrise.innerHTML
        let  date = new Date(unix*1000);
        let  hr=date.getHours();
        let  m="0"+date.getMinutes();
        let  s="0"+date.getSeconds();
        let  ft=hr+":"+m.substr(-2)+":"+s.substr(-2)+" AM";
        Csunrise.innerHTML=ft

        let  nix = Csunset.innerHTML
        let  date1 = new Date(nix*1000);
        let  hr1=date1.getHours();
        if(hr1>=12){
            if(hr1>12){
                hr1 -=12;
            }
        }
        let  m1="0"+date1.getMinutes();
        let  s1="0"+date1.getSeconds();
        let  ft1=hr1+":"+m1.substr(-2)+":"+s1.substr(-2)+" PM";
        Csunset.innerHTML=ft1
        console.log(ft,ft1)
    })
    .catch(err => console.error(err))
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
    
})
getWeather7("Delhi")

// // // const apiKey="742611762amsha9e80ff84ce072fp1bcf9djsnb3949e2da3e9";
// // // const apiUrl="https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=";
// // // async function checkW(){
// // //     const response = await fetch(apiUrl+`&appid=${apiKey}`);
// // //     var data=await response.json();
// // //     console.log(data);
// // // }
// // // checkW();

