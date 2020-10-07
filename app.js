let loc =  document.getElementById('location');
let tempIcon =  document.getElementById('temp-icon');
let tempValue = document.getElementById('temp-value');
let climate =   document.getElementById('climate');
let iconFile;


window.addEventListener("load", ()=>{
    let long; 
    let lat; 

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(poistion =>{
            long = poistion.coords.longitude;
            lat = poistion.coords.latitude;

            const  proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=5cbb86cad824364505e98a2374cf37eb`;

                fetch(api)
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        const {name} = data;
                        const {feels_like} = data.main;
                        const {id, main} = data.weather[0];
                        loc.textContent = name;
                        climate.textContent = main;
                        tempValue.textContent = Math.round(feels_like - 273);
                        console.log(data);
                    })
        })

    }
})